<template>
    <div class="newpost">
        <top :system="system" />
        <section>
            <form action="">
                <h1>{{msg}}</h1>
                <div class="from-group">
                    <label for="">聊天室名字：</label>
                    <input type="text" v-model="title">
                </div>
                <div class="form-group ites">
                    <label for="">聊 天 主 题：</label>
                    <textarea name="" id="" cols="30" rows="10" v-model="body"></textarea>
                </div>
                <button type="button" @click="getchat">创建聊天室</button>
            </form>
        </section>
        <foot :system="system" />
    </div>
</template>

<script>
    import top from './top.vue'
    import foot from './foot.vue'
    export default{
        name:'newpost',
        props:{
            system:Object
        },
        data(){
            return{
                msg:"快来新建一个聊天室吧！",
                title:"",
                body:""
            }
        },
        methods:{
            getchat(){
                let formData = "send=创建聊天室&title="+this.title+"&body="+this.body;
                this.axios.get('http://yindada.gz01.bdysite.com/api/chatAddSave.php?'+formData)
                .then(res=>{
                    console.log(res)
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        },
        components:{
            top,
            foot
        }
    }
</script>

<style scoped>
    form{
        width: 35%;
        margin: 50px auto 0;
        text-align: center;
    }
    h1{
        font-size: 30px;
    }
    input{
        width: 70%;
        height: 35px;
        margin: 25px 0;
    }
    textarea{
        width: 70%;
        height: 80px;
        margin-left: 5px;
    }
    .ites label{
        vertical-align: top;
    }
    button{
        width: 150px;
        height: 35px;
        border: none;
        outline: none;
        border-radius: 4px;
        margin-top: 20px;
        margin-left: 65px;
        background: green;
        color: #fff;
    }
</style>