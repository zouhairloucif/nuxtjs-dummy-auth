import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  new VuexPersistence({
    /* your options */
    key: 'cache',
    modules: ['auth']
  }).plugin(store);
}
