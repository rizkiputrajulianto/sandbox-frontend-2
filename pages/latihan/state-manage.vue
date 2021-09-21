<template>
  <div>
    <h1>Latihan Sandbox Frontend 2</h1>
    <!-- {{ $store.state.latihan.listData.length }} buat munculin berapa data arraynya -->
    {{ $store.state.latihan.listData }}
    <hr />
    {{ $store.state.latihan.jumlahData }}
    <hr />
    <div class="row">
      <div class="col-md-4" v-for="(items, i) in listData" :key="i">
        <class-item
          :name="items.name"
          :desc="items.description"
          :img="items.img"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    listData() {
      return this.$store.state.latihan.listData;
    },
  },
  mounted() {
    this.GET_DATA();
  },
  methods: {
    async GET_DATA() {
      const data = await this.requestGet("api/class");
      console.log(data);
      this.$store.dispatch("latihan/setData", data.data);
    },
  },
};
</script>