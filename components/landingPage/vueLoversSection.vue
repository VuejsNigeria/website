<template>
  <div
    style="background-color: #F0F1F2"
    class="text-md-center pt-5 pb-5 grey--text">
    <h1 class="display-2 font-weight-thin mb-3">Vuejs Lovers</h1>
    <v-item-group>
      <v-container
        grid-list-md
        text-xs-center>
        <v-layout
          align-center
          justify-center
          row
          fill-height
          wrap>
          <v-flex
            v-for="n in 4"
            :key="n"
            xs12
            md3
          >
            <img
              src="~/assets/images/ourPartners/partner2.7ba8c33.jpeg"
              style="max-width: 200px">
          </v-flex>
        </v-layout>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
export default {
  name: 'VueLoversSection'
}
</script>

<style scoped>
</style>
