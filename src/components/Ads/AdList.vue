<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <h1 class="text--secondary mb-3">My Ads</h1>
        <v-card class="elevation-3 mb-3"
          v-for="ad in myAds" :key="ad.id"
        >
          <v-layout row>
            <v-flex xs4>
              <v-img :src="ad.imageSrc" height="175px"></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ad.title}}</h2>
                <p>{{ad.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info mr-3" :to="'/ad/' + ad.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
      myAds () {
        return this.$store.getters.myAds
      }
    }
  }
</script>