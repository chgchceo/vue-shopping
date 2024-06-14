<template>
  <div>home

    {{ this.$store.state.user.userInfo }}

    {{ this.$store.getters.token }}
  </div>
</template>

<script>
export default {
  name: 'homeIndex'
}
</script>

<style>
</style>
