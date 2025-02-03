import Keycloak from "keycloak-js";

// TODO: dev and prod versions
const keycloak = new Keycloak({
  url: "http://localhost:9999",
  realm: "groceryshare",
  clientId: "groceryshare-frontend",
  checkLoginIframe: false,
});

export default keycloak;
