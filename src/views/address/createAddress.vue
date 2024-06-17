<template>

    <div>
<div>新增地址</div>

<button @click="doneButt">确定</button>

    </div>

</template>

<script>
import { addAddressFn } from '@/api/address'

export default {

  methods: {

    async doneButt () {
      await addAddressFn()
      this.$toast.success('success')
    }
  }
}
</script>

<style>

</style>
