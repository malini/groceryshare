# GroceryShare Developer Details

# Infrastructure:
## Frontend:
R2 and CloudFlare for free egress.

*R2 bucket*: groceryshare-site-assets
*R2 folder layout*: `/builds` contains built site assets

## Backend:
Some aws solution, either ec2 or ecs, since I'm most familiar with it and I can always swap out later. My head hurts.

## Authentication:
We're going with KeyCloak for auth. I tried Authentik briefly but it isn't straightforward enough for me; ain't nobody got time for that, and keycloak is pretty widely used.

Even though I know most users don't _really_ care about information sharing, if I can provide the option to remove 3rd parties, then I'll take it. So we're trying with KeyCloak running on our own infra. Hopefully it won't grow to be too much of a cost, but we'll see when we get there.

To set up the app's keycloak config after running the docker compose up command, navigate to http://localhost:9999, and access the admin panel using username: `admin`,  password: `admin`. Follow the [setup steps](https://www.keycloak.org/getting-started/getting-started-docker) to create a Realm named 'groceryshare', and in the Login settings, turn on 'User Registration'. Create a User with a test user set up with username: testuser, password: password. Create a Client with type "OpenID Connect", set the client ID to groceryshare-frontend, and set  Valid redirect URIs and Web origins to http://localhost:5173

# Frontend development
## Design choices
Use em/rem/% where possible for accessibility. If using viewport units for things, beware that Safari on iOS has tricky behaviour with it.
