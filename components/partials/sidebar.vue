<template>
  <div class="main-sidebar">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="index.html">Stisla</a>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <a href="index.html">St</a>
      </div>
      <ul class="sidebar-menu">
        <li v-for="(menu, i) in listMenu" :key="i">
          <nuxt-link class="nav-link" :to="menu.to">
            <i :class="menu.icon"></i> <span>{{ menu.name }}</span>
          </nuxt-link>
        </li>
        <li v-for="(item, i) in listClass" :key="i">
          <nuxt-link class="nav-link" :to="'/example/http-request/' + item.id">
            <i class="far fa-bookmark"></i> <span>{{ item.name }}</span>
          </nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template> 

<script>
export default {
  computed: {
    listClass() {
      return this.$store.state.class.listClass;
    },
  },
  data() {
    return {
      listMenu: [
        {
          name: "Sandbox Frontend 2",
          icon: "fas fa-book",
          to: "/sandbox-frontend-2/main",
          role: ["admin", "tutor"],
        },
        {
          name: "Dashboard baru",
          icon: "fas fa-home",
          to: "/",
          role: ["admin", "tutor"],
        },
        {
          name: "Semua Kelas",
          icon: "fas fa-igloo",
          to: "/semua-kelas",
        },
        {
          name: "Kelas saya",
          icon: "far fa-bookmark",
          to: "/kelas-saya",
        },
        {
          name: "Layout",
          icon: "fas fa-book",
          to: "/example/layout-clean",
        },
        {
          name: "Data Binding",
          icon: "fas fa-book",
          to: "/example/data-binding",
        },
        {
          name: "Methods",
          icon: "fas fa-book",
          to: "/example/methods",
        },
        {
          name: "Computed",
          icon: "fas fa-book",
          to: "/example/computed",
        },
        {
          name: "Watcher",
          icon: "fas fa-book",
          to: "/example/watcher",
        },
        {
          name: "Emit",
          icon: "fas fa-book",
          to: "/example/emit",
        },
        {
          name: "Emit II",
          icon: "fas fa-book",
          to: "/example/emit-2",
        },
        {
          name: "Http Request",
          icon: "fas fa-book",
          to: "/example/http-request",
        },
        {
          name: "State Management",
          icon: "fas fa-book",
          to: "/example/state-management",
        },
        {
          name: "State Management 2",
          icon: "fas fa-book",
          to: "/latihan/state-manage",
        },
      ],
    };
  },
};
</script>