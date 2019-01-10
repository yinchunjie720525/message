<template>
    <div class="register">
        <section class="name">
            <div class="container">
                <h1>聊天室登录</h1>
                <form action="" id="login">
                    <div class="form-group">
                        <label for="username">用户名：</label>
                        <input type="text" v-model="username" name="username" id="username">
                    </div>
                    <div class="form-group">
                        <label for="pwd"> 密  码 ：</label>
                        <input type="password" v-model="password" name="password" id="pwd">
                    </div>
                    <input type="hidden" name="send" value="1">
                    <button type="button" @click="getLogin" class="login">登录</button>
                    <br>
                    <div>{{error}}</div>
                </form>
            </div>
        <a href="http://yindada.gz01.bdysite.com/Register">您没有账号，请先注册!</a>
        </section>
    </div>
</template>

<script>
    import top from './top.vue'
    import foot from './foot.vue'
    export default{
        name:'login',
        props:{
            system:Object
        },

        data(){
            return{
                msg:"欢迎来到vue.js的世界",
                username:"",
                password:"",
                error:""
                
            }
        },
        components:{
            top,
            foot
        },
        methods:{
            getLogin(){
                this.axios({
                    method:'post',
                    url:'http://yindada.gz01.bdysite.com/api/loginSave.php',
                    data:this.qs.stringify({
                        send:1,
                        username:this.username,
                        password:this.password
                    })
                }).then(res=>{
                    if(res.data.valid==true){
                        this.$router.push({path:'/'})
                    }else{
                        this.error=res.data
                    }
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        created(){
            console.log(this.qs.stringify({
                        send:1,
                        username:this.username,
                        password:this.password
                    }))
        }
    }
</script>

<style scoped>
.register{
    text-align: center
}
    .container{
        width: 50%;
        margin: 50px auto 0;
        text-align: center;
    }
    h1{
        font-size: 30px;
        margin:0 auto;
    }
    input{
        width: 35%;
        height: 30px;
        margin: 20px 15px;
    }
    button{
        padding: 5px 15px;
        margin-left: 50px;
    }
    .login{
        width: 35%;
        height: 35px;
        outline: none;
        border: none;
        border-radius: 4px;
        margin-top: 20px;
        margin-left: 55px;
        background: green;
        color: #fff;
    }
    a{
        color:#2bc6e2;
        font-size: 12px; 
    }
</style>