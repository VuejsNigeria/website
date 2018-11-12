<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="white"
      flat="true">
      <v-toolbar-title class="teal--text">Become a Member</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          prepend-icon="person"
          name="login"
          label="Login"
          type="text"/>
        <v-text-field
          id="password"
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"/>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn
        color="teal"
        class="white--text">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Login',
  layout: 'authentication',
  data: () => ({
    drawer: null
  })
}
</script>

<style scoped>
</style>
