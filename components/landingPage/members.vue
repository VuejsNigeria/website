<template>
  <div
    class="members text-md-center mt-5">
    <!--<p class="display-1 pt-5 grey&#45;&#45;text">Members</p>-->

    <v-container
      fluid
      grid-list-md>
      <member-search-bar/>
      <v-data-iterator
        :items="items"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-tag="v-layout"
        row
        wrap
      >
        <v-flex
          slot="item"
          slot-scope="props"
          xs12
          sm6
          md4
          lg3
        >
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`">
              <v-card-title>
                <v-avatar
                  :tile="tile"
                  :size="100"
                  color="grey lighten-4"
                  style="max-width: 100%"
                  class="img-center"
                >
                  <img
                    src="https://cateringopmaat.nl/wp-content/uploads/2017/08/blank-profile-picture-973460_1280.png"
                    alt="avatar"
                  >
                </v-avatar>
              </v-card-title>
              <v-divider/>
              <v-card-title primary-title>
                <div
                  style="max-width: 100%"
                  class="img-center grey--text">
                  <h3 class="headline mb-0 text-md-center">Bello Musa</h3>
                  <div>Kano, Nigeria</div>
                </div>
              </v-card-title>
              <v-card-actions style="background-color: teal">
                <v-btn
                  flat
                  color="white">
                  Share</v-btn>
                <v-btn
                  flat
                  color="white">
                  Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-data-iterator>
    </v-container>
  </div>
</template>

<script>
import MemberSearchBar from './memberSearchBar'
export default {
  name: 'Members',
  components: { MemberSearchBar },
  data: () => ({
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 8
    },
    items: [
      {
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        value: false,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%'
      },
      {
        value: false,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%'
      },
      {
        value: false,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%'
      },
      {
        value: false,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%'
      },
      {
        value: false,
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%'
      },
      {
        value: false,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%'
      },
      {
        value: false,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: '0%',
        iron: '45%'
      },
      {
        value: false,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%'
      },
      {
        value: false,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: '12%',
        iron: '6%'
      }
    ]
  })
}
</script>

<style scoped>
.members {
  background-color: #ededee;
}
.img-center {
  margin: auto;
}
</style>
