<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="teal lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      />
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            v-model="email"
            label="Email"
            value="john@vuetifyjs.com"
          />
          <span class="caption teal--text text--darken-1">
            This is the email you will use to login to your Vuejs Nigeria account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            v-model="password1"
            label="Password"
            type="password"
          />
          <v-text-field
            v-model="password2"
            label="Confirm Password"
            type="password"
          />
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-3 text-xs-center">
          <v-img
            class="mb-3"
            contain
            height="128"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/400px-Vue.js_Logo.svg.png"
          />
          <h3 class="title font-weight-light mb-2">Welcome to Vuejs Nigeria</h3>
          <span class="caption teal--text">Thanks for signing up!</span> <br>
          <span class="caption teal--text"><a href="login"> Click to Login </a></span> 
        </div>
      </v-window-item>
    </v-window>

    <v-divider/>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        flat
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer/>
      <v-btn
        :disabled="step === 3"
        color="teal"
        class="white--text"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from '../../firebaseInit.js'

export default {
  name: 'Register',
  layout: 'authentication',
  data: () => ({
    step: 1,
    email: '',
    password1: '',
    password2: ''
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'Sign-up'
        case 2:
          return 'Create a password'
        default:
          this.register()
          return 'Account created'
      }
    }
  },
  methods: {
    register() {
      if (this.password1 !== this.password2) {
        alert('Password does not match')
        this.step = 2
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password1)
        .then(
          user => {
            alert(`Account Successfully created for ${this.email}`)
          },
          err => {
            alert(err.message)
          }
        )
    }
  }
}
</script>

<style scoped>
</style>
