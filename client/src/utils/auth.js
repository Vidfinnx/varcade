// import Userfront from "@userfront/react";
// Userfront.init("auth");

// async function getInfo() {
//   const res = await window.fetch("/login", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${Userfront.accessToken()}`,
//     },
//   });

//   console.log(res);
// }

// getInfo();
import decode from "jwt-decode";

class AuthService {
  // decodes the token
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    return false;
  }

  // gets th token i local storage
  // this method is used in the getProfile and loggedIn
  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    // this  sets the token into the localstorage and redierscts the user after loggin them in
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.reload();
  }
}

export default new AuthService();
