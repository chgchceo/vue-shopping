<template>
  <div class="box">

    <button @click="handleSub" class="minus">-</button>
    <input @change="handleChange" :value="value" class="inp" type="text">
    <button @click="handleAdd" class="add">+</button>
  </div>
</template>

<script>
export default {

  props: {

    value: {
      type: Number,
      default: 1
    }
  },

  data () {
    return {

    }
  },
  methods: {

    handleSub () {
      const num = this.value
      if (num <= 1) {
        return
      }
      this.$emit('input', this.value - 1)
    },
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    handleChange (e) {
      const num = +e.target.value

      if (isNaN(num) || num <= 0) {
        e.target.value = this.value
        return
      }

      this.$emit('input', num)
    }
  }

}
</script>

<style lang="less" scoped>

.box{

    width: 110px;
    .minus,.add{

        width: 30px;
        height: 30px;
        background-color: #e5e5e5;
        outline: none;
        border: none;
    }
    .inp{
        width: 40px;
        height: 30px;
        background-color: #e5e5e5;
        margin: 0 5px;
        text-align: center;
        outline: none;
        border: none;
    }
}

</style>
