<template>
  <v-snackbar
    :timeout="0" :value="error"
    id="appError" dark top vertical
  >
    <v-layout row align-center>
      <v-icon class="mr-2" color="error">sentiment_very_dissatisfied</v-icon>
      <v-flex><h3>What's this... an error?</h3></v-flex>
    </v-layout>
    <v-layout class="pt-3">
      <v-flex>
        <span>{{ error.message }}</span>
      </v-flex>
    </v-layout>

    <v-btn
      dark flat
      @click.native="dismissError"
      >Dismiss</v-btn>
  </v-snackbar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: mapState('app', ['error']),
  methods: mapMutations('app', ['dismissError'])
}
</script>

<style scoped>
#appError {
  z-index: 1000;
}
</style>
