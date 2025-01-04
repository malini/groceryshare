# GroceryShare Developer Details

# Infrastructure:
## Frontend:
R2 and CloudFlare for free egress.

*R2 bucket*: groceryshare-site-assets
*R2 folder layout*: `/builds` contains built site assets

## Backend:
Some aws solution, either ec2 or ecs, since I'm most familiar with it and I can always swap out later. My head hurts.

## Authentication:
We're going with Authentik for auth (with the option of using Google as IDP for convenience maybe?). Even though I know most users don't _really_ care about information sharing, if I can provide the option to remove 3rd parties, then I'll take it. So we're trying with Authentik running on our own infra. Hopefully it won't grow to be too much of a cost, but we'll see when we get there.

To start the initial setup after running the docker compose up command, navigate to http://localhost:9000/if/flow/initial-setup/.

There you are prompted to set a password for the akadmin user (the default user).

Go to the main dashboard, and choose Create with Wizard, and create Oauth2/OIDC with default-provider-authorization-implicit-consent (Authorize Application), and name the app anything you want

# Frontend development
## Design choices
Use em/rem/% where possible for accessibility. If using viewport units for things, beware that Safari on iOS has tricky behaviour with it.
