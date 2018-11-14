<template>
  <v-app class="white">
    <v-toolbar
      class="teal--text"
      color="white"
      fixed="true"
      dark

      prominent="true">
      <v-toolbar-title>
        <img
          src="~/assets/images/icon.png"
          style="max-width: 50px">
      </v-toolbar-title>
      <v-divider
        class="mx-3"
        inset
        vertical
        color="grey"
      />

      <span class="subheading">Vue Nigeria</span>
      <v-spacer/>
      <v-toolbar-items
        v-if="isLogged"
        class="hidden-sm-and-down">
        <!--<span class="subheading hidden-sm-and-down">{{ currentUser }}</span>-->
        <v-btn
          flat
          color="teal"
          nuxt="true"
          to="/">Home</v-btn>
        <v-btn
          flat
          nuxt="true"
          color="teal"
          to="/profile">Profile</v-btn>
        <v-btn
          flat
          color="teal"
          nuxt="true"
          to="/events">Events</v-btn>
        <v-btn
          flat
          color="teal"
          nuxt="true"
          to="/members">Members</v-btn>
        <v-btn
          flat
          nuxt="true"
          color="teal"
          @click.prevent="logout()">Logout</v-btn>
        <v-avatar
          color="teal"
          class="mt-1">
          <span class="white--text headline">{{ getFirstLetter }}</span>
        </v-avatar>
      </v-toolbar-items>
      <v-toolbar-items
        v-if="!isLogged"
        class="hidden-sm-and-down">
        <v-btn
          flat
          color="teal"
          nuxt="true"
          to="/">Home</v-btn>
        <v-btn
          flat
          color="teal"
          nuxt="true"
          to="/events">Events</v-btn>
        <v-btn
          flat
          color="teal"
          nuxt="true"
          to="/members">Members</v-btn>
        <v-btn
          flat
          nuxt="true"
          color="teal"
          to="/login">Login</v-btn>
        <v-btn
          flat
          nuxt="true"
          color="teal"
          to="/register">Signup</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <nuxt/>

    <v-footer
      dark
      height="auto"
    >
      <v-card
        flat
        tile
        class="teal darken-3 white--text text-xs-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider/>

        <v-card-text class="white--text">
          &copy;2018 — <strong>Vue Nigeria</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable */
import firebase from './../firebaseInit.js'

export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ],
    currentUser: ''
  }),
  computed: {
    isLogged() {
      if (firebase.auth().currentUser) {
        this.currentUser = firebase.auth().currentUser.email
        return true
      }
      return false
    },
    getFirstLetter() {
      let userEmail =  firebase.auth().currentUser.email
      return userEmail[0].toUpperCase()
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: '/' })
        })
    }
  }
}
</script>
