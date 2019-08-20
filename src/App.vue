<template>
  <v-app>
    <v-navigation-drawer temporary app v-model="drawer">
      <v-card flat class="mx-auto" max-width="300" tile>
        <v-list>
          <v-subheader>MENU</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item v-for="link in links" :key="link.title" :to="link.url">
              <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ link.title }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <!-- TOOLBAR START -->
    <div>
      <v-toolbar dark color="primary">
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>AD APPLICATION</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="link in links" :key="link.title" :to="link.url" text>
            <v-icon left>{{ link.icon }}</v-icon>
            {{ link.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <!-- TOOLBAR END -->

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      

        <!-- If using vue-router -->
        <router-view />
      
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        links: [
          {title: 'Login', icon: 'mdi-lock', url: '/login'},
          {title: 'Register', icon: 'mdi-face', url: '/register'},
          {title: 'Orders', icon: 'mdi-bookmark-multiple', url: '/orders'},
          {title: 'New Ad', icon: 'mdi-file-plus', url: '/new'},
          {title: 'My Ads', icon: 'mdi-wunderlist', url: '/list'},
        ]
      }
    }
  };
</script>