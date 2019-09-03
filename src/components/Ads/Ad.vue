 <template>
  <v-container>
    <v-layout row>
      <v-flex xs-12>
        <v-card>
          <v-img
            src="https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            height="400px"
          ></v-img>
          <v-card-text>
            <h1 class="text--primary">Title</h1>
            <p>Description</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning">Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>