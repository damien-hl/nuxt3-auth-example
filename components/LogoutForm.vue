<script lang="ts" setup>
const props = defineProps<{
  pending: boolean
}>()

const emit = defineEmits<{
  (e: 'submit'): void
}>()

const onLogoutFormSubmit = (_event: Event) => {
  emit('submit')
}
</script>

<template>
  <form @submit.prevent="onLogoutFormSubmit">
    <fieldset :disabled="props.pending">
      <div>
        <button type="submit" class="p-2 dark:text-white">Logout</button>
      </div>
    </fieldset>
  </form>
</template>
