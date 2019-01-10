<template>
    <div class="register">
        <form class="form-block" @submit.prevent="registerSave">
            <h1>聊天室注册</h1>
            <ul>
                <li>
                    <label></label>
                    <div class="avatar">
                        <input type="file" @change="a" class="upload_file" ref="upload_file">
                        <img :src="users.imageUrl" alt="点击上传头像">
                        <input type="hidden" v-model="users.imageUrl">
                    </div>
                </li>
                <li>
                    <label>用户昵称：<input type="text" v-model="users.name" name="username" id="username"></label>
                </li>
                <li>
                    <label>初始密码：<input type="password" v-model="users.pass" name="userpass" id="pwd"></label>
                </li>
                <li>
                    <label>确认密码：<input type="password" v-model="users.checkpass" name="userpasses" id="checkpass"></label>
                </li>
                <li v-if="!verify.Boolean">
                    <!-- <p>{{set_vefify}}</p> -->
                </li>
                <li>
                    <label></label>
                    <button type="submit" class="button">注册用户</button>
                </li>
            </ul>
        </form>
        <a href="http://yindada.gz01.bdysite.com/Login">您已有账号，请登录!</a>
    </div>
</template>

<script>
    import top from './top.vue'
    import foot from './foot.vue'
    export default{
        name:'register',
        porps:{
            system:Object
        },
        data(){
            return{
                users:{
                    name:'',
                    pass:'',
                    checkpass:'',
                    send:1,
                    imageUrl:require('../assets/tu.jpg')
                },
                verify:{
                    Boolean:false,
                    message:[]
                }
            }
        },
        computed:{
            set_verify(){
                return Array.from(new Set(this.verify.message))
            },
            verify_username(){
                let username = this.users.name;
                let reg = /^[\u4e00-\u9fa5]+$/;
                if(!reg.test(username)){
                    this.verify.essage.push('用户名必须是中文')
                    this.verify.Boolean = false
                }else{
                    this.verify.Boolean = true
                }
                return this.verify.Boolean;
            },
            verify_passowrd(){

            },
            verify_imageUrl(){
                return false
            },
        },
        methods:{
            a(){
                let _this = this;
                let file = this.$refs.upload_file.files[0]
                let reader = new FileReader();
                reader.onload = function(){
                    _this.users.imageUrl=reader.result
                }
                reader.readAsDataURL(file);
            },
            registerSave(){
                let formData={
                    send:this.users.send,
                    username:this.users.name,
                    password:this.users.pass,
                    checkpass:this.users.checkpass,
                    userAvatar:encodeURIComponent(this.users.imageUrl)
                }
                formData = this.qs.stringify(formData);
                console.log(1)
                this.axios.post('http://yindada.gz01.bdysite.com/api/registerSave.php',formData)
                .then(res=>{
                    if(res.data.valid==true){
                        this.$router.push({path:'/Login'})
                    }else{
                        this.error=res.data
                    }
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        components:{
            top,
            foot
        },
        created(){
            let formData={
                send:this.users.send,
                username:this.users.name,
                password:this.users.pass,
                checkpass:this.users.checkpass,
                userAvatar:this.users.imageUrl
            }
            console.log(JSON.stringify(formData))
            console.log(this.qs.stringify(formData))
        },
    }
</script>

<style scoped>

   .form-block{
        width:600px;
        margin:25px auto;
        position: relative;
    }
    .form-block h1{
        font-size: 30px;
    }
    .form-block li{
        margin-bottom: 25px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .form-block li p{
        padding-left:120px;
        margin-top: 15px;
    }
    .form-block li label{
       width:120px;
       padding:0 15px;
       line-height: 35px;
       text-align: right;
    }
    .form-block li input{
        border-radius: 5px;
        height:35px;
        line-height: 35px;
        padding:0 15px;
        border:1px solid darkgray;
        width:calc(100% - 120px)
    }
     .form-block li input:focus{
        outline: none
     }
    .avatar{
        position:relative;;
        width:120px;
        height:120px;
        border:1px solid #333;
        overflow: hidden;
        margin:10px 0;
    }
    .avatar img{
        position: absolute;
        left:0;
        right:0;
        width:100%;
        min-height: 120px;
    }
    .form-block li input.upload_file{
        position: absolute;
        z-index: 999;
        opacity:0;
        width:100%;
        height:100%;
    }
    #username,
    #pwd,
    #checkpass{
        width: 300px;
    }
    .button{
        width: 150px;
        height: 35px;
        border: none;
        outline: none;
        border-radius: 4px;
        margin-top: 20px;
        background: green;
        color: #fff;
    }
    a{
        color:#2bc6e2;
        font-size: 12px; 
        display: block;
        margin:0 auto;
        width: 270px;
    }
</style>