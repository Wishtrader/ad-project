<template>
  <v-container>
    <v-layout row>
      <v-flex xs-12 sm8 offset-sm2>
        <h1 class="text--secondary mb-5">Orders</h1>
        <v-list subheader two-line flat>
          <v-list-item v-for="order in orders" :key="order.id">
            <template>
              <v-list-item-action>
                <v-checkbox color="success" v-model="disabled" @change="markDone(order)" input-value="order.done"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{order.name}}</v-list-item-title>
                <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-tile-action>
                <v-btn :to="'/ad/' + order.adId" class="primary">Open</v-btn>
              </v-list-tile-action>
            </template>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        orders: [
          {
            id: '0101',
            name: 'Andrei',
            phone: '+375(29)380-20-53',
            adId: '100',
            done: false
          }
        ]
      }
    },
    methods: {
      markDone (order) {
        order.done = true
      }
    }
  }
</script>