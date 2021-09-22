<template>
  <div>
    <form @submit.prevent="tambahData">
      <div class="form-group">
        <label for="nama">Nama Pekerjaan</label>
        <input class="form-control" type="text" id="nama" v-model="val" />
      </div>
      <button type="submit" class="btn btn-primary">Tambahkan</button>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    nama: { type: String, default: "" },
  },
  computed: {
    val: {
      get() {
        return this.nama;
      },
      set(value) {
        this.$emit("get", value);
      },
    },
  },
  methods: {
    tambahData() {
      const nama = this.nama;
      this.$store.dispatch("sandboxs/setWork", nama);
    },
  },
};
</script>