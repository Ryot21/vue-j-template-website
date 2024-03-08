<script setup lang="ts">
</script>
<!-- ナビゲーション -->
<template>
  <!-- 固定アイテム / TOP -->
  <a href="#header" class="c-btn-top -center a-fadeUp -sp25">TOPへ</a>
  <MenuComponent/><!-- ハンバーガーメニュー -->
  <HeaderComponent/><!-- Header -->

  <!-- コンテンツ -->
  <router-view/>
  <!-- //コンテンツ -->
  
  <FooterComponent/><!-- Footer -->
  <!-- <router-view/> -->
</template>

<style>

</style>
