<template>
    <div class="index">
        <top :system="system"></top>
        <section class="news wrap">
            <ul>
                <li v-for="(val,index) in news" :key="index">
                    <router-link :to={path:/newVIew/+val.chatId} tag="div">
                        <div class="lf">
                            <span>{{val.createDate}}</span>
                        </div>
                        <div class="rt">
                            <h3>{{val.title}}</h3>
                            <div class="con">
                                <span>{{val.body}}</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
        <foot :system="system"></foot>
    </div>
</template>

<script>
    import top from './top.vue'
    import foot from './foot.vue'

    export default {
    name: 'Index',
    props: {
        system: Object
    },
    data(){
        return {
       
            news:[]
    }
 },
    methods:{
        getNewsList(){
            this.axios.get('http://yindada.gz01.bdysite.com/api/getChatList.php').then((res)=>{
                this.news = res.data
            })
        }
    },
    created(){
        this.getNewsList()
    },
    components:{
        top,
        foot
    }
}

</script>
<style scoped>
header{
    background: #000;
}
.news li>div{
    width: 64%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between
}
.new .lf{
    width: 5%;
    text-align: center;
}
.news .lf span{
    display: inline-block;
    padding: 24%;
    background-color: rgb(55, 170, 10);
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
}
.news .rt{
    margin-left: 1%;
    width: 95%;
    border-radius: 4px;
    border: 1px solid #ddd;
}
.news .rt h3{
    font-weight: 600
}
.news div h3{
    font-size: 18px;
    padding: 0.9% 1%;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    color: rgb(55, 170, 10)
}
.news .con{
    padding: 4% 1%;
}
</style>
