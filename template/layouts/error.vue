<template>
  <v-container fill-height>
    <v-layout column fill-height justify-center align-center>
      <v-card>
        <v-card-title>
          <v-flex class="display-3 text-xs-center">\{{ error.statusCode }}</v-flex>
        </v-card-title>
        <v-card-text>
          \{{ error.message }}
        </v-card-text>
        <v-card-actions>
          <v-btn to="/">home</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
