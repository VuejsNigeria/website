<template>
  <v-app
    id="inspire"
    class="white">
    <v-navigation-drawer
      v-model="drawer"
      class="teal darken-4"
      temporary
      fixed
      app
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://w-dog.net/wallpapers/12/10/555931010272670.jpg">
        <v-layout
          pa-2
          column
          fill-height
          class="lightbox white--text">
          <v-spacer/>
          <v-flex shrink>
            <v-list class="pa-1">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="https://randomuser.me/api/portraits/men/85.jpg">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="white--text">John Leider</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <div class="body-1">heyfromjonathan@gmail.com</div>
          </v-flex>
        </v-layout>
      </v-img>



      <v-list
        class="pt-0"
        dense>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          ripple
          nuxt
        >
          <v-list-tile-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      class="teal--text"
      color="white"
      fixed
      dark
      app
      prominent>
      <v-toolbar-side-icon
        v-if="isMobile"
        class="teal--text"
        @click.stop="drawer = !drawer"/>
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
          nuxt
          to="/">Home</v-btn>
        <v-btn
          flat
          nuxt
          color="teal"
          to="/profile">Profile</v-btn>
        <v-btn
          flat
          color="teal"
          nuxt
          to="/events">Events</v-btn>
        <v-btn
          flat
          color="teal"
          nuxt
          to="/members">Members</v-btn>
        <v-btn
          flat
          nuxt
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
          nuxt
          to="/">Home</v-btn>
        <v-btn
          flat
          color="teal"
          nuxt
          to="/events">Events</v-btn>
        <v-btn
          flat
          color="teal"
          nuxt
          to="/members">Members</v-btn>
        <v-btn
          flat
          nuxt
          color="teal"
          to="/login">Login</v-btn>
        <v-btn
          flat
          nuxt
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
    drawer: null,
        items: [
          { title: 'Home', icon: 'home', link: '/' },
          { title: 'Profile', icon: 'account_circle', link: '/profile' },
          { title: 'Events', icon: 'directions_walk', link: '/events' },
          { title: 'Members', icon: 'group', link: '/members' },
          { title: 'Login', icon: 'accessibility', link: '/login' },
          { title: 'Signup', icon: 'power_settings_new', link: '/register' }
        ],
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
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return true
        case 'md': return false
        case 'lg': return false
        case 'xl': return false
      }
    },
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

<style scoped>
   .v-navigation-drawer {
    transition: none !important;
  }

  .lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
</style>
