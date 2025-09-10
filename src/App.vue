<script>
import data from "./assets/stock.json";
import location from "./assets/location.json";
import price from "./assets/price.json";
import promotion from "./assets/promotion.json";

import datatable from "./components/DataTable.vue";
import singleitem from "./components/SingleItem.vue";

const newData = [];

export default {
  name: "App",
  components: {
    datatable,
    singleitem,
  },
  data() {
    return {
      data,
      location,
      searchValue: "",
      cr: "",
      display: true,
    };
  },
  computed: {
    // initialize data placeholder
    items() {
      let itemName = "";
      let items = [];
      let itemSize = [];
      let allSize = [];
      let locArr = [];

      // Creare data array
      data.forEach((item, index) => {
        if (itemName !== item["Item No."]) {
          items.push({
            id: index,
            name: item["Item No."],
            desc: item.Description,
            uom: item.UOM,
            location: [],
          });
        }

        // skip the same name data
        itemName = item["Item No."];
      });

      // Create size array
      data.forEach((item, index) => {
        if (index === 0) {
          allSize.push(`${item.Variant}=${item["Net Inventory"]}`);
        } else if (index + 1 === data.length) {
          itemSize.push(allSize);
          allSize = [];
          allSize.push(`${item.Variant}=${item["Net Inventory"]}`);
          itemSize.push(allSize);
        } else if (itemName !== item["Item No."]) {
          itemSize.push(allSize);
          allSize = [];
          allSize.push(`${item.Variant}=${item["Net Inventory"]}`);
        } else {
          allSize.push(`${item.Variant}=${item["Net Inventory"]}`);
        }

        // skip the same name data
        itemName = item["Item No."];
      });

      // Loop through location
      location.forEach((loc) => {
        for (const property in loc) {
          if (loc[property] !== null && loc[property] !== loc.Location) {
            locArr.push(`${loc[property]}=${loc.Location}`);
          }
        }
      });

      // Add location to item
      locArr.forEach((loc) => {
        items.forEach((item) => {
          if (loc.split("=")[0] === item.name) {
            item.location.push(loc.split("=")[1]);
          }
        });
      });

      // Add price to items
      price.forEach((itemPrice) => {
        items.forEach((item) => {
          if (itemPrice["No. Item"] === item.name) {
            item.price = itemPrice["Retail Price"];
            item.sale = itemPrice["Unit Price"];
            item.disc = itemPrice["Disc."];
            item.isOnPromotion = false;
          }
        });
      });

      // Separate one price items
      items.forEach((item) => {
        if (item.price !== item.sale) {
          item.isOnPromotion = true;
          item.proName = "One Price";
          item.proCat = "Sale";
        }
      });

      // Add additional promotion
      promotion.forEach((proPrice) => {
        items.forEach((item) => {
          if (proPrice["No."] === item.name) {
            item.disc = "10%";
            item.sale = (
              Number(proPrice["Retail Price"].replace(",", "")) * 0.9
            ).toLocaleString("en-US");
            item.isOnPromotion = true;
            item.proName = "September Savings";
            item.proCat = "Main";
          }
        });
      });

      // Add sizes to items appropriately
      items.forEach((item, index) => {
        item["sizes"] = itemSize[index];
      });

      return items;
    },
    randomItems() {
      const set_01 = this.items.slice(0, 50);
      const set_02 = this.items.slice(51, 100);
      const set_03 = this.items.slice(101, 150);
      const set_04 = this.items.slice(151, 200);
      const set_05 = this.items.slice(201, 250);
      const set_06 = this.items.slice(251, 300);
      const set_07 = this.items.slice(301, 350);
      const set_08 = this.items.slice(351, 400);
      const set_09 = this.items.slice(401, 450);
      const set_10 = this.items.slice(451, 500);

      const randomArr = [
        set_01,
        set_02,
        set_03,
        set_04,
        set_05,
        set_06,
        set_07,
        set_08,
        set_09,
        set_10,
      ];

      return randomArr[Math.floor(Math.random() * randomArr.length)];
    },
    newItems() {
      if (this.searchValue.trim().length > 3) {
        return this.items.filter((item) =>
          (item.name.split("-")[0] + item.name.split("-")[1])
            .toLowerCase()
            .includes(this.searchValue.trim().toLowerCase())
        );
      }
      return this.randomItems;
    },
    current() {
      if (this.cr === "") {
        return this.items[0];
      } else {
        return this.cr;
      }
    },
  },
  methods: {
    toggleDisplay() {
      this.display = !this.display;
    },
    getLocation(id) {
      let now = [];
      now = this.items.filter((item) => {
        if (item.id === id) {
          return item;
        }
      });
      this.cr = now.pop();
      this.display = !this.display;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$refs.search.blur();
      console.log("called");
    },
  },
};
</script>

<template>
  <div class="container">
    <nav class="container navbar bg-body-tertiary fixed-top">
      <div class="d-md-flex justify-content-between w-100 px-4">
        <a class="navbar-brand fs-4"
          ><span class="text-primary">SKECHERS</span> The Mall Korat</a
        >

        <!-- <form class="d-flex" role="search"> -->
        <div class="d-flex">
          <input
            v-if="display"
            class="form-control me-2"
            type="search"
            ref="search"
            placeholder="ป้อนรหัสสินค้า"
            aria-label="Search"
            v-model="searchValue"
            @keyup.enter="(e) => handleSubmit(e)"
          />
          <button
            v-if="!display"
            @click="toggleDisplay"
            type="button"
            class="btn btn-primary btn-sm"
          >
            ย้อนกลับ
          </button>
        </div>
        <!-- <button class="btn btn-outline-success" type="submit">ค้นหา</button> -->
        <!-- </form> -->
      </div>
    </nav>

    <main>
      <datatable
        v-if="display"
        :newItems="newItems"
        :getLocation="getLocation"
      />
      <singleitem v-else :current="current" :toggleDisplay="toggleDisplay" />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  margin-top: 100px;
  max-height: 90vh;
  overflow-y: auto;
}

.big-one {
  z-index: 999;
}

button {
  margin: 0 0 0 auto;
}

thead {
  position: relative;
}

thead tr {
  position: sticky;
  top: -1px;
}
</style>
