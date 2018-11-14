<template>
  <v-parallax
    dark
    src="https://w-dog.net/wallpapers/12/10/555931010272670.jpg"
    height="700"
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
          <v-img
            :src="`https://previews.dropbox.com/p/thumb/AAN9lxDmyWAcGJlwnAjoYObQ8lDybc-aTFbWiIkgi_0BVupAJAk0jHbuy77lfATgill7aaLt2RomGyr-WpTxhzZcRIEPWbOLSNCfYq3CpRmZg2spFViJ7oFn93YUPMXQAkeY9xEIhjeDSJg9i9Mus-n9NJV-HU-SQuzUqcc2tnnxBKhLgJjChGTDJjkabK8Sg24/p.png?size=1280x960&size_mode=3`"
            style="max-width: 100%"
            class="logo"/></v-flex>
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
              class="teal--text"
              round
              href="https://discord.gg/"
              target="_blank">Visit Vue Nigeria Land</v-btn>
            <ScrollDownIconAnimation/>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
import ScrollDownIconAnimation from './scrollDownIconAnimation'
export default {
  name: 'Parallax',
  components: { ScrollDownIconAnimation }
}
</script>

<style scoped>
.logo {
  animation: bounceIn 0.6s;
  transform: rotate(0deg) scale(1) translateZ(0);
  transition: all 0.4s cubic-bezier(0.8, 1.8, 0.75, 0.75);
  cursor: pointer;
}

.logo:hover {
  transform: rotate(10deg) scale(1.1);
}

@keyframes bounceIn {
  0% {
    opacity: 1;
    transform: scale(0.3);
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
  }

  70% {
    opacity: 1;
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
