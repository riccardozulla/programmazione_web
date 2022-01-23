<template>
  <div class="d-flex centered-form">
    <form class="text-center form-signin" @submit.prevent="login">
      <p class="return-msg">{{ returnMsg }}</p>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          required
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
        />
        <label for="email">Email address</label>
      </div>
      <div class="form-floating">
        <input
          required
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
        />
        <label for="password">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import router from "../router";
export default {
  name: "Login",
  data: () => {
    return {
      email: "",
      password: "",
      returnMsg: "",
    };
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]), //map "this.setUser()" to "this.$store.commit('setUser')"
    async login() {
      const response = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });
      if (response.ok) {
        const { user, token } = await response.json();
        this.setUser(user);
        this.setToken(token);
        await router.push("/dashboard");
      } else {
        this.returnMsg = "Login failed";
        this.email = "";
        this.password = "";
      }
    },
  },
};
</script>

<style scoped>

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px 15px 60px;
  margin: auto;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.centered-form {
  height: 90vh;
  align-items: center;
}
.return-msg {
  color: red;
  min-height: 30px;
}
</style>
