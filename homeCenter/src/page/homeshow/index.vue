<template>
    <div class="box">
        <header>
            <div class="left">
                <el-breadcrumb separator-class="el-icon-arrow-right header">
                    <el-breadcrumb-item >首页</el-breadcrumb-item>
                    <!-- <el-breadcrumb-item v-for ='(item, index) in navPath':to="item.path" :key='index'>{{item.name}}</el-breadcrumb-item> -->
                </el-breadcrumb>
            </div> 
        </header>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navPath:[]
        }
    },
    // created(){
    //     getRouterBran()
    //     console.log(this.navPath)
    // },
    // methods:{
    //     getRouterBran (){
    //         		//$route.matched属性 包含当前路由的所有 嵌套路径片段 的路由记录
	// 	// 当 URL 为 /foo/bar，$route.matched 将会是一个包含从上到下的所有嵌套路由对象 (副本)，比如上面路由为二级路由，
		
	// 	// 那么$route.matched的值为[{foo路由对象}，{bar路由对象}]
	// 	//当url地址为/foo
	// 	// 那么$route.matched的值为[{foo路由对象}]
		
	// 	//当url地址为/home
	// 	// 那么$route.matched的值为[{home路由对象}]
    //         let matche = this.$route.matched()
    //         matche = matche.filter(item => item.name)
    //         // 得到嵌套的路由对象记录，筛选排除一些路由，条件自定
	// 	    // 我这里是筛选排除不带name 的路由，自己决定
    //         this.navPath = matche
    //     }
    // },
    // watch:{
    //     $route(){
    //         this.getRouterBran()
    //     }
    // }
}
</script>

<style scoped>
    .box{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    header{
        width: 100%;
        height: 4rem;
        background: #EFF2F7;
        display: flex;
    }
    .left{
        margin-left: 1rem;
        margin-top: 1.5rem;
    }
    .content{
        width: 100%;
    }
</style>
