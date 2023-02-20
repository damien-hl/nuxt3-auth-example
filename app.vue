<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <Html lang="en" class="h-full">
    <Head>
      <Title>Simple authentication example using Nuxt3</Title>
      <Meta name="description" content="Trying to implement a simple authentication system in Nuxt3" />
      <Meta name="theme-color" :content="colorMode.value === 'dark' ? '#000000' : '#ffffff'" />
    </Head>

    <Body class="h-full bg-white transition-colors dark:bg-gray-900">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
