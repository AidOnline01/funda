# Installation
1. Install docker https://docs.docker.com/get-docker/ (If you use windows, note that you will need to enable WSL2 https://docs.docker.com/desktop/windows/wsl/)
1. Clone repo `git clone https://github.com/AidOnline01/funda.git ./funda`
1. Enter root directory of the application `cd funda`
1. Build containers `docker-compose build --no-cache`
1. Run containers `docker-compose up -d --force-recreate`
1. Enter docker console `docker exec -it funda_app /bin/bash`
1. Copy `config.example.js` to `config.js` and fill it up (Place access key)
1. Build nuxt `npm run build`
1. Run nuxt server `npm run start`
1. Access website by url `http://localhost:3000` 