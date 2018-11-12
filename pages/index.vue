<template>
  <div>
    <Parallax/>
    <up-coming-event-section/>
    <view-meetups-sction/>
    <members/>
  </div>
</template>
<script>
import Parallax from '../components/landingPage/parallax'
import UpComingEventSection from '../components/landingPage/upComingEventSection'
import ViewMeetupsSction from '../components/landingPage/viewMeetupsSction'
import Members from '../components/landingPage/members'
export default {
  name: 'Index',
  components: { Members, ViewMeetupsSction, UpComingEventSection, Parallax }
}
</script>

<style scoped>
</style>
