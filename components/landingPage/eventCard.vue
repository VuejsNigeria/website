<template>
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
        v-for="i in 3"
        :key="`${i}`"
        xs12
        sm6
        md4
        lg4
        xl4>
        <v-card>
          <v-img
            src="http://techcabal.com/wp-content/uploads/2016/11/developers.jpg"
            height="200px"
          />

          <v-card-title primary-title>
            <div>
              <div class="headline">Top western road trips</div>
              <span class="grey--text">1,000 miles of wonder</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat>Share</v-btn>
            <v-btn
              flat
              color="teal">Meetup</v-btn>
              <!--&lt;!&ndash;<v-spacer/>&ndash;&gt;-->
              <!--&lt;!&ndash;<v-btn&ndash;&gt;-->
              <!--&lt;!&ndash;icon&ndash;&gt;-->
              <!--&lt;!&ndash;@click="show = !show">&ndash;&gt;-->
              <!--&lt;!&ndash;<v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>&ndash;&gt;-->
              <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
              <!--</v-card-actions>-->

              <!--<v-slide-y-transition>-->
              <!--<v-card-text v-show="show">-->
              <!--I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.-->
              <!--</v-card-text>-->
              <!--</v-slide-y-transition>-->
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'EventCard',
  data: () => ({
    show: false
  })
}
</script>

<style scoped>
</style>
