<template>
  <div>
    <h1>STATE MANAGEMENT</h1>
    <div class="row">
      <div class="col-md-4" v-for="(item, i) in listClasses" :key="i">
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
      //   listClass: this.$store.state.class.listClass,
    };
  },
  computed: {
    listClasses() {
      return this.$store.state.class.listClass;
    },
  },
  mounted() {
    this.GET_CLASS();
  },
  methods: {
    async GET_CLASS() {
      const listData = await this.requestGet("api/class");
      this.$store.dispatch("class/setClass", listData.data);
    },
  },
  //   computed
};
</script>