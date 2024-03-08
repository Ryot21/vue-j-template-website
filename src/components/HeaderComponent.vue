<script>
	export default{
		name: 'HeaderComponent',
		// ロジックやデータを記述
	}
</script>
<template>
	<!-- header / TOPと各ページの構造が異なる -->
		<header id="header" class="c-header pdt1">
        <!-- バナー表示エリア -->
        <div class="c-header-wrapper">
            <div class="c-header__popArea">
                <ul class="c-header__lists">
                    <li class="logo pdb2">
                        <div class="c-contents -h-logo">
                            <div class="imgBox">
                                <!-- PCサイズ：757x110 -->
                                <img class="tb-pc pdb1" src="https://via.placeholder.com/757x110/?text=TB-PC 757x110">
                                <!-- SPサイズ：325x110 -->
                                <img class="sp" src="https://via.placeholder.com/325x110/?text=SP 325x110">
                            </div>
                            <div class="c-contentsBox -logo-item01"><img src="images/logo/site-logo-bird01.png" alt="動かす画像1"></div>
                            <div class="c-contentsBox -logo-item02"><img src="images/logo/site-logo-bird02.png" alt="動かす画像2"></div>
                            <!-- SOLD OUT -->
                            <div class="c-contentsBox -soldOut">
                                <img src="images/item/soldout.png" alt="完売御礼 | おかげさまでお契約いただいきました！">
                            </div>
                        </div>
                    </li>
                    <li class="c-header__contactArea pdb1">
                        <a href="https://www.jyu-g.co.jp/contents/inquiry?checkid=物件ナンバー" class="top-left navItem -lh-1 c-link -c-color">
                            <span class="navItem-cTitle -main s-M -s-nav">資料請求</span>
                            <br>
                            <span class="navItem-cTitle -sub s-SS -s-nav">REQUEST</span>
                        </a>
                        <a href="https://www.jyu-g.co.jp/contents/tour?checkid=物件ナンバー" class="top-right navItem -lh-1 c-link -c-color">
                            <span class="navItem-cTitle -main s-M -s-nav">見学予約</span>
                            <br>
                            <span class="navItem-cTitle -sub s-SS -s-nav">RESERV</span>
                        </a>
                        <p class="tag s-S -s-nav -center">物件名物件名／新築分譲住宅⚪︎号棟</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- ナビ表示エリア -->
        <div class="tb-pc c-header-wrapper">
            <nav class="c-header__navArea">
                <ul class="c-header__navLists -col8">
                    <li class="navItem">
                        <router-link to="/" :class="{ '-active' : $route.path === '/' }" class="navItem__link -lh-1">
                          <span class="navItem-title -main s-M -s-nav">トップ</span>
                            <br>
                            <span class="navItem-title -sub s-SS -s-nav">TOP</span>
                        </router-link>
                    </li>
                    <li class="navItem">
                        <router-link to="/concept" :class="{ '-active' : $route.path === '/concept' }" class="navItem__link -lh-1">
                          <span class="navItem-title -main s-M -s-nav">コンセプト</span>
                            <br>
                            <span class="navItem-title -sub s-SS -s-nav">CONCEPT</span>
                        </router-link>
                    </li>
                    <li class="navItem">
                      <router-link to="/layout" :class="{ '-active' : $route.path === '/layout' }" class="navItem__link -lh-1">
                        <span class="navItem-title -main s-M -s-nav">区画・間取</span>
                          <br>
                        <span class="navItem-title -sub s-SS -s-nav">LAYOUT</span>
                      </router-link>
                    </li>
                    <li class="navItem">
                      <router-link to="/plan" :class="{ '-active' : $route.path === '/plan' }" class="navItem__link -lh-1">
                        <span class="navItem-title -main s-M -s-nav">プラン</span>
                          <br>
                        <span class="navItem-title -sub s-SS -s-nav">PLAN</span>
                      </router-link>
                    </li>
                    <li class="navItem">
                      <router-link to="/euipment" :class="{ '-active' : $route.path === '/euipment' }" class="navItem__link -lh-1">
                        <span class="navItem-title -main s-M -s-nav">設備・仕様</span>
                          <br>
                        <span class="navItem-title -sub s-SS -s-nav">EQUIPMENT</span>
                      </router-link>
                    </li>
                    <li class="navItem">
                      <router-link to="/location" :class="{ '-active' : $route.path === '/location' }" class="navItem__link -lh-1">
                        <span class="navItem-title -main s-M -s-nav">周辺環境</span>
                          <br>
                        <span class="navItem-title -sub s-SS -s-nav">LOCATION</span>
                      </router-link>
                    </li>
                    <li class="navItem">
                        <a href="https://www.jyukyo-cnst.co.jp/house/order/house-making/" target="_blank" class="navItem__link -lh-1">
                            <span class="navItem-title -main s-M -s-nav">住協の家づくり</span>
                            <br>
                            <span class="navItem-title -sub s-SS -s-nav">QUALITY</span>
                        </a>
                    </li>
                    <li class="navItem d-menu">
                        <input id="d-menu__checkbox" class="d-menu__cheakbox" type="checkbox"/>
                        <label class="d-menu__title -lh-1" for="d-menu__checkbox">
                            <span class="navItem-title -main s-M -s-nav">物件概要</span>
                            <br>
                            <span class="navItem-title -sub s-SS -s-nav">OVERVIEW</span>
                        </label>
                        <ul class="d-menu__lists">
                            <li class="d-menu__item">
                                <label class="d-menu__subTitle s-SS popup popup-open" for="popup01">新築戸建</label>
                            </li>
                            <li class="d-menu__item">
                                <label class="d-menu__subTitle s-SS popup popup-open" for="popup02">建築条件付き土地</label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
	<!-- //header -->
</template>
<style>
</style>