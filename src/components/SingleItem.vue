<script>
export default {
  name: "SingleItem",
  props: ["current", "toggleDisplay"],
};
</script>

<template>
  <div class="wrapper">
    <div class="position-relative w-100"></div>
    <!-- <div class="layout mx-auto">
      <div v-for="loc in current.location">
        <div
          v-show="loc[0]"
          class="spinner-grow text-danger box"
          :class="loc"
          role="status"
        ></div>
      </div>
    </div> -->
    <h2 class="text-primary">{{ current.name }}</h2>
    <h4 class="text-secondary">
      {{ current.desc.split("_")[1] }}
    </h4>

    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <th>Location</th>
          <td>
            <span v-for="location in current.location"
              >{{ location + " " }}
            </span>
          </td>
        </tr>
        <tr>
          <th>Zone</th>
          <td>Foamies Woman</td>
        </tr>
        <tr>
          <th>Shelf</th>
          <td>From the far most inside</td>
        </tr>
        <tr>
          <th>Floor</th>
          <td>
            <div
              v-if="
                current.location[0].slice(1) > 57 &&
                current.location[0].slice(1) % 4 === 1
              "
            >
              The lowest floor
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) > 57 &&
                current.location[0].slice(1) % 4 === 0
              "
            >
              The second floor from lowest
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) > 57 &&
                current.location[0].slice(1) % 4 === 3
              "
            >
              The second floor from top
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) > 57 &&
                current.location[0].slice(1) % 4 === 2
              "
            >
              The top floor
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table table-responsive table-striped table-bordered">
      <tbody class="table-group-divider">
        <tr class="table-responsive">
          <th scope="row" class="table-responsive">ไซส์</th>
          <th scope="row" class="table-responsive">คงเหลือ</th>
        </tr>
        <tr v-for="item in current.sizes">
          <td>
            {{ item.split("=")[0] }}
          </td>
          <td>
            {{
              isNaN(item.split("=")[1])
                ? item.split("=")[1]
                : Math.trunc(item.split("=")[1])
            }}
            {{ current.uom }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* button {
  margin-left: auto !important;
  margin-right: 0 !important;
} */

h2,
h4 {
  margin-left: 8px;
}

.layout {
  width: 81vw;
  height: 33vw;
  background-image: url("../assets/tmlayout.png");
  background-size: cover;
  position: relative;
}

.box {
  width: 3.5%;
  height: 8%;
  position: absolute;
}

.S058,
.S059,
.S060,
.S061 {
  top: 23%;
  right: 10%;
}

.S062,
.S063,
.S064,
.S065 {
  top: 39%;
  right: 10%;
}

.S066,
.S067,
.S068,
.S069 {
  top: 23%;
  right: 17%;
}

.S070,
.S071,
.S072,
.S073 {
  top: 39%;
  right: 17%;
}

.S074,
.S075,
.S076,
.S077 {
  bottom: 20%;
  right: 28%;
}

.S078,
.S079,
.S080,
.S081 {
  bottom: 20%;
  right: 36%;
}

.S082,
.S083,
.S084,
.S085 {
  bottom: 20%;
  right: 44%;
}

.S086,
.S087,
.S088,
.S089 {
  bottom: 20%;
  right: 51%;
}

.S090,
.S091,
.S092,
.S093 {
  bottom: 20%;
  right: 59%;
}

.S094,
.S095,
.S096,
.S097 {
  bottom: 20%;
  right: 67%;
}

.S098,
.S099,
.S100,
.S101 {
  bottom: 20%;
  right: 74%;
}

.S102,
.S103,
.S104,
.S105 {
  bottom: 44%;
  left: 8%;
}

.S106,
.S107,
.S108,
.S109 {
  bottom: 44%;
  left: 15%;
}

.S110,
.S111,
.S112,
.S113 {
  bottom: 44%;
  left: 22%;
}

.S114,
.S115,
.S116,
.S117 {
  bottom: 45%;
  left: 36%;
}

.S118,
.S119,
.S120,
.S121 {
  bottom: 45%;
  left: 44%;
}

.S122,
.S123,
.S124,
.S125 {
  bottom: 45%;
  left: 52%;
}

.S126,
.S127,
.S128,
.S129 {
  bottom: 54%;
  left: 52%;
}

.S130,
.S131,
.S132,
.S133 {
  bottom: 54%;
  left: 44%;
}

.S134,
.S135,
.S136,
.S137 {
  bottom: 54%;
  left: 36%;
}

.S138,
.S139,
.S140,
.S141 {
  bottom: 53%;
  left: 22%;
}

.S142,
.S143,
.S144,
.S145 {
  bottom: 53%;
  left: 15%;
}

.S146,
.S147,
.S148,
.S149 {
  bottom: 53%;
  left: 8%;
}

.S150,
.S151,
.S152,
.S153 {
  top: 17%;
  left: 9%;
}

.S154,
.S155,
.S156,
.S157 {
  top: 17%;
  left: 15%;
}

.S158,
.S159,
.S160,
.S161 {
  top: 17%;
  left: 22%;
}

.S162,
.S163,
.S164,
.S165 {
  top: 17%;
  left: 30%;
}

.S166,
.S167,
.S168,
.S169 {
  top: 17%;
  left: 37%;
}

.S170,
.S171,
.S172,
.S173 {
  top: 17%;
  left: 44%;
}

.S174,
.S175,
.S176,
.S177 {
  top: 17%;
  left: 51%;
}

.S178,
.S179,
.S180,
.S181 {
  top: 17%;
  left: 58%;
}
</style>
