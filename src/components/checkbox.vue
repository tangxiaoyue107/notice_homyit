<template>
  <div class="usersBox">
    <div class="user" v-for="user in users" :key="user.uid">
      <input class="inputBox" type="checkbox" name="user" :value="user.uid" >
      <img :src="user.h_url" alt="" >
      {{user.real_name}}
      <!-- @click="checked($event)" -->
    </div>
    <div class="btns">
      <input type="button" class="ally" @click="Ally" value="全选">
      <input type="button" class="alln" @click="Alln" value="全不选">
    </div>
  </div>
</template>
<script>
//   const cityOptions = ['上海', '北京', '广州', '深圳'];
//   export default {
//     props:['users'],
//     data() {
//       return {
//         checkAll: false,
//         checkedCities: [],
//         cities: users,
//         isIndeterminate: true
//       };
//     },
//     methods: {
//       handleCheckAllChange(val) {
//         this.checkedCities = val ? users : [];
//         this.isIndeterminate = false;
//       },
//       handleCheckedCitiesChange(value) {
//         let checkedCount = value.length;
//         this.checkAll = checkedCount === this.cities.length;
//         this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
//       }
//     }
//   };
  export default{
    props: ['users'],
    data(){
      return {
        flag: true,
        // members:[],
      }
    },
    methods: {
      // getimg(url){
      //   return require('../assets/img/' + url)
      // }
      Ally(){
        var user = document.getElementsByClassName('usersBox')[0].getElementsByTagName('input');
        // console.log(user)
        for(var i = 0; i<user.length-2; i++){
          user[i].checked = this.flag;
        }
      },
      Alln(){
        var user = document.getElementsByClassName('usersBox')[0].getElementsByTagName('input');
        for(var i = 0; i<user.length-2; i++){
          user[i].checked = !this.flag;
        }
      },
      // checked(event){
      //   // console.log(user.uid)
      //   // this.members.push(user.uid)
      //    var target = event.target || window.event.srcElement;
      //   //  console.log(target);
      //   // console.log(target.getAttribute('value'))
      //   if(target.checked === true){
      //     this.members.push(target.getAttribute('value'))
      //   }
      //   else{

      //   }
        
      //   console.log(this.members)
      // }
    },
  }
</script>
<style>
.usersBox{
    width: 80%;
    margin: 1rem auto;
}
.usersBox img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: gray;
    vertical-align: middle;
    margin: 0 .75rem;
}
.user{
    width: 30%;
    margin: .75rem 0;
    text-align: center;
    display: inline-block;
}
.btns{
  margin-left: 2rem;
}
.btns input{
  /* display: inline-block; */
  width: 80px;
  height: 30px;
  color:gray;
  background-color: white;
  border: none;
  margin: 1.5rem;
  box-shadow:2px 2px 3px #A7A9A8;
  outline: none;
  cursor: pointer;
}
.btns input:hover{
  color: white;
  background-color: #1ACFFC;
}



</style>