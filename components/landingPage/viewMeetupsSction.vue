<template>
  <v-container
    class="section-border"
    grid-list-md>
    <v-layout
      row
      wrap>
      <v-flex xs4>
        <p class="font-weight-thick display-1 grey--text">Vue meetups</p>
      </v-flex>
      <v-flex xs5>
        <p class="font-weight-thin subheading grey--text">There are great Vuejs meetups happening around the 36 states of Nigeria. Find the closest to you!
        </p>
      </v-flex>
      <v-flex xs3>
        <v-btn
          color="teal"
          large
          class="white--text">View all meetups</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ViewMeetupsSction'
}
</script>

<style scoped>
.section-border {
  border-top: ghostwhite thin solid;
  border-radius: 10px;
}
</style>
