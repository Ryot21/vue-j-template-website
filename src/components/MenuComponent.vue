<script>
	export default{
		name: 'MenuComponent',
		// ロジックやデータを記述
	}
</script>

<template>
	<!-- ハンバーガーメニュー -->
	<nav class="c-hnav a-scroll-on">
    <input id="c-hnav__checkbox" class="c-hnav__cheakbox" type="checkbox"/>
    <label class="c-hnav__button" for="c-hnav__checkbox">
      <span></span>
    </label>
    <label id="" class="c-hnav__cheakbox c-hnav__close" for="c-hnav__checkbox"></label>
    <div class="c-hnav__content">
      <ul class="">
        <li class="">
          <router-link to="/" class="s-SS -ws-n -left"><span class="s-M pdr5 pdr4s">TOP</span>トップ</router-link>
        </li>
        <li class="-active">
          <router-link to="/concept" class="s-SS -ws-n -left"><span class="s-M pdr5 pdr4s">CONCEPT</span>コンセプト</router-link>
        </li>
        <li class="">
          <router-link to="/layout" class="s-SS -ws-n -left"><span class="s-M pdr5 pdr4s">LAYOUT</span>区画・間取</router-link>
        </li>
        <li class="">
          <router-link to="/plan" class="s-SS -ws-n -left"><span class="s-M pdr5 pdr4s">PLAN</span>参考プラン</router-link>
        </li>
        <li class="">
          <router-link to="/equipment" class="s-SS -ws-n -left"><span class="s-M pdr5 pdr4s">EQUIPMENT</span>設備・仕様</router-link>
        </li>
        <li class="">
          <router-link to="/location" class="s-SS -ws-n -left"><span class="s-M pdr5 pdr4s">LOCATION</span>周辺環境</router-link>
        </li>
        <li class="mgb15 mgb15s"><a class="s-SS -ws-n -left"  href="https://www.jyukyo-cnst.co.jp/house/order/house-making/" target="_blank"><span class="s-M pdr5 pdr4s">QUALITY</span>住協の家づくり</a></li>
        <!-- <li class="mgb15 mgb15s"><label class="popup popup-open s-SS -ws-n -left" for="popup01"><span class="s-M pdr5 pdr4s">OVERVIEW</span>物件概要</label></li> -->
        <!-- 物件概要はここには設置しないこと -->
        <div class="c-hnav__contactArea">
            <a href="https://www.jyu-g.co.jp/contents/inquiry?checkid=物件ナンバー" class="c-hnav__top navItem -lh-1">
                <span class="navItem-cTitle -main s-M">資料請求</span>
                <br>
                <span class="navItem-cTitle -sub s-SS">REQUEST</span>
            </a>
            <a href="https://www.jyu-g.co.jp/contents/tour?checkid=物件ナンバー" class="c-hnav__bottom navItem -lh-1">
                <span class="navItem-cTitle -main s-M">見学予約</span>
                <br>
                <span class="navItem-cTitle -sub s-SS">RESERV</span>
            </a>
        </div>
      </ul>
    </div>
  </nav>
</template>