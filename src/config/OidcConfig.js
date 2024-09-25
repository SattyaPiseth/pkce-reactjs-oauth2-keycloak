import { UserManager } from 'oidc-client-ts';

const oidcConfig = {
  authority: "http://localhost:8181/realms/oauth2-demo-realm",
  client_id: "oauth2-demo-pkce-client",
  redirect_uri: `${window.location.origin}/callback`,  // Ensure this matches Keycloak config
  response_type: "code",  // Authorization Code Flow with PKCE
  scope: "openid profile email offline_access",  // Scopes requested from Keycloak
  post_logout_redirect_uri: window.location.origin,
  silent_redirect_uri: `${window.location.origin}/silent-renew`,  // URL for silent token renew
  automaticSilentRenew: true,
  loadUserInfo: true,  // Fetch user profile from Keycloak
  usePkce: true,  // Enable PKCE
};

const userManager = new UserManager(oidcConfig);

export default userManager;
