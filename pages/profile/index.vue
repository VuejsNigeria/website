<template>
  <v-card class="elevation-12">
    <v-toolbar
      dark
      color="teal">
      <v-toolbar-title>Manage Profile</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="email"
          prepend-icon="person"
          label="Email"
          type="text"/>
        <v-text-field
          v-model="fullname"
          prepend-icon="person"
          label="Fullname"
          type="text"/>
        <v-text-field
          v-model="password"
          prepend-icon="person"
          label="Password"
          type="text"/>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn
        color="teal"
        class="white--text"
        @click.prevent="login">Update</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from '../../firebaseInit.js'

export default {
  name: 'Login',
  layout: 'default',
  data: () => ({
    drawer: null,
    email: '',
    password: ''
  }),
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`Login Successful!`)
            this.$router.push({ path: '/' })
          },
          err => {
            alert(err.message)
          }
        )
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
</style>
