<template>
  <div>
    <h1>Sandbox Frontend 2</h1>
    {{ $store.state }}
    <hr />
    <card-input :nama="name" @get="(val) => (name = val)" />
    <div class="row">
      <div class="col-md-12" v-for="(item, i) in data" :key="i">
        <card-cards :name="item" />
      </div>
    </div>
    <p>Task Done</p>
    <div class="row">
      <div class="col-md-12" v-for="(items, i) in progress" :key="i">
        <card-cards :name="items" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  computed: {
    data() {
      return this.$store.state.sandboxs.listWork;
    },
    progress() {
      return this.$store.state.sandboxs.progress;
    },
  },
};
</script>