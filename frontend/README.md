# To build docker image:
docker build -t groceryshare-frontend .

# To run the image:
docker run -p 5173:5173 groceryshare-frontend

# Notes:
We won't be using this docker container on the live site, instead we will build the assets and host those assets through CloudFlare
