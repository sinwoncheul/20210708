<template>
    <div>
        <div>
            <h4>Login 페이지</h4>
            <input type="text" v-model="userid" placeholder="아이디" /> <br />
            <input type="password" v-model="userpw" placeholder="암호" /> <br />
            <input type="button" v-on:click="checkLogin()" value="로그인" />
        </div>   

    </div>
</template>

<script>
export default {
    name: 'About',
    methods:{
        checkLogin() {
            if(this.userid === '') {
                alert('아이디를 입력해주세요')
            }
              if(this.userpw === '') {
                alert('암호를 입력해주세요')
            }
        }
        
    },
    data : function() {
        return {
            name:'aaa',
            userid :'',
            userpw :'',
        }
    }
}
</script>

<style scoped>

</style>