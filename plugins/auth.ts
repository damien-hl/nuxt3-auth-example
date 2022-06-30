export default defineNuxtPlugin(async (_nuxtApp) => {
  const { me } = useAuth();

  await me();
});
