<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
  *, *:before, *:after {
    box-sizing: border-box;
  }

  :root {
    --color-main: #f7a100;
    --color-grey-light: #ededed;
  }

  html, body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .container {
    padding: 0 15px;
  }
</style>
