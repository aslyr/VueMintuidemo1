<template>
  <div>
    <h1>这是使用vue组件定义出来的组件{{name}}</h1>
    <button @click="show">确定</button> <br>
    <router-link  to="account">account</router-link>
    <router-link  to="goodlist">goodlist</router-link>
    <router-view></router-view>

  </div>

</template>
<script>
export default {
  data: function() {
    return {
      msg: 123,
      name: "高凯"
    };
  },
  methods: {
    show() {
      console.log(this.msg + this.name);
    }
  }
};
</script>
<style>
</style>
