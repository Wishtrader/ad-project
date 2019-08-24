<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Registration Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" :lazy-validation="lazy">
              <v-text-field 
                label="Email" 
                name="email" 
                prepend-icon="mdi-email" 
                type="email"
                v-model="email"
                :rules="emailRules"
              >
              </v-text-field>
              <v-text-field 
                id="password" 
                label="Password" 
                name="password" 
                prepend-icon="mdi-lock" 
                type="password"
                :counter="6"
                v-model="password"
                :rules="passwordRules"
              >
              </v-text-field>
              <v-text-field 
                id="password" 
                label="Confirm Password" 
                name="confirm-password" 
                prepend-icon="mdi-lock" 
                type="password"
                :counter="6"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
              >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              color="primary"
              @click="onSubmit"
              :disabled="!valid"
            >Create Account</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        lazy: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length >= 6 || 'Password must be equal or more than 6 characters',
        ],
        confirmPasswordRules: [
          v => !!v || 'Password is required',
          v => v === this.password || 'Password should match!',
        ]
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
        }
      }
    }
  }
</script>