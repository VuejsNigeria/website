<template>
  <v-parallax
    dark
    src="https://w-dog.net/wallpapers/12/10/555931010272670.jpg"
    height="600"
  >
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
          <v-img :src="`https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2000px-Vue.js_Logo_2.svg.png`"/>
        </v-flex>
        <v-flex
          xs6
          xs12
          sm6
          md6
          lg6
          xl6>
          <h1 class="display-2 font-weight-thin mb-3">Vue Nigeria Community</h1>
          <h4 class="subheading">Stay up to date with upcoming meetups and meet Vue gurus or join our Ecosystem to get help with any questions you might have.</h4>
          <div class="mt-3">
            <v-btn
              large
              class="green--text"
              round
              href="https://discord.gg/"
              target="_blank">Visit Vue Nigeria Land</v-btn>
          </div>
        </v-flex>

      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'Parallax'
}
</script>

<style scoped>
</style>
