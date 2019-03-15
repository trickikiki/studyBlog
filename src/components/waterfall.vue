<template>
    <div id="index">
            <img v-for="(pic,index) in pics" :src="pic.src" :key="index" ref="imgs">
    </div>
</template>
<script>
    export default {
        data(){
            return{
                pics:[
                    {src:require('../assets/1.jpg')},
                    {src:require('../assets/2.jpg')},
                    {src:require('../assets/3.jpg')},
                    {src:require('../assets/4.jpg')},
                    {src:require('../assets/5.jpg')},
                    {src:require('../assets/6.jpg')},
                    {src:require('../assets/7.jpg')},
                    {src:require('../assets/8.jpg')},
                    {src:require('../assets/9.jpg')},
                    {src:require('../assets/10.jpg')},
                    {src:require('../assets/11.jpg')},
                    {src:require('../assets/12.jpg')},
                    {src:require('../assets/13.jpg')},
                    {src:require('../assets/14.jpg')},
                    {src:require('../assets/15.jpg')},
                    {src:require('../assets/16.jpg')},
                    {src:require('../assets/17.jpg')},
                    {src:require('../assets/18.jpg')},
                    {src:require('../assets/19.png')},
                    {src:require('../assets/20.jpg')},
                    {src:require('../assets/21.jpg')},
                    {src:require('../assets/22.jpg')},
                    {src:require('../assets/23.jpg')},
                    {src:require('../assets/24.jpg')},
                    {src:require('../assets/25.jpg')},
                    {src:require('../assets/25.jpg')},
                    {src:require('../assets/26.jpg')},
                    {src:require('../assets/27.jpg')},
                    {src:require('../assets/28.jpg')},
                    {src:require('../assets/29.jpg')},
                    {src:require('../assets/30.jpg')}
                ],
                screenWidth:document.body.clientWidth
            }
        },
        computed:{
            cols(){
                return parseInt(this.screenWidth/210)
            }
        },
        create(){
            this.screenWidth=window.innerWidth
            this.cols=parseInt(this.screenWidth/210)
        },
        watch:{
          cols:function () {
              this.dosort(this.$refs.imgs)
          }
        },
        mounted(){
            const nodelist=this.$refs.imgs;
            setTimeout(function () {
                _this.screenWidth=window.innerWidth
                _this.cols=parseInt(this.screenWidth/210)
                _this.dosort(nodelist)
            },100)
            var _this=this  //this对象无法传入window中 需要定义另一个变量代替
            window.onresize=function() {
                _this.screenWidth=window.innerWidth
                _this.cols=parseInt(this.screenWidth/210)
                _this.dosort(nodelist)
            }
        },
        methods:{
            dosort(nodelist){
                let arr=new Array();
                for(let i=0;i<nodelist.length;i++)
                {
                    if(i<this.cols)//第一行
                    {
                        nodelist[i].style.top=0+'px';
                        nodelist[i].style.left=i*210+'px';
                        arr[i]=nodelist[i].offsetHeight;
                    }
                    else{
                        var minHeight=arr[0];
                        var index=0;
                        for(var j =0;j<arr.length;j++)//找出最矮
                        {
                            if(minHeight>arr[j]){
                                minHeight=arr[j];
                                index=j;
                            }
                        }
                        nodelist[i].style.top=arr[index]+10+'px';
                        nodelist[i].style.left=nodelist[index].offsetLeft+'px';
                        arr[index]=arr[index]+nodelist[i].offsetHeight+10;
                    }
                }
                arr=[];
            }
        }
    }
</script>
<style scoped lang="less">
    #index{
        position: relative;
    }
img{
    width: 200px;
    position: absolute;
}
</style>