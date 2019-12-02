<template>
  <div>
    <b-card no-body class="addbottommargin">
      <template v-slot:header>
        <h6 class="mb-0">
          Activities
        </h6>
      </template>
      <div class="body">
        <Line_chart
          :height="height"
          :color="colors"
          :data="graphdata"
          :options="graphoptions"
        />
      </div>
      <template>
        <div>
          <div>
            <b-table
              small
              borderless
              :fields="fields"
              :items="items"
              responsive="sm"
              class="committable mb-0 border-bottom-0"
            >
              <template v-slot:cell(avatar)="data">
                <img class="avatar m-2" :src="data.value" alt="" />
              </template>
              <template v-slot:cell(action)="data">
                <div class="p-2">
                  <font-awesome icon="trash" class="trashicon"></font-awesome>
                </div>
              </template>
            </b-table>
            </b-table>
          </div>
        </div>
      </template>
    </b-card>
  </div>
</template>
<script>
import Line_chart from "../charts/Line";
import { line_options, lineChart_data2 } from "@/data/graph";
export default {
  name: "Activity",
  components: { Line_chart },
  data() {
    return {
      colors: {
        background: "#edf2fb",
        border: "#467fcf "
      },
      graphdata: lineChart_data2,
      graphoptions: line_options,
      height: 100,
      fields: [
        { key: "avatar", label: "",class:"align-middle  border-bottom  "},
        { key: "user", label: "user",class:"align-middle  border-bottom  " },
        { key: "commit", label: "Commit",class:"align-middle  border-bottom  "  },
        { key: "date", label: "Date",class:"align-middle  border-bottom  "  },
        { key: "Action", label: "",class:"align-middle   text-center border-bottom  "  }
      ],
      items: [
        {
          id: 1,
          user: "Sibella Lusty",
          commit: "Nulla ut erat id mauris vulputate elementum.",
          date: "23:55:11",
          avatar: "https://robohash.org/exeiusnobis.bmp?size=50x50&set=set1",
          action: false
        },
        {
          id: 2,
          user: "Patty Ryal",
          commit: "Maecenas tincidunt lacus at velit.",
          date: "8:09:24",
          avatar:
            "https://robohash.org/inventoreasperioressunt.bmp?size=50x50&set=set1",
          action: true
        },
        {
          id: 3,
          user: "Joelle Talton",
          commit:
            "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
          date: "3:57:57",
          avatar: "https://robohash.org/etquiea.png?size=50x50&set=set1",
          action: true
        },
        {
          id: 4,
          user: "Kitti Asty",
          commit:
            "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          date: "19:52:50",
          avatar:
            "https://robohash.org/quisquamesseaut.png?size=50x50&set=set1",
          action: true
        },
        {
          id: 5,
          user: "Nikki Piddlehinton",
          commit:
            "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
          date: "2:54:35",
          avatar: "https://robohash.org/quoseavoluptas.bmp?size=50x50&set=set1",
          action: true
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.avatar {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: #eee;
}
.trashicon {
  height: 10px;
  color: #eee;
  cursor: pointer;
}
.committable table td {
  vertical-align: middle;
}
.activityHeader,
.card-header {
  background: #fff;
  font-weight: 800;
  padding-top: 20px;
  padding-bottom: 20px;
}

</style>
