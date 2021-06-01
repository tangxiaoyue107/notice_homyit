<template>
	<div id="app">
		<div id="infor">
			<div class="intro">
				<p>个人信息</p>
				<span>Personal introduction</span>
			</div>
			<div class="txnc">
				<!-- <img :src="personal.h_url" alt=""> -->
				<img src="../../assets/img/dz.png" alt="">
				<br>
				<i class="fa fa-pencil-square-o"></i>
				<input type="text" v-model="personal.nickname">
			</div>
			<div class="allinfor">
				<div class="singleinfor topBox">
					<i class="fa fa-user"></i>
					<span>姓名</span>
					<input type="text" v-model="personal.real_name">
				</div>
				<div class="singleinfor topBox">
					<i class="fa fa-id-card-o"></i>
					<span>学号</span>
					<input type="text" v-model="personal.stu_num">
				</div>
				<div class="singleinfor topBox">
					<i class="fa fa-envelope"></i>
					<span>邮箱</span>
					<input type="text" v-model="personal.email">
				</div>
				<div class="singleinfor bottomBox">
					<i class="fa fa-users"></i>
					<span>组织</span>
					<input type="text" v-model="personal.o_name">
				</div>
				<div class="singleinfor bottomBox">
					<i class="fa fa-sitemap"></i>
					<span>部门</span>
					<input type="text" v-model="personal.d_name">
				</div>
				<div class="singleinfor bottomBox perintro">
					<i class="fa fa-pencil"></i>
					<span>个人简介</span>
					<input type="text" v-model="personal.introduction">
				</div>
				<div class="passw bottomBox">
					<i class="fa fa-unlock-alt "></i>
					<button @click="openPop">修改密码</button>
				</div>
				<!--修改密码的弹窗-->
				<div class="pop" id="newpop">
					<div class="popcontent">
						<h2>修改密码</h2>
						<span class="close">&times;</span>
						<hr>
						<div class="pswcontent">
							<input type="text" placeholder="请输入验证码">
							<button>获取验证码</button><br>
							<span>输入新密码：</span><input type="password" name="psw" ><br>
							<span>确认新密码：</span><input type="password" name="psw"><br>
							<button class="ok" @click="makesure">确认</button>
						</div>
					</div>
				</div>
			</div>
			<button class="submodi">提交修改</button>
		</div>
	</div>
</template>
<style src="../../assets/font-awesome-4.7.0/css/font-awesome.css"></style>

<script>

export default {
		name:'adminiinfor',
		data: function() {
			return {
				personal:{
					"h_url": "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
					"nickname": "党站组织部",
					"real_name": "李万龙",
					"stu_num":"201926202173",
					"email":"2173674934@qq.com",
					"introduction":"党站组织部有许多热心的学长学姐，欢迎萌新们加入我们~",
					"o_name":"党站",
					"d_name":"组织部"
				},
			}
		},
		methods: {
			openPop(){
				var pop = document.getElementById('newpop');
				var no = document.getElementsByClassName('close')[0];
				pop.style.display = "block";
				no.onclick = function(){
				pop.style.display = "none";
				}
			},
			makesure(){
				//可在这里完成修改密码的单独请求
				var pop = document.getElementById('newpop');
				pop.style.display = "none";
			}
		},
}
</script>
<style>
#infor{
	position:absolute; 
	left:0; 
	top:0; 
	width:100%;
	height:100%;
	background-image: url(../../assets/img/infor1.png);
	background-position: center 30%;
}	
.intro{
	display: inline-block;
	width: 30%;
	text-align: center;
	margin: .5rem;
}
.intro p{
	font-size: 40px;
	margin: 0;
	font-weight: 150;
}
.intro span{
	color: #8D8183;
	font-size: 35px;
	font-weight: lighter;

}
.txnc{
	display: inline-block;
	width:60%;
	text-align: center;
	color:  #8D8183;
}
.txnc img{
	width: 80px;
	height: 80px;
	border-radius: 50%;
	margin-bottom: .15rem;
}
.txnc input{
	border: none;
	outline: none;
	background-color: transparent;
	width: 100px;
	color:  #8D8183;
	font-size: 18px;

}
.allinfor{
	margin: 4rem 2rem 0;
}
.allinfor .singleinfor{
	height: 3.5rem;
}
.topBox{
	color: #8D8183;
}
.bottomBox{
	color: white;
}
.topBox i,.bottomBox i{
	width: 25px;
	height: 25px;
	padding-top: 2px;
	margin:0 .5rem;
	box-sizing: border-box;
	text-align: center;
	border-radius: 50%;
}
.topBox i{
	border: 1px solid #8D8183;
}
.bottomBox i{
	border: 1px solid white;
}
.topBox input,.bottomBox input{
	border: none;
	outline: none;
	background-color: transparent;
	margin-left: .5rem;
}
.topBox input{
	border-bottom: 1px solid #8D8183;
}
.bottomBox input{
	border-bottom: 1px solid white;
}
.perintro input{
	width: 50%;
}
.passw button{
	width: 80px;
	height: 30px;
	cursor: pointer;
	background-color: white;
	color: rgb(134, 62, 62);
	border: none;
	border-radius: 5px;
	outline: none;
	box-shadow: 7px 7px 5px rgb(114, 111, 111);
}
.passw button:hover,.submodi:hover{
	color: red;
}
/* 弹窗样式 */
.pop{
	display: none;
	position: fixed;
	z-index: 1;
	left: 0;
	top:0;
	width: 100%;
	height: 100%;
	/* padding-top: 200px;
  padding-bottom: 300px; */
	background-color: rgba(0,0,0,.4)
}
.popcontent{
	width: 40%;
	height: 300px;
	margin:150px auto;
	/* text-align: center; */
	background-color: white;
	border-radius: 10px;
}
.popcontent h2{
	margin: .6rem;
	/* font-size: 20px; */
	display: inline-block;
}
.popcontent>span{
	font-size: 25px;
	margin: .6rem;
	float: right;
	cursor: pointer;
}
.popcontent>span:hover{
	color: red;
}
.popcontent hr{
	width: 97%;
	margin: 0 auto;
	height: .75px;
	background-color: gray;
	border: none;
}
.pswcontent{
	width: 70%;
	margin: 2rem auto;
	text-align:center;
}
.pswcontent button,.submodi{
	border:none;
	outline: none;
	background-color: red;
	color: white;
	/* height: 15px; */
	padding:.35rem;
	border-radius: 5px;
	cursor: pointer;
}
.pswcontent button:active{
	background-color: #553232;
}
.pswcontent input{
	line-height: 25px;
	outline: none;
	border: 1px solid gray;
	border-radius: 5px;
	margin: .5rem .5rem;
}
.pswcontent span{
	font-weight: lighter;
}
.pswcontent .ok{
	padding: .5rem 1.5rem;
	margin-top: 1.5rem;
}
.submodi{
	background-color: #553232;
	box-shadow: 5px 5px 5px rgb(95, 85, 85);
	padding: .65rem;
	margin: 2rem 20rem 0;
}
</style>