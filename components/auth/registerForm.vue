<template>
  <b-container class="mt-5">
    <b-form @submit.prevent="Register">

      <b-form-group
        id="input-group-1"
        label="*Nom:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          v-model="form.lastName"
          placeholder="Nom"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="*Prénom:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          v-model="form.firstName"
          placeholder="Prénom"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="*Adresse:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          v-model="form.address"
          placeholder="Adresse"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="*Téléphone:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          v-model="form.phone"
          placeholder="Téléphone"
          v-mask="'##########'"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="*Email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          v-model="form.email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="*Mot de passe:" label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="Mot de passe"
          v-model="form.password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="*Confirmation de Mot de passe:" label-for="input-2">
        <b-form-input
          id="input-2"
          placeholder="Confirmation de Mot de passe"
          v-model="form.passwordConfirm"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <p>* Requis</p>
      <template v-for="(error, index) in errors">
        <p class="text-danger" :key="index">
          *{{error}}
        </p>
      </template>

      <b-button type="submit" variant="primary">Inscription</b-button>
      <b-button type="button" variant="link" :to="{name: 'login'}">Se connecter</b-button>
    </b-form>
  </b-container>
</template>

<script>
import {mapActions} from "vuex";
export default {
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        address: null,
        phone: null,
        email: null,
        password: null,
        passwordConfirm: null,
      },
      errors: []
    }
  },
  methods: {
    ...mapActions('auth', {
      registerAction: 'register',
    }),
    Register() {
      let formData = {...this.form};
      if(formData.password != formData.passwordConfirm) {
        return this.errors.push('Merci de vérifier le mot de passe');
      }

      this.registerAction(formData);
    }
  }
}
</script>