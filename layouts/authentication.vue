<template>
  <v-app
    id="inspire"
    class="white">
    <v-content>
      <v-container
        fluid
        fill-height>
        <v-layout
          align-center
          justify-center>
          <v-flex
            xs12
            sm8
            md4>
            <nuxt/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: 'Authentication'
}
</script>

<style scoped>
</style>
