<template>
  <div class="d-flex centered-form">
    <form class="text-center form-signin" @submit.prevent="register">
      <p class="return-msg">{{ returnMsg }}</p>
      <h1 class="h3 mb-3 fw-normal">Please register</h1>

      <div class="form-floating">
        <input
          required
          type="text"
          class="form-control"
          id="name"
          placeholder="Mario"
          v-model="name"
        />
        <label for="name">Name</label>
      </div>
      <div class="form-floating">
        <input
          required
          type="text"
          class="form-control"
          id="surname"
          placeholder="Rossi"
          v-model="surname"
        />
        <label for="surname">Surname</label>
      </div>
      <div class="form-floating">
        <input
          required
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="email"
        />
        <label for="email">Email address</label>
      </div>
      <div class="form-floating">
        <input
          required
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="password"
        />
        <label for="password">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Register",
  components: {},
  data: () => {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      returnMsg: "",
    };
  },
  methods: {
    async register() {
      const response = await fetch("api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password,
        }),
      });
      const responseText = await response.text();
      if (response.ok) {
        this.returnMsg = responseText;
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else if (response.status === 400) {
        this.returnMsg = responseText;
      } else {
        this.returnMsg = "Server error";
      }

      this.name = "";
      this.surname = "";
      this.email = "";
      this.password = "";
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
  align-items: center;
  height: 100vh;
}
.return-msg {
  color: red;
  min-height: 30px;
}
</style>
