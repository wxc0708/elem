<template>
	<div class="box">
		<div class="tittle">elm后台管理系统</div>
		<div class="login">
			<div class="username">
				<el-input v-model="input" @blur="shown" placeholder="用户名"></el-input>
				<span v-if="usen">请输入用户名</span>
			</div>
			<div class="pass">
				<el-input placeholder="请输入密码" @blur="showp" v-model="psd" show-password></el-input>
				<span v-if="psdn">请输入密码</span>
			</div>
			<div class="but">
				    <el-button
						plain
						@click="login">
						登陆
					</el-button>
			</div>
			<div class="message">
				<p>温馨提示:</p>
				<p>未登录过的新用户,自动注册</p>
				<p>注册过的用户可凭账号密码登陆</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				input:'',
				psd:'',
				usen:false,
				psdn:false
			}
		},
		methods:{
			shown(){
				if(this.input==''){
					this.usen=true
				}else{
					this.usen=false
				}
			},
			showp(){
				if(this.psd==''){
					this.psdn=true
				}else{
					this.psdn=false
				}
			},
			login(){
				if(this.input!='' && this.psd!=''){
					let obj={}
					obj.user_name=this.input
					obj.password=this.psd
					this.axios
						.post('https://elm.cangdu.org/admin/login',obj)
						.then(res=>{
							console.log(res.data)
							if(res.data.status==1){
								this.$router.push({name:'Index'})
							}
						})
				}else{
					 const h = this.$createElement;
						this.$notify({
						title: '错误',
						message: h('i', { style: 'color: teal'}, '请输入正确的用户名密码')
						});
				}
			}
		}
	}
</script>

<style lang="scss" type="text/css" scoped="scoped">
	.box{
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: #324057;
	}
	.tittle{
		margin: 200px auto;
		text-align: center;
		font-size: 30px;
		font-weight: bold;
		color: #FFFFFF;
	}
	.login{
		width: 400px;
		height: 20rem;
		background: #FFFFFF;
		margin: -180px auto;
	}
	.username{
		width: 80%;
		margin:auto;
		padding-top: 1rem;
		span{
			font-size: 0.8rem;
			color: red;
		}
	}
	.pass{
		width: 80%;
		margin: 1.2rem auto;
		span{
			font-size: 0.8rem;
			color: red;
		}
	}
	.but{
		width: 80%;
		margin: 1.5rem auto;
		button{
			width: 100%;
		}
	}
	.message{
		width: 100%;
		text-align: center;
		font-size: 0.8rem;
		color: red;
	}
</style>
