<template>
  <div>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="500"
      src="https://picsum.photos/id/237/200/300"
    ></v-img>

    <v-card-title>Cachorros</v-card-title>



  </v-card>

  </div>
</template>

<script>
  export default {
    name: 'Cachorros',
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
