<template>
  <v-container class="text-md-center ">
    <h1 class="display-2 font-weight-thin mb-3">Upcoming events</h1>
    <p class="subheading">Here are great Vue Nigeria events and meetups happening every month.</p>
    <event-card/>
  </v-container>
</template>

<script>
import EventCard from './eventCard'
export default {
  name: 'UpComingEventSection',
  components: { EventCard }
}
</script>

<style scoped>
</style>
