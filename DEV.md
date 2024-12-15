# GroceryShare Developer Details

# Infrastructure:
## Frontend:
R2 and CloudFlare for free egress.

*R2 bucket*: groceryshare-site-assets
*R2 folder layout*: `/builds` contains built site assets

## Backend:
Some aws solution, either ec2 or ecs, since I'm most familiar with it and I can always swap out later. My head hurts.

# Frontend development
## Design choices
Use em/rem/% where possible for accessibility. If using viewport units for things, beware that Safari on iOS has tricky behaviour with it.
