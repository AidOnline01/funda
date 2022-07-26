# Installation
1. Install docker https://docs.docker.com/get-docker/ (If you use windows, note that you will need to enable WSL2 https://docs.docker.com/desktop/windows/wsl/)
1. Clone repo `git clone https://github.com/AidOnline01/funda.git ./funda`
1. Enter root directory of the application `cd funda`
1. Build containers `docker-compose build --no-cache`
1. Delete `node_modules` folder if present
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


# Explanation for architecture decisions

## Docker
Docker is used to ensure that all the team member will be able to quickly setup project locally, and to be confident that we have the same environment and packages.

## Typescript
Typescript is used to prevent typing error, and enforce better self-documenting code.

## Eslint
Eslint is used to enforce same code style across the project.

## Vuex
Vuex is used for shared state and data management across the application.

To provide better structure and architecture to the app data.

And to persist some state for page reload.

**vuex-module-decorators** are used for ensuring typesafety of modules state, mutations, and actions.

## Vue Test Utils + Jest
Vue test utils and jest are used for unit testing, to ensure that main functionality of the application is working as expected.

## Nock
Nock is used to suppress possible Api request over real network. So we have confidence that no external requests are made in tests.

## Axios mock adapter
Axios mock adapter is used to mock Api request with fake data. Unlike regular jest mocking functionality it is way more flexible

## Optimization
As a part of optimization I have added **Image lazy loading**. **Dynamic imports and routing** is also already implemented by nuxt.

To optimize it futher we can perform following steps:
1. Implement Server Side Rendering or Pre-Rendering
1. Load images to our server and serve them in Webp format (for older browsers jpg, we can set rule in nginx/apache for that)
1. We can also use CDN, it will futher decrease time to load of image, because of automatic Webp serving and optimal servers location for the end user
1. Use smaller size images for thubnails and load bigger ones for main image (CDN services usually can do that on the fly)
1. Use dynamic rendering of componenents for pages with a lot of functionality