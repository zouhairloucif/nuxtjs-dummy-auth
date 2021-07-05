<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="mt-4 text-center">Inscription</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
    <register-form></register-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import notAuth from "@/middlewares/notAuth";
import registerForm from '@/components/auth/registerForm.vue';
export default {
  components: { 
    registerForm,
  },
  middleware: [notAuth],
}
</script>