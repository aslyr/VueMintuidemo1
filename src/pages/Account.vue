<template>
    <div>
        <h1>home</h1>
        <p>{{msg}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "我是home 组件"
            }
        }
    }
</script>
<style lang="scss" scoped>
div{
    color: blueviolet;
    h1{color: brown}
}
</style>

