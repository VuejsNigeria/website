<template>
  <div>
    <Parallax/>
    <up-coming-event-section/>
    <view-meetups-sction/>
    <fans-section/>
    <vue-lovers-section/>
    <banner-parallax/>
  </div>
</template>
<script>
import Parallax from '../components/landingPage/parallax'
import UpComingEventSection from '../components/landingPage/upComingEventSection'
import ViewMeetupsSction from '../components/landingPage/viewMeetupsSction'
import Members from '../components/landingPage/members'
import BannerParallax from '../components/landingPage/bannerParallax'
import VueLoversSection from '../components/landingPage/vueLoversSection'
import FansSection from '../components/landingPage/fansSection'
export default {
  name: 'Index',
  components: {
    FansSection,
    VueLoversSection,
    BannerParallax,
    Members,
    ViewMeetupsSction,
    UpComingEventSection,
    Parallax
  }
}
</script>

<style scoped>
</style>
