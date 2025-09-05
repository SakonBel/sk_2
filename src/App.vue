<script>
import data from "./assets/stock.json";
import location from "./assets/location.json";
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

      // Add sizes to items appropriately
      items.forEach((item, index) => {
        item["sizes"] = itemSize[index];
      });
      return items;
    },
    newItems() {
      if (this.searchValue.trim().length > 0) {
        return this.items.filter((item) =>
          (item.name.split("-")[0] + item.name.split("-")[1])
            .toLowerCase()
            .includes(this.searchValue.trim().toLowerCase())
        );
      }
      return this.items;
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
            placeholder="ป้อนรหัสสินค้า"
            aria-label="Search"
            v-model="searchValue"
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
