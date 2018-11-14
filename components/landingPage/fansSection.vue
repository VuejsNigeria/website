<template>
  <v-card
    color="transparent"
    flat
    tile
  >
    <div class="text-md-center mt-5">
      <h1 class="display-2 font-weight-thin mb-3">Meet 11,571 Vue Nigeria fans</h1>

    </div>
    <v-window v-model="onboarding">
      <v-window-item
        v-for="n in length"
        :key="`card-${n}`"
      >
        <v-card
          color="transparent"
          height="200"
          flat
        >
          <v-layout>
            <v-flex
              xs12
              sm6
              offset-sm3>
              <v-container
                grid-list-sm
                fluid>
                <v-layout
                  row
                  wrap
                  justify-space-between>
                  <v-flex
                    v-for="n in 4"
                    :key="n"
                    xs3
                    d-flex
                  >
                    <v-card
                      flat
                      tile
                      class="d-flex">
                      <v-avatar size="100">
                        <img
                          :src="`https://cateringopmaat.nl/wp-content/uploads/2017/08/blank-profile-picture-973460_1280.png`"
                          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                          aspect-ratio="1"
                          class="grey lighten-2"
                        >
                      </v-avatar>
                      <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"/>
                      </v-layout>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>

            </v-flex>
          </v-layout>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn
        flat
        @click="prev"
      >
        <v-icon color="yellow">keyboard_arrow_left</v-icon>
      </v-btn>
      <v-item-group
        v-model="onboarding"
        class="text-xs-center"
        mandatory
      >
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
        >
          <v-btn
            slot-scope="{ active, toggle }"
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon color="teal">lens</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn
        flat
        @click="next"
      >
        <v-icon color="yellow">keyboard_arrow_right</v-icon>
      </v-btn>
    </v-card-actions>
    <div class="text-md-center ma-3">
      <v-btn
        color="white"
        large
        class="teal--text"
        nuxt="true"
        to="/members">View all members</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'FansSection',
  data: () => ({
    length: 3,
    onboarding: 0
  }),

  methods: {
    next() {
      this.onboarding = this.onboarding + 1 === length ? 0 : this.onboarding + 1
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1
    }
  }
}
</script>

<style scoped>
</style>
