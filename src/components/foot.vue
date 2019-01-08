<template>
    <footer>{{system.copyright}}</footer>
</template>

<script>
export default{
    name:"foot",
    props:{
        system:Object
    }
}
</script>

<style scoped>
footer{
    padding: 25px 0;
    text-align: center;
    background: #000;
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    color: #fff;
    width: 100%;
    height: 10px;
    line-height: 5px;
}
</style>
