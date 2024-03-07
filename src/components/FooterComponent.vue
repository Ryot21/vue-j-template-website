<script>
	export default{
		name: 'FooterComponent',
		// ロジックやデータを記述
	}
</script>
<template>
    <!-- footer -->
    <footer id="footer" class="c-footer">
        <!-- お問い合わせボタン -->
        <div class="c-footer-wrapper mgb1 mgb10s">
            <div class="c-footer__contactArea">
                <ul class="c-footer__contactLists">
                    <li class="contactItem">
                        <a href="https://www.jyu-g.co.jp/contents/inquiry?checkid=物件ナンバー" class="-lh-1">
                            <span class="contactItem_main s-L -s-nav">資料請求</span>
                            <br>
                            <span class="contactItem_sub s-SS">REQUEST</span>
                        </a>
                    </li>
                    <li class="contactItem">
                        <a href="https://www.jyu-g.co.jp/contents/tour?checkid=物件ナンバー" class="-lh-1">
                            <span class="contactItem_main s-L -s-nav">見学予約</span>
                            <br>
                            <span class="contactItem_sub s-SS">RESERV</span>
                        </a>
                    </li>
                    <li class="tb-pc contactItem">
                        <a href="https://www.jyu-g.co.jp/contents/inquiry?checkid=物件ナンバー" class="-lh-1">
                            <span class="contactItem_main s-L -s-nav">お問い合わせ</span>
                            <br>
                            <span class="contactItem_sub s-SS">INQUIRY</span>
                        </a>
                    </li>
                    <li class="tb-pc contactItem">
                        <a href="https://www.jyu-g.co.jp/" class="-lh-1">
                            <span class="contactItem_main s-L -s-nav">住まい情報トップ</span>
                            <br>
                            <span class="contactItem_sub s-SS">HOME</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="c-footer-wrapper -v02 mgb2 mgb10s">
            <nav class="c-footer__navArea">
                <ul class="c-footer__navLists -col7">
                    <li class="navItem_footer mgb2">
                      <router-link to="/" :class="{ '-active' : $route.path === '/' }" class="-lh-1 -center"><span class="s-S -s-nav">トップ</span></router-link>
                    </li>
                    <li class="navItem_footer mgb2">
                      <router-link to="/concept" :class="{ '-active' : $route.path === '/concept' }" class="-lh-1 -center"><span class="s-S -s-nav">コンセプト</span></router-link>
                    </li>
                    <li class="navItem_footer mgb2">
                      <router-link to="/layout" :class="{ '-active' : $route.path === '/layout' }" class="-lh-1 -center"><span class="s-S -s-nav">区画・間取</span></router-link>
                    </li>
                    <li class="navItem_footer mgb2">
                      <router-link to="/plan" :class="{ '-active' : $route.path === '/plan' }" class="-lh-1 -center"><span class="s-S -s-nav">プラン</span></router-link>
                    </li>
                    <li class="navItem_footer mgb2">
                      <router-link to="/euipment" :class="{ '-active' : $route.path === '/euipment' }" class="-lh-1 -center"><span class="s-S -s-nav">設備・仕様</span></router-link>
                    </li>
                    <li class="navItem_footer mgb2">
                      <router-link to="/location" :class="{ '-active' : $route.path === '/location' }" class="-lh-1 -center"><span class="s-S -s-nav">周辺環境</span></router-link>
                    </li>
                    <li class="navItem_footer mgb2">
                        <a href="https://www.jyukyo-cnst.co.jp/house/order/house-making/" target="_blank" class="-lh-1 -center">
                            <span class="s-S -s-nav">住協の家づくり</span>
                        </a>
                    </li>
                    <!-- <li class="navItem_footer mgb2">
                        <a href="/" class="-lh-1">
                            <span class="navItem_main s-S">物件概要</span>
                        </a>
                    </li> -->
                </ul>
            </nav>
        </div>
        <div class="c-footer__btnArea -col2 mgb4 mgb10s">
            <!-- 物件概要ボタン -->
            <ul class="c-flex -gaiyou">
                <li>
                    <label class="s-S popup -color01 popup-open" for="popup01">
                        <span class="s-ML -s14 -center -ls-2">新築戸建</span><br>物件概要はこちら
                    </label>
                    <!-- 01.物件概要 > 新地戸建 -->
                    <input type="checkbox" id="popup01" >
                    <label class="popup-overlay" for="popup01"></label>
                    <div class="popup-window">
                        <!-- 閉じるボタン -->
                        <label class="popup-close" for="popup01">
                            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="0" x2="18" y2="18" stroke="white" stroke-width="3"></line>
                                <line x1="0" y1="18" x2="18" y2="0" stroke="white" stroke-width="3"></line>
                            </svg>
                        </label>
                        <!-- iframe -->
                        <iframe id="inlineFrame01" title="Inline Frame Example" src="https://www.jyu-g.co.jp/contents/detail/物件ナンバー（新築戸建）"></iframe>
                    </div>
                </li>
                <li>
                    <label class="s-S popup -color02 popup-open" for="popup02">
                        <span class="s-ML -s14 -center -ls-n">建築条件付き土地</span><br>物件概要はこちら
                    </label>
                    <!-- 02.物件概要 > 建築条件付き土地 -->
                    <input type="checkbox" id="popup02" >
                    <label class="popup-overlay" for="popup02"></label>
                    <div class="popup-window">
                        <!-- 閉じるボタン -->
                        <label class="popup-close" for="popup02">
                            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="0" x2="18" y2="18" stroke="white" stroke-width="3"></line>
                                <line x1="0" y1="18" x2="18" y2="0" stroke="white" stroke-width="3"></line>
                            </svg>
                        </label>
                        <!-- iframe -->
                        <iframe id="inlineFrame02" title="Inline Frame Example" src="https://www.jyu-g.co.jp/contents/detail/物件ナンバー（建築条件付き土地）"></iframe>
                    </div>
                </li>
            </ul>
            <!-- //物件概要ボタン -->
        </div>
        <div class="c-footer__shopArea">
            <ul class="c-footer__shopFlex">
                <li><a href="https://www.jyu-g.co.jp/contents/office_info/取扱支店ナンバー" target="_blank"><img src="images/logo/SVG/sample-shop.svg" alt="住協 〇〇支店 情報"></a></li>
                <li>
                    <img class="tb-pc" src="images/logo/SVG/sample-tel.svg" alt="住協 〇〇支店 電話番号">
                    <a class="sp" href="tel:取扱支店電話番号"><img src="images/logo/SVG/sample-tel.svg" alt="住協 〇〇支店 電話番号"></a>
                </li>
            </ul>
        </div>
    </footer>
    <!-- //footer -->
</template>
<style>
</style>