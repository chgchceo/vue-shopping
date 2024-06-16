<template>
  <div id="app">

<router-view/>

</div>
</template>

<script>

export default {
  data () {
    return {
      show: false
    }
  },

  methods: {
    showPopup () {
      this.show = true
    }
  }
}
</script>
<style >

.button{

  margin: 30px;
  width: 300px;
  height: 300px;
  background-color: pink;
  color:black
}

</style>
