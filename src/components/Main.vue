<template>
      <div style="width:500px"  >
      <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading">로그인 페이지</h2>
        <label for="inputEmail" class="sr-only">아이디 확인</label>
        <input type="text" id="inputEmail" class="form-control" placeholder="아이디" required autofocus>
        <label for="inputPassword" class="sr-only">비밀번호 확인</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="비밀번호" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> 확인 했습니다.
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block"  type="submit">로그인</button>
      </form>

    </div> <!-- /container -->
    </div>
</template>

<script>
export default {
    name: 'About',
    methods:{
        checkLogin() {
            if(this.inputEmail === '') {
                alert('아이디를 입력해주세요')
            }
              if(this.inputPassword === '') {
                alert('암호를 입력해주세요')
            }
        }
        
    },
    data : function() {
        return {
            name:'aaa',
            inputEmail :'',
            inputPassword :'',
        }
    }
}
</script>

<style scoped>

</style>