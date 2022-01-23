<template>
  <nav class="py-2 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link link-dark px-2 active"
            aria-current="page"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link link-dark px-2"
            >Dashboard</router-link
          >
        </li>
      </ul>
      <ul class="nav">
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/login" class="nav-link link-dark px-2"
            >Login</router-link
          >
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link
            to="to"
            @click.native="logout"
            class="nav-link link-dark px-2"
            >Logout</router-link
          >
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link to="/register" class="nav-link link-dark px-2"
            >Sign up</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapMutations(["logout"]),
  },
};
</script>

<style></style>
