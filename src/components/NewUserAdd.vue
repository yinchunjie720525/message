<template>
    <div class="newuseradd">
        <top :system="system"></top>
            <div>
                <button @click="componentId='phoneCodeResgister'">手机注册</button>
                <button :is="componentId"></button>
            </div>
        <foot :system="system"></foot>
    </div>
</template>

<script>
    import top from './top.vue'
    import foot from './foot.vue'
    import phoneCodeResgister from './phoneCodeRegister.vue'
    import EmailRegister from './EmailRegister.vue'
    export default{
        name:'newuesradd',
        props:{
            system:Object
        },
        data(){
            return{
                componentId:"phoneCodeRegister"
            }
        },
        computed:{

        },
        methods:{

        },
        components:{
            top,
            foot,
            phoneCodeResgister,
            EmailRegister
        },
        created(){

        },
    }
</script>

<style scoped>

</style>

