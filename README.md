# Installation
1. Install docker https://docs.docker.com/get-docker/ (If you use windows, note that you will need to enable WSL2 https://docs.docker.com/desktop/windows/wsl/)
1. Clone repo `git clone https://github.com/AidOnline01/funda.git ./funda`
1. Enter root directory of the application `cd funda`
1. Build containers `docker-compose build --no-cache`
1. Run containers `docker-compose up -d --force-recreate`
1. Enter docker console `docker exec -it funda_app /bin/bash`
1. Copy `config.example.ts` to `config.ts` and fill it up (Place access key)
1. Build nuxt `npm run build`
1. Run nuxt server `npm run start`
1. Access website by url `http://localhost:8300` 

# Notice

## Cors
Because api provided in test project doesn't have public CORS access (Access-Control-Allow-Origin: *), it is not possible to fetch data directly through browser rest api request.

To bypass this problem, I have created proxy express server `corsBypassServer.ts`, which ignores api server CORS settings.