export default function ({store, redirect}) {
  let user = store.getters['auth/getUser'];
  if(!user) {
    redirect({name: 'login'});
  } 
}