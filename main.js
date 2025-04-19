function loginWithPi() {
  const scopes = ['username', 'payments'];
  Pi.authenticate(scopes, onSuccess, onFailure);
}

function onSuccess(auth) {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("username").textContent = auth.user.username;
}

function onFailure(error) {
  alert("Login failed: " + error);
}
