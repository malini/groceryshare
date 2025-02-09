import Keycloak from "keycloak-js";

// TODO: dev and prod versions
const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: "groceryshare",
  clientId: "groceryshare-frontend",
  checkLoginIframe: false,
});

export default keycloak;
