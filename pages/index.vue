<template>
  <div>
    <h1 class="text-center">Hello {{userFullName}}</h1>
  </div>
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
    }
  }
}
</script>
