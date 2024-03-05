
<template>
  <nav>
    <router-link to="/">トップ</router-link> |
    <router-link to="/concept">コンセプト</router-link>|
    <router-link to="/layout">レイアウト</router-link>|
    <router-link to="/plan">プラン</router-link>|
    <router-link to="/euipment">設備・仕様</router-link>|
    <router-link to="/location">周辺環境</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
