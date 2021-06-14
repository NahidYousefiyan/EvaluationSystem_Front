import jwtDecode from "jwt-decode";

// const apiEndpoint = apiUrl + "/auth";
const tokenKey = "auth-mis";

// http.setJwt(getJwt());

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

// export function logout() {
//   localStorage.removeItem(tokenKey);
// }

export function logout() {
  localStorage.clear();
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return (jwt);
    // return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
