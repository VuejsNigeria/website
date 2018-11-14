<template>
  <v-img
    src="https://previews.dropbox.com/p/orig/AAOwzZz6lM8GRT3cw47aPtQ-xborFbWfPqtwXp-N3vhSvAeylAlZD0vNDjVh2A0P7hrgiaMJK8YVMD5-WxYr1vcKKQKc4wW1UvCQzROaEcfR-T2qLyr7se3k37hbOUtDQ98CM-Y6gc-3_BljpFtsOIuu/p.svg?size=1280x960&size_mode=3"
    gradient="to top right, rgba(0,161,117,.33), rgba(49,76, 95,1)">
    <v-container
      grid-list-md
      text-xs-center>
      <v-layout
        align-center
        justify-center
        row
        fill-height
        wrap
      >
        <v-flex
          xs12
          sm6
          md6
          lg6
          xl6>
          <h1 class="display-3 font-weight-black mb-3 white--text">Anything to Share with Us?</h1>
        </v-flex>

        <v-flex
          xs6
          xs12
          sm6
          md6
          lg6
          xl6>
          <v-card
            color="transparent"
            class="ma-5">
            <!--<v-toolbar-->
            <!--dark-->
            <!--color="teal">-->
            <!--<v-toolbar-title>We love to meet you</v-toolbar-title>-->
            <!--</v-toolbar>-->
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="name"
                  prepend-icon="person"
                  name="login"
                  label="Name"
                  type="text"
                  placeholder="Evan Yu"
                  box
                  dark
                  color="white"/>
                <v-text-field
                  id="password"
                  v-model="email"
                  prepend-icon="mail"
                  name="email"
                  label="Email"
                  placeholder="evanyu@vuejs.com"
                  box
                  dark
                  type="text"
                  color="white"/>
                <v-textarea
                  color="white"
                  dark
                  name="input-7-1"
                  box
                  label="Comment"
                  auto-grow
                  value=""
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                color="teal"
                class="white--text"
                @click.prevent="login">Send</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: 'BannerParallax'
}
</script>

<style scoped>
</style>
