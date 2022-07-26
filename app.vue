<template>
  <div>
    <Head>
      <Title>Funda Test Application</Title>
      <Link rel="icon" href="https://assets.fstatic.nl/master_3941/assets/favicon-32x32.png" type="image/png" />
    </Head>

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
    --color-main-medium: #f8b73f;
    --color-main-light: #ffdb99;
    --color-main-dark: #bc7a00;

    --color-grey-light: #ededed;
    --color-grey: #e2e5f1;

    --color-danger: #d73d3d;
    --color-danger-medium: #f7a2a2;
    --color-danger-light: #fdecec;

    --color-purple: #bb06fc;
    --color-yellow: #fbb006;

    --color-blue: #4475de;
    --color-blue-light: #edf3fe;
    --color-blue-medium: #a6c1fb;
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
