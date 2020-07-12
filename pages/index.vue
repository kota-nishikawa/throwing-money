<template>
  <section class="container">
    <div>

      <!-- 新規登録フォーム -->
      <section v-if="!isLogin">
        <h5>新規登録</h5>
        <p><input type="text" v-model="userName" placeholder="ユーザーネーム"></p>
        <p><input type="text" v-model="mailaddress" placeholder="メールアドレス"></p>
        <p><input type="password" v-model="password" placeholder="パスワード"></p>
        <div class="links">
          <button @click="regist()">新規登録</button>
        </div>
      </section>

      <!-- ログインフォーム -->
      <section v-if="!isLogin">
        <h5>ログイン</h5>
        <p><input type="text" v-model="mailAddress" placeholder="メールアドレス"></p>
        <p><input type="password" v-model="password" placeholder="パスワード"></p>
        <div class="links">
          <button @click="login()">ログイン</button>
        </div>
      </section>

      <!-- マイページ -->
      <section v-if="isLogin">
        <h5>ログイン中です</h5>
        <!-- ログイン中ユーザーのメールアドレスを表示 -->
        <p>メールアドレス：{{$store.state.user.emailAddress}}</p>
        <div class="links">
          <button @click="logout()">ログアウト</button>
        </div>
        <div>
          <ul v-for="(item,index) in $store.state.message.items" :key="index">
　　　　　　　<li>{{ item.content }}</li>
          </ul>
        </div>
        <div class="links">
          <p><input type="text" v-model="content" placeholder="メッセージ"></p>
          <button @click="addMessage()">メッセージ追加</button>
        </div>
      </section>

    </div>
  </section>
</template>

<script>
export default {
  data: function(){
    return {
        mailAddress: '',
        password: '',
        content: '',
    }
  },
  computed: {
    isLogin(){
        return this.$store.state.user.isLogin;
    }
  },
  methods: {
    init: function() {
        this.password = "";
        this.mailAddress = "";
        this.content = "";
    },
    regist: function () {
        console.log("regist")
        this.$store.dispatch('user/regist', {mailAddress:this.mailAddress, password:this.password, userName:this.userName});
        this.init();
    }
  },
}
</script>

<style>
.container {
  padding: 100px;
}
</style>
