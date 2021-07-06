<template>
  <b-container class="mt-5">
    <b-row>
      <b-col cols="12">
        <h1 class="text-center">Hello {{userFullName}}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <p class="text-center">Email: <a :href="`mailto:${userEmail}`">{{userEmail}}</a></p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <p class="text-center">Adresse: {{userAddress}}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <p class="text-center">Téléphone: <a :href="`tel:${userPhone}`">{{userPhone}}</a></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapGetters} from "vuex";
import auth from "@/middlewares/auth";
export default {
  middleware: [auth],
  layout: 'loggedIn',
  computed: {
    ...mapGetters('auth', [
      'getUser'
    ]),
    userFullName() {
      return `${this.getUser.firstName} ${this.getUser.lastName}`;
    },
    userEmail() {
      return this.getUser.email;
    },
    userAddress() {
      return this.getUser.address;
    },
    userPhone() {
      return this.getUser.phone;
    },
  }
}
</script>
