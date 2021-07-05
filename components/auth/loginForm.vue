<template>
  <b-container class="mt-5">
    <b-form @submit.prevent="Login">
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          v-model="form.email"
          placeholder="email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="Password"
          v-model="form.password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Se Connecter</b-button>
      <b-button type="button" variant="link" :to="{name: 'register'}">Inscription</b-button>
    </b-form>
  </b-container>
</template>

<script>
import {mapActions} from "vuex";
export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      }
    }
  },
  methods: {
    ...mapActions('auth', {
      loginAction: 'login',
    }),
    Login() {
      let formData = {...this.form};

      this.loginAction(formData);
    }
  }
}
</script>