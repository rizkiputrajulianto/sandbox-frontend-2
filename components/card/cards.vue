<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div>
          <input
            id="cekbok"
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
          <div>{{ name }}</div>
          <div>
            <i class="fas fa-trash" @click="deleteList"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String, default: "test" },
  },
  watch: {
    cek(bener) {
      if (bener === true) {
        const data = this.name;
        this.$store.dispatch("sandboxs/setProgress", data);
      }
    },
  },
  methods: {
    // toProgress() {
    //   if ($("#cekbok").checked) {
    //     const data = this.name;
    //     this.$store.dispatch("sandboxs/setProgress", data);
    //   }
    // },
    deleteList() {
      const data = this.name;
      this.$store.dispatch("sandboxs/delGlobal", data);
    },
  },
};
</script>