<script>
export default {
  name: "SingleItem",
  props: ["current", "toggleDisplay"],
};
</script>

<template>
  <div class="wrapper">
    <div class="position-relative w-100"></div>
    <h2 class="text-primary">{{ current.name }}</h2>
    <h4 class="text-secondary">
      {{ current.desc.split("_")[1] }}
    </h4>

    <!-- Position Table -->
    <table class="table">
      <thead></thead>
      <tbody>
        <!-- Location -->
        <tr>
          <th>โลเคชั่น</th>
          <td>
            <span v-for="location in current.location"
              >{{ location + " " }}
            </span>
          </td>
        </tr>
        <!-- Zone -->
        <tr>
          <th>โซน</th>
          <td>
            <div v-if="current.location[0].slice(0, 1) == 'B'">อยู่ในกล่อง</div>
            <div v-else-if="current.location[0].slice(0, 1) == 'F'">
              อยู่หน้าร้าน
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 150 &&
                current.location[0].slice(1) <= 161
              "
            >
              รองเท้าแตะผู้หญิง
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 162 &&
                current.location[0].slice(1) <= 181
              "
            >
              รองเท้าลำลองผู้หญิง
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 138 &&
                current.location[0].slice(1) <= 149
              "
            >
              รองเท้าเด็กผู้หญิง
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 102 &&
                current.location[0].slice(1) <= 113
              "
            >
              รองเท้าเด็กผู้ชาย
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 126 &&
                current.location[0].slice(1) <= 137
              "
            >
              รองเท้าวิ่งผู้หญิง
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 114 &&
                current.location[0].slice(1) <= 125
              "
            >
              รองเท้าแตะผู้ชาย
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 74 &&
                current.location[0].slice(1) <= 89
              "
            >
              รองเท้าเดิน/วิ่งผู้ชาย
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 90 &&
                current.location[0].slice(1) <= 93
              "
            >
              รองเท้าลำลองผู้ชาย
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 58 &&
                current.location[0].slice(1) <= 73
              "
            >
              รองเท้าเดินผู้หญิง
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 1 &&
                current.location[0].slice(1) <= 57
              "
            >
              เสื้อผ้าและ accessories
            </div>
          </td>
        </tr>
        <!-- Shelf -->
        <tr>
          <th>เชลฟ์</th>
          <td>
            <div v-if="current.location[0].slice(0, 1) == 'B'">-</div>
            <div v-else-if="current.location[0].slice(0, 1) == 'F'">-</div>
            <div
              v-else-if="
                (current.location[0].slice(1) >= 150 &&
                  current.location[0].slice(1) <= 153) ||
                (current.location[0].slice(1) >= 146 &&
                  current.location[0].slice(1) <= 149) ||
                (current.location[0].slice(1) >= 102 &&
                  current.location[0].slice(1) <= 105) ||
                (current.location[0].slice(1) >= 66 &&
                  current.location[0].slice(1) <= 69) ||
                (current.location[0].slice(1) >= 58 &&
                  current.location[0].slice(1) <= 61) ||
                (current.location[0].slice(1) >= 1 &&
                  current.location[0].slice(1) <= 19)
              "
            >
              เชลฟ์ติดผนัง
            </div>
            <div
              v-else-if="
                (current.location[0].slice(1) >= 154 &&
                  current.location[0].slice(1) <= 157) ||
                (current.location[0].slice(1) >= 142 &&
                  current.location[0].slice(1) <= 145) ||
                (current.location[0].slice(1) >= 106 &&
                  current.location[0].slice(1) <= 109) ||
                (current.location[0].slice(1) >= 70 &&
                  current.location[0].slice(1) <= 73) ||
                (current.location[0].slice(1) >= 62 &&
                  current.location[0].slice(1) <= 65) ||
                (current.location[0].slice(1) >= 20 &&
                  current.location[0].slice(1) <= 38)
              "
            >
              เชลฟ์ที่ 2 นับจากผนังด้านใน
            </div>
            <div
              v-else-if="
                (current.location[0].slice(1) >= 158 &&
                  current.location[0].slice(1) <= 161) ||
                (current.location[0].slice(1) >= 138 &&
                  current.location[0].slice(1) <= 141) ||
                (current.location[0].slice(1) >= 110 &&
                  current.location[0].slice(1) <= 113)
              "
            >
              เชลฟ์ที่ 3 นับจากผนังด้านใน
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 162 &&
                current.location[0].slice(1) <= 165
              "
            >
              เชลฟ์ที่ 4 นับจากผนังด้านใน
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 98 &&
                current.location[0].slice(1) <= 101
              "
            >
              เชลฟ์ใกล้กล่องโชว์รองเท้าแตะ
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 94 &&
                current.location[0].slice(1) <= 97
              "
            >
              เชลฟ์ที่ 2 นับจากกล่องโชว์รองเท้าแตะ
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 90 &&
                current.location[0].slice(1) <= 93
              "
            >
              เชลฟ์ที่ 3 นับจากกล่องโชว์รองเท้าแตะ
            </div>
            <div
              v-else-if="
                (current.location[0].slice(1) >= 178 &&
                  current.location[0].slice(1) <= 181) ||
                (current.location[0].slice(1) >= 126 &&
                  current.location[0].slice(1) <= 129) ||
                (current.location[0].slice(1) >= 122 &&
                  current.location[0].slice(1) <= 125)
              "
            >
              เชลฟ์ติดประตู
            </div>
            <div
              v-else-if="
                (current.location[0].slice(1) >= 174 &&
                  current.location[0].slice(1) <= 177) ||
                (current.location[0].slice(1) >= 130 &&
                  current.location[0].slice(1) <= 133) ||
                (current.location[0].slice(1) >= 118 &&
                  current.location[0].slice(1) <= 121)
              "
            >
              เชลฟ์ที่ 2 นับจากประตู
            </div>
            <div
              v-else-if="
                (current.location[0].slice(1) >= 170 &&
                  current.location[0].slice(1) <= 173) ||
                (current.location[0].slice(1) >= 134 &&
                  current.location[0].slice(1) <= 137) ||
                (current.location[0].slice(1) >= 114 &&
                  current.location[0].slice(1) <= 117)
              "
            >
              เชลฟ์ที่ 3 นับจากประตู
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 166 &&
                current.location[0].slice(1) <= 169
              "
            >
              เชลฟ์ที่ 4 นับจากประตู
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 74 &&
                current.location[0].slice(1) <= 77
              "
            >
              เชลฟ์ใกล้เครื่องตอกบัตร
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 78 &&
                current.location[0].slice(1) <= 81
              "
            >
              เชลฟ์ที่ 2 นับจากเครื่องตอกบัตร
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 82 &&
                current.location[0].slice(1) <= 85
              "
            >
              เชลฟ์ที่ 3 นับจากเครื่องตอกบัตร
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 86 &&
                current.location[0].slice(1) <= 89
              "
            >
              เชลฟ์ที่ 4 นับจากเครื่องตอกบัตร
            </div>
            <div
              v-else-if="
                current.location[0].slice(1) >= 39 &&
                current.location[0].slice(1) <= 57
              "
            >
              เชลฟ์หน้าจุดวางกระเป๋า
            </div>
          </td>
        </tr>
        <!-- Floor -->
        <tr>
          <th>ชั้น</th>
          <td>
            <div v-if="current.location[0].slice(0, 1) == 'B'">-</div>
            <div v-else-if="current.location[0].slice(0, 1) == 'F'">-</div>
            <div
              v-else-if="
                (current.location[0].slice(1) > 57 &&
                  current.location[0].slice(1) % 4 === 1) ||
                (current.location[0].slice(1) >= 14 &&
                  current.location[0].slice(1) <= 19) ||
                (current.location[0].slice(1) >= 33 &&
                  current.location[0].slice(1) <= 38) ||
                (current.location[0].slice(1) >= 52 &&
                  current.location[0].slice(1) <= 57)
              "
            >
              ชั้นล่างสุด
            </div>
            <div
              v-else-if="
                (current.location[0].slice(1) > 57 &&
                  current.location[0].slice(1) % 4 === 0) ||
                (current.location[0].slice(1) >= 8 &&
                  current.location[0].slice(1) <= 13) ||
                (current.location[0].slice(1) >= 27 &&
                  current.location[0].slice(1) <= 32) ||
                (current.location[0].slice(1) >= 46 &&
                  current.location[0].slice(1) <= 51)
              "
            >
              ชั้นที่ 2 นับจากด้านล่าง
            </div>
            <div
              v-else-if="
                (current.location[0].slice(1) > 57 &&
                  current.location[0].slice(1) % 4 === 3) ||
                (current.location[0].slice(1) >= 2 &&
                  current.location[0].slice(1) <= 7) ||
                (current.location[0].slice(1) >= 21 &&
                  current.location[0].slice(1) <= 26) ||
                (current.location[0].slice(1) >= 40 &&
                  current.location[0].slice(1) <= 45)
              "
            >
              ชั้นที่ 2 นับจากด้านบน
            </div>
            <div
              v-else-if="
                (current.location[0].slice(1) > 57 &&
                  current.location[0].slice(1) % 4 === 2) ||
                current.location[0].slice(1) == 1 ||
                current.location[0].slice(1) == 20 ||
                current.location[0].slice(1) == 39
              "
            >
              ชั้นบนสุด
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="layout mx-auto">
      <div v-for="loc in current.location">
        <div
          v-show="loc[0]"
          class="spinner-grow text-danger box"
          :class="loc"
          role="status"
        ></div>
      </div>
    </div>

    <!-- Sizes Table -->
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
  margin-top: 40px;
  margin-bottom: 40px;
  border: 2px dashed;
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
