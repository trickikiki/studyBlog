<template>
    <div id="waterfall">
        <div id="index">
            <img v-for="(pic,index) in pics" :src="pic" :key="index" ref="imgs">
        </div>
        <myupload v-if="showupload" @hidden="hidden"></myupload>
        <bottomMenu @update="showupload=!showupload" @fetch="fetch"></bottomMenu>
    </div>
</template>
<script>
    import bottomMenu from './bottomMenu'
    import myupload from './upload'
    export default {
        components:{
            bottomMenu,
            myupload
        },
        data(){
            return{
                //pics:[{src:require('../assets/1.jpg')}],
                pics:[
                    require('../assets/1.jpg'),
                    require('../assets/2.jpg'),
                    require('../assets/3.jpg'),
                    require('../assets/4.jpg'),
                    require('../assets/5.jpg'),
                    require('../assets/6.jpg'),
                    require('../assets/7.jpg'),
                    require('../assets/8.jpg'),
                    require('../assets/9.jpg'),
                    require('../assets/10.jpg'),
                    require('../assets/11.jpg'),
                    require('../assets/12.jpg'),
                    require('../assets/13.jpg'),
                    require('../assets/14.jpg'),
                    require('../assets/15.jpg'),
                    require('../assets/16.jpg'),
                    require('../assets/17.jpg'),
                    require('../assets/18.jpg'),
                    require('../assets/19.png'),
                    require('../assets/20.jpg'),
                    require('../assets/21.jpg'),
                    require('../assets/22.jpg'),
                    require('../assets/23.jpg'),
                    require('../assets/24.jpg'),
                    require('../assets/25.jpg'),
                    require('../assets/25.jpg'),
                    require('../assets/26.jpg'),
                    require('../assets/27.jpg'),
                    require('../assets/28.jpg'),
                    require('../assets/29.jpg'),
                    require('../assets/30.jpg')
                ],
                screenWidth: window.screenWidth,
                showupload: false
                //cols:parseInt(window.innerWidth/210)
            }
        },
        computed:{
            cols:{
                get:function () {
                    return parseInt(this.screenWidth/210)
                }
                /*set:function (val) {
                    this.screenWidth=val*210
                }*/
            }
        },
        create(){
            this.screenWidth=window.innerWidth
            this.cols=parseInt(this.screenWidth/210)
        },
        watch:{
          pics:function () {
              this.screenWidth=window.innerWidth
              this.cols=parseInt(this.screenWidth/210)
              this.dosort(this.$refs.imgs)
          }
        },
        mounted(){
            var _this=this //this对象无法传入window中 需要定义另一个变量代替
            const nodelist = this.$refs.imgs
            _this.timer=false
            window.onresize=function() {
                if(_this.timer==false)
                {
                    _this.timer=true
                    var throttle=setTimeout(function () {
                        _this.screenWidth=window.innerWidth
                        _this.cols=parseInt(this.screenWidth/210)
                        _this.dosort(nodelist)
                        _this.timer=false
                    },200)
                }
            }
            var init=setTimeout(function () {
                _this.screenWidth=window.innerWidth
                _this.cols=parseInt(this.screenWidth/210)
                _this.dosort(nodelist)
                console.log('init')
            },200)
        },
        updated(){
            this.dosort(this.$refs.imgs)
        },
        methods:{
            hidden(){
                this.showupload=!this.showupload
            },
            fetch(){
                this.$http.post('/getimg',{}).
                then((res)=>{
                    for(let i of res.data)
                    {
                        let temp='/static/'+i
                        if (!this.pics.includes(temp))
                        {
                            this.pics.push(temp)
                        }
                    }
                }).
                catch((err)=>{
                    console.log('get img fail')
                })
            },
            // addimg(imgsrc) {
            //     let img = {src: imgsrc};
            //     this.pics.push(img);
            //     this.dosort(this.$refs.imgs)
            // },
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