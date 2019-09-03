<template>
  <v-container>
    <v-layout row>
      <v-flex xs-12 sm8 offset-sm2>
        <h1 class="text--secondary mb-3">Create New Ad</h1>
        <v-form v-model="valid" ref="form" validation>
          <v-text-field required outlined label="Ad title" name="title" type="text" v-model="title"
            :rules="[v => !!v || 'Title is requred!']">
          </v-text-field>
          <v-textarea outlined label="Ad description" name="description" type="text" v-model="description"
            :rules="[v => !!v || 'Description is requred!']">
          </v-textarea>
        </v-form>
        <v-layout row class="mb-5 ml-1">
          <v-flex xs-12>
            <v-btn class="warning">Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
            <v-switch v-model="promo" label="Add to Promo"></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="ml-1">
          <v-flex>
            <img
              src=""
              height="200">
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-spacer></v-spacer>
          <v-flex>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              class="success" 
              @click="createAd"
            >Create Ad</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {

          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo
          }
        }
      }
    }
  }
</script>