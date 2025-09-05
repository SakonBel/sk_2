<script>
export default {
  name: "DataTable",
  props: ["newItems", "getLocation"],
  data() {
    return {
      oldUrl:
        "https://images.skechers.com/image;width=800%2Cformat=auto/***_PROFILE_01",
    };
  },
};
</script>

<template>
  <div class="table-responsive wrapper">
    <table class="table table-striped table-bordered">
      <thead class="table-dark big-one">
        <tr>
          <th scope="col">รหัสสินค้า</th>
          <th scope="col">จำนวน</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in newItems" :key="row.id">
          <td>
            <h5>
              {{ row.name }}
            </h5>
            <h6>
              {{ row.desc.split("_")[1] }}
            </h6>
            <hr />
            <h6 v-show="row.isOnPromotion" class="text-info">
              โปรโมชั่น : {{ row.proName }}
            </h6>
            <h6 v-show="!row.isOnPromotion">
              ราคา<span> {{ row.price }}-</span>
            </h6>
            <h6 v-show="row.isOnPromotion">
              ราคาเต็ม<span> {{ row.price }}-</span>
            </h6>
            <h5 v-show="row.isOnPromotion" class="text-danger">
              ราคาลด<span> {{ row.sale }}-</span>
            </h5>

            <img
              :src="oldUrl.replace('***', row.name.replace('-', '_'))"
              alt=""
              width="200"
              height="200"
            />
          </td>
          <td>
            <p>
              <a @click="getLocation(row.id)" class="icon-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-seam-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"
                  />
                </svg> </a
              ><span @click="getLocation(row.id)" class="text-primary">
                ดูตำแหน่งสินค้า</span
              >
            </p>

            <table class="table table-bordered table-striped">
              <thead class="table-primary">
                <tr>
                  <th>ไซส์</th>
                  <th>คงเหลือ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="size in row.sizes">
                  <td>
                    {{ size.split("=")[0] }}
                  </td>
                  <td>
                    {{
                      isNaN(size.split("=")[1])
                        ? size.split("=")[1]
                        : Math.trunc(size.split("=")[1])
                    }}
                    {{ row.uom }}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <!-- <td>
                {{ isNaN(row.count) ? row.count : Math.trunc(row.count) }}
                {{ row.uom }}
              </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.wrapper {
  margin-top: 100px;
  max-height: 80vh;
  overflow-y: auto;
}

.big-one {
  z-index: 999;
}

img {
  border-radius: 15px;
  box-shadow: 5px 5px 10px gainsboro;
}

thead {
  position: relative;
}

thead tr {
  position: sticky;
  top: -1px;
}
</style>
