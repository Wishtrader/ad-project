<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <h1 class="text--secondary mb-3">My Ads</h1>
        <v-card class="elevation-3 mb-3"
          v-for="ad in ads" :key="ad.id"
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
  data () {
    return {
      ads: [
        {
          title: 'First Ad',
          description: 'Description-01',
          promo: false,
          imageSrc: 'https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          id: '001'
        },
        {
          title: 'Second Ad',
          description: 'Description-02',
          promo: true,
          imageSrc: 'https://images.unsplash.com/photo-1543654835-f02bf9de3e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          id: '002'
        }
      ]
    }
  }
}
</script>