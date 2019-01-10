<template>
<header class="top">
    <div class="wrap">
    <div class="logo">
        <img v-bind:src="system.logo" :alt="system.title" :title="system.title">
        <h1>{{system.title}}</h1>
    </div>
    <div class="nav">
        <ul>
            <li>
                <router-link to="/" exact>首页</router-link>
            </li>
            <li>
                <router-link to="/newPost">发布聊天室</router-link>
            </li>
            <li>
                <router-link to="/Login">会员登录</router-link>
            </li>
            <li>
                <router-link to="/Register">用户注册</router-link>
            </li>
        </ul>
    </div>
</div>
</header>
</template>
<script>
    export default {
        name:'top',
        props:{
            system:Object
        }
    }
</script>

<style>
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,input,button,textarea,p,th,td,button{ 
    margin:0;
    padding:0; }
body { 
    background:#fff; 
    color:#555; 
    font-size:14px;
}
td,th,caption { 
    font-size:14px; 
}   
h1, h2, h3, h4, h5, h6 { 
        font-weight:normal; 
        font-size:100%; }
a { 
    color:#555; 
    text-decoration:none; 
}
img { 
     border:none; 
}
ol,ul,li { 
    list-style:none;
}
body{
    background: rgb(245,245,245);
}
.clearfix:after {
    content: "."; 
    display: block; 
    height:0; 
    clear:both; 
    visibility: hidden;
}
.top{
    background: #333;
    height: 50px;
    width: 100%;
    color: #fff;
}
.top>.wrap{
    width: 75%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}
.logo{
    width: 25%;
    position: relative;
}
.logo h1{
    position: absolute;
    left:60px;
    top: 0;
    line-height: 50px;
    font-size: 18px;
}
.logo img{
    position: absolute;
    left: 0;
    top: 5px;
    height: 40px;
}
.nav{
    widows: 75%;
}
.nav ul{
    display: flex;
    justify-content: flex-end;
}
.nav ul li{
    line-height: 50px;
    font-size: 15px;
    margin-left: 15px;
}
.nav ul li a{
    color: #fff;
    display: inline-block;
    padding: 0 15px;
    text-align: center;
}
.nav ul li a.router-link-exact-active{
    background: red;
}
</style>
