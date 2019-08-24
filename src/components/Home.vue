<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs-12>
          <v-carousel>
            <v-carousel-item v-for="ad in ads" :key="ad.id" :src="ad.imageSrc">
              <div class="carousel-link">
                <v-btn class="black" :to="'/ad/' + ad.id">{{ad.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex v-for="ad in ads" :key="ad.id">
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text" height="250px" :src="ad.imageSrc">
              <v-card-title class="align-end fill-height">{{ad.title}}</v-card-title>
            </v-img>
            <v-card-text>
              <span>{{ad.description}}</span><br>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :to="'/ad/' + ad.id" text color="orange">Open</v-btn>
              <v-btn rised class="purple" style="color: white;">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ads: [{
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
          },
          {
            title: 'Third Ad',
            description: 'Description-03',
            promo: true,
            imageSrc: 'https://images.unsplash.com/photo-1564190648918-d65d4ace70d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            id: '003'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .carousel-link
    position absolute
    bottom 60px
    left 50%
    transform translateX(-50%)

</style>