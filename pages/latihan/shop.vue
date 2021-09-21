<template>
  <div>
    <h1>Shopping Chart</h1>
    <!-- {{ keranjang }} -->
    <div class="row">
      <div class="col-md-4" v-for="(item, i) in keranjang" :key="i">
        <class-item
          :name="item.name"
          :desc="item.description"
          :img="item.img"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // keranjang: this.$store.state.latihan.jumlahData,
    };
  },
  // compute buat v for doang
  computed: {
    keranjang() {
      return this.$store.state.latihan.jumlahData;
    },
  },
};
</script>