<template>
    <div id="index">
        <div class="banner">
            <div class="inner1">
                TRICKIKIKI'S WORK
            </div>
            <div class="inner2">
                demo
            </div>
            <ul class="nav">
                <li>
                    <router-link to="/index"><img src="../assets/_ionicons_svg_md-home.svg" alt=""></router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
.banner{
    color: white;
    width: 100%;
    height: 10rem;
    position: absolute;
    top: 40%;
    margin-right: auto;
    margin-left: auto;
    .inner1{
        width: 35%;
        background-color: black;
        margin-left: auto;
        margin-right: auto;
        height: 4rem;
        line-height: 4rem;
        font-size: x-large;
    }
    .inner2{
        width: 35%;
        top: 4rem;
        margin-right: auto;
        margin-left: auto;
        height: 4rem;
        line-height: 4rem;
        font-size: large;
        color: gray;
    }
}
    .nav{
        img{
            top: 8rem;
            height: 2rem;
            width: 2rem;
        }
    }
</style>