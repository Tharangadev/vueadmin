<template>
  <b-card no-body class="addbottommargin">
    <b-table-simple hover small caption-top responsive>
      <b-thead>
        <b-tr>
          <b-th v-for="feild in fields" class="thead"
            >{{feild.label}}</b-th
          >
        </b-tr>
      </b-thead>
      <b-tbody class="tbody">
        <b-tr v-for="item in items">
          <b-td>
            <img :src="item.avatar" alt="" class="m-1 rounded-circle" />
          </b-td>
          <b-td>
            {{item.user}}
          </b-td>
          <td>
            <div class="d-flex justify-content-between">
              <div>{{item.usage}}%</div>
              <div>23-July 23 Auguest</div>
            </div>
            <b-progress
              :value="item.usage"
              :max="100"
              class="mb-3 mt-3 "
              height="0.75rem"
              variant="warning"
            ></b-progress>
          </td>
          <td>
            <img :src="card_icon(item.payment)" alt="" class="cardIcon" />
          </td>
          <td>
            {{item.activity}}
          </td>
          <td>
            {{item.satisfaction}}
          </td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </b-card>
</template>

<script>
  export default {
    name: 'invoice',
    methods: {
      card_icon(paymethod) {
        return this.icons[paymethod];
      },
    },
    data() {
      return {
        fields: [
          {key: 'avatar', label: ''},
          {key: 'user', label: 'user'},
          {key: 'usage', label: 'usage'},
          {key: 'payment', label: 'payment'},
          {key: 'activity', label: 'activity'},
          {key: 'satisfaction', label: 'satisfaction'},
        ],
        items: [
          {
            id: 1,
            avatar:
              'https://robohash.org/voluptasenimaccusamus.jpg?size=50x50&set=set1',
            user: 'Marti Stoyell',
            usage: 10,
            payment: 'dis',
            activity: 'artificial intelligence',
            satisfaction: 45,
          },
          {
            id: 2,
            avatar:
              'https://robohash.org/etiustosimilique.png?size=50x50&set=set1',
            user: 'Lucien Schohier',
            usage: 90,
            payment: 'amex',
            activity: 'demand-driven',
            satisfaction: 81,
          },
          {
            id: 3,
            avatar:
              'https://robohash.org/numquamidconsectetur.png?size=50x50&set=set1',
            user: 'Lynna Benninck',
            usage: 93,
            payment: 'visa',
            activity: 'workforce',
            satisfaction: 21,
          },
          {
            id: 4,
            avatar: 'https://robohash.org/innequenihil.png?size=50x50&set=set1',
            user: 'Hedy Ogelbe',
            usage: 34,
            payment: 'master',
            activity: 'Graphic Interface',
            satisfaction: 84,
          },
          {
            id: 5,
            avatar:
              'https://robohash.org/etquoinventore.png?size=50x50&set=set1',
            user: 'Shena Heinz',
            usage: 55,
            payment: 'dis',
            activity: 'hardware',
            satisfaction: 83,
          },
        ],
        icons: {
          visa: require('@/assets/visa.svg'),
          amex: require('@/assets/amex.svg'),
          master: require('@/assets/master.svg'),
          dis: require('@/assets/dis.svg'),
        },
      };
    },
  };
</script>
<style scoped lang="scss">
  .imageavatar {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background: #eee;
  }
  .avatar_blk {
    padding: 0px;
    width: 10px;
  }
  table {
    border-bottom: 1px solid rgba(0, 40, 100, 0.12);
  }
  .table thead th {
    border: none;
  }
  .cardIcon {
    height: 32px;
  }
  .thead {
    text-transform: uppercase;
    color: #9aa0ac;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 400;
  }
  .tbody {
    td {
      vertical-align: middle;
      padding: 0.75rem;
    }
  }
  .thead,
  .table-sm {
    td,
    th {
      vertical-align: middle;
      padding: 0.75rem;
    }
  }
</style>
