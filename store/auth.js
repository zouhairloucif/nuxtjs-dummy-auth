import Vue from 'vue';
export const state = () => ({
  user: null,
  users: [],
});

export const getters = {
  getUser: (state) => {
    return state.user;
  },
}

export const mutations = {
  LOGIN: (state, data) => {
    let user = state.users.filter((user) => {
      return user.email === data.email;
    });

    if(user.length) {
      state.user = user.shift();
      console.log(user);
      Vue.$toast.success('Login faite avec succés');
      $nuxt.$router.push({name: 'index'});
    } else {
      Vue.$toast.error('Email n\'éxiste pas!');
    }
  },
  REGISTER: (state, data) => {
    const check = state.users.filter((user) => {
      return user.email === data.email;
    });
    if(!check.length) {
      state.users.push(data);
      Vue.$toast.success('Inscription faite avec succés');
      $nuxt.$router.push({name: 'login'});
    } else {
      Vue.$toast.error('Email déjà existe!');
    }
  },
  LOGOUT: (state) => {
    state.user = null;
  },
}

export const actions = {
  login({commit}, params) {
    commit('LOGIN', params);
  },
  register({commit}, params) {
    commit('REGISTER', params);
  },
  logout({commit}) {
    commit('LOGOUT');
    this.$router.push({name: 'login'});
  }
}