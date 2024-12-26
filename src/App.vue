<!-- <template>
  <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import AuthPage from './AuthPage.vue';

export default {
  name: 'App',

  components: {
 
    AuthPage,

  },

  data: () => ({
    //
  }),
}
</script> -->


<template>
  <div id="app">
    <AuthPage /> 
  </div>
</template>

<script>
import AuthPage from './AuthPage.vue';

export default {
  components: {
    AuthPage,
  },
};
</script>