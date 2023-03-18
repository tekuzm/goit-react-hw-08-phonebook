export const isUserLoggedIn = store => store.auth.isLoggedIn;
export const getAuth = ({ auth }) => {
  const { isLoggedIn, token } = auth;
  return { isLoggedIn, token };
};
export const getUser = store => store.auth.user;
