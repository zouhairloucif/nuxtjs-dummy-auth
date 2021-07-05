<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="{name: 'index'}">Test Vuejs</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>{{userFullName}}</em>
            </template>
            <b-dropdown-item href="#" @click="Logout">Se Déconnecter</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters('auth', [
      'getUser'
    ]),
    userFullName() {
      return `${this.getUser.firstName} ${this.getUser.lastName}`;
    }
  },
  methods: {
    ...mapActions('auth', {
      logoutAction: 'logout',
    }),
    Logout() {
      this.logoutAction();
    }
  }
}
</script>