<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="mt-4 text-center">Se connecter</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <login-form></login-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import loginForm from "@/components/auth/loginForm";
export default {
  components: {
    loginForm,
  },
}
</script>