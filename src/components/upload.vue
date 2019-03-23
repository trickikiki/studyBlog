<template>
    <div id="upload">
        <div class="box">
            <el-button class="exit" type="danger" circle  size="small" @click="exit">X</el-button>
            <el-upload
                    class="upload-demo"
                    action="/upload"
                    :file-list="fileList"
                    list-type="picture"
                    drap="true">
                <el-button size="small" type="primary" style="top: 5px;">点击上传</el-button>
            </el-upload>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                fileList: [],
                param:'',
                src:''
            };
        },
        methods: {
            exit(){
                this.filelist=[];
                this.$router.go(-1);
            },
        }
    }
</script>
<style scoped lang="less">
#upload{
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(144,144,144,0.5);
    z-index: 1;
}
    .box{
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;
        background-color: white;
        width: 700px;
        .exit{
            position: absolute;
            top: 0px;
            right: 0px;
        }
        .showupload{
            margin:10px;
            left: 0px;
            width: 70%;
        }
    }
</style>