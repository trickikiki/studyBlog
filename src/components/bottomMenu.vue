<template>
    <div id="menu">
        <div class="backGround">
            <!--<el-input placeholder="请输入图片链接" v-model="imgsrc" clearable class="text"></el-input>-->
            <el-button type="primary" @click="insert" class="btn">添加图片</el-button>
            <el-button type="primary" @click="fetch" class="btn">拉取图片</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "menu",
        data(){
            return{
                imgsrc:''
            }
        },
        methods:{
            insert(){
                this.$emit('update',this.imgsrc);
            },
            fetch(){
                this.$emit('fetch')
            }
        }
    }
</script>

<style scoped lang="less">
.backGround{
    position: fixed;
    bottom: 0px;
    width: 100%;
    background:rgba(0,0,0,0.7);
    .text{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    .btn{
        width: 95px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>