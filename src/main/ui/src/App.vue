<template>
  <div id="app" class="vh-100">
    <Navbar class="app-nav"/>
    <router-view class="app-content"/>
  </div>
</template>

<style></style>

<script>
import Navbar from "./components/Navbar";
export default {
  components: { Navbar },
};
</script>

<style scoped>
.app-nav{
  height: 60px
}
.app-content{
  height: 100%;
  margin-top: -60px;
  padding-top: 60px;
}
</style>

