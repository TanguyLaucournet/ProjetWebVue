<template>
  <nav
    class="main-header"
  >
  <header class="main-header-title">
    {{user && user.name}}
    <div>
      <button v-if="user"
      @click="logout">
        Se déconnecter
      </button>
    </div>
    <h1 class="main-title">CryptoCourses</h1>
  </header>
    <router-link class="md:hidden" to="/">Home</router-link>
    <router-link
      v-for="item in list"
      :key="item.to"
      class="mx-2 hidden md:inline-block"
      :to="item.to"
      >{{ item.title }}</router-link>
 
   
    </nav>
    <div style="height:62px; background-color: #1D2330; overflow:hidden; box-sizing: border-box; border: 1px solid #282E3B; border-radius: 4px; text-align: right; line-height:14px; block-size:62px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #262B38;padding:1px;padding: 0px; margin: 0px; width: 100%;"><div style="height:40px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=" width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #626B7F; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #626B7F; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;</div></div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/home" },
        { title: "Crypto fav", to: "/crypto" },
        { title: "Calendar", to: "/calendar" },
        { title: "Quizz", to: "/quizz" },
        { title: "Wallet", to: "/wallet" },
        { title: "Login", to: "/login" },
        
      ],
   
  
    };
  },
  computed:{
    user(){
        return this.$store.state.user.data
    }
  },
  methods:{
    logout(){
      this.$store.commit('resetUser')
    }
  }
  
 
};
</script>

<style >
.main-header {
    display: flex;
    position: sticky;
    justify-content: space-between;
    align-content: center;
    top: 0;
    background: #393d41;
    border-bottom: 5px solid #999;
}
.logo,
.main-header,
.main-header-title,
.main-title,
.main-nav {
    display: flex;
    align-items: center;
}
h1 {
    font-weight: 800;
}
</style>
