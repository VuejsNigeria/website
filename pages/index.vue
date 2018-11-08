<template>
  <div>
    <Parallax/>
    <up-coming-event-section/>
    <view-meetups-sction/>
  </div>
</template>
<script>
import Parallax from '../components/landingPage/parallax'
import UpComingEventSection from '../components/landingPage/upComingEventSection'
import ViewMeetupsSction from '../components/landingPage/viewMeetupsSction'
export default {
  name: 'Index',
  components: { ViewMeetupsSction, UpComingEventSection, Parallax }
}
</script>

<style scoped>
</style>
