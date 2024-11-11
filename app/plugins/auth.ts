export default defineNuxtPlugin(async () => {
  const { me } = useAuth();

  await me();
});
