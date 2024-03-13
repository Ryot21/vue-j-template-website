<template>
  <div class="plan mgb10 mgb10s">
    <FirstViewComponent01/>
    <div class="c-contents w1100">
        <div class="c-contents-inner">
            <!-- コンテンツ > タイトル -->
            <h2 class="c-contents_MainTitle -icon -left -lh-n mgb2 mgb3s">
                ページタイトル
            </h2>
            <!-- コンテンツ > 説明 -->
            <p class="s-M -f-gothic -left -lh-1_5 -lh-1_5_s mgb20 mgb20s a-fadeUp -sc40">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。<br><br>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。<br><br>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。<br><br>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。<br class="tb-pc"><br class="tb-pc">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。<br><br>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
            </p>
        </div>

        <!-- ---------------- 外観【SP2カラム、PC2カラム】 ------------------- -->
        <div class="c-contents w95 mgb10 mgb10s">
            <article>
                <ul class="c-flex -h-c_pc -col2_2 -r mgb10 mgb10s">
                    <li class="c-contents">
                        <div class="">
                            <p class="c-contents_subTitle s-L -s14 -left mgb5 mgb5s a-fadeRight -sc40">コンテンツアイテム_タイトル</p>
                            <p class="tb-pc s-M -lh-2 -left a-fadeRight -sc40">
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                            </p>
                            <p class="sp s-M -lh-1_5_s -left a-fadeRight -sc40">
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                            </p>
                        </div>
                    </li>
                    <li class="a-flipLeft -sc40">
                        <div class="a-zoomImg">
                            <div class="imgBox"><img src="https://via.placeholder.com/480x320/?text=480x320"></div>
                            <p class="-right a-fade -sp4"><span class="s-kome -color03">※イメージ</span></p>
                        </div>
                    </li>
                </ul>
            </article>

            <article>
                <ul class="c-flex -h-c_pc -col2_2">
                    <li class="">
                        <div class="">
                            <p class="c-contents_subTitle s-L -s14 -left mgb5 mgb5s a-fadeLeft -sc40">コンテンツアイテム_タイトル</p>
                            <p class="tb-pc s-M -lh-2 -left a-fadeLeft -sc40">
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                            </p>
                            <p class="sp s-M -lh-1_5_s -left a-fadeLeft -sc40">
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                            </p>
                        </div>
                    </li>
                    <li class="a-flipRight -sp5 -sc40">
                        <div class="a-zoomImg">
                            <div class="imgBox"><img src="https://via.placeholder.com/480x320/?text=480x320"></div>
                            <p class="-right a-fade -sp4"><span class="s-kome -color03">※イメージ</span></p>
                        </div>
                    </li>
                </ul>
            </article>

        </div>
        <!-- ---------------- 【 > スライダー関係 】---------------- -->
        <div class="c-contents w95 mgb20 mgb20s">
            <!-- <h2 class="c-contents_title -portfolio s-LL -center mgb10 mgb10s">施工例</h2> -->
            <div class="swiper swiper-Build">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                        <a href="images/slider/example/build-pic01.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 1/5"><img src="images/slider/example/build-pic01.png" alt="施工事例_1/5"/></a>
                    </li>
                    <li class="swiper-slide">
                        <a href="images/slider/example/build-pic02.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 2/5"><img src="images/slider/example/build-pic02.png" alt="施工事例_2/5"/></a>
                    </li>
                    <li class="swiper-slide">
                        <a href="images/slider/example/build-pic03.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 3/5"><img src="images/slider/example/build-pic03.png" alt="施工事例_3/5"/></a>
                    </li>
                    <li class="swiper-slide">
                        <a href="images/slider/example/build-pic04.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 4/5"><img src="images/slider/example/build-pic04.png" alt="施工事例_4/5"/></a>
                    </li>
                    <li class="swiper-slide">
                        <a href="images/slider/example/build-pic05.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 5/5"><img src="images/slider/example/build-pic05.png" alt="施工事例_5/5"/></a>
                    </li>
                </ul>
                <div class="sp swiper-button-prev"></div>
                <div class="sp swiper-button-next"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <!------------------ 内観【SP・PC1カラム】 --------------------->
        <div class="c-contents w95 mgb10 mgb10s">
            <h2 class="c-contents_title -sample s-LL -center mgb10 mgb10s">コンテンツタイトル</h2>
            <div class="imgBox">
                <img class="mgb5 mgb5s" src="https://via.placeholder.com/1100x619/?text=ALL 1100x619(16:9)">
            </div>
        </div>
        <!-- ---------------- 内観【SP2カラム、PC2カラム】 ------------------- -->
        <div class="c-contents w95 mgb10 mgb10s">
            <article>
                <ul class="c-flex -h-c_pc -col2_2 -r mgb10 mgb10s">
                    <li class="">
                        <div class="">
                            <p class="c-contents_subTitle s-L -left mgb5 mgb5s a-fadeRight -sc40">コンテンツアイテム_タイトル</p>
                            <p class="s-M -lh-2 -lh-1_5_s -left a-fadeRight -sc40">
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                            </p>
                        </div>
                    </li>
                    <li class="a-flipLeft -sc40">
                        <div class="a-zoomImg">
                            <div class="imgBox"><img src="https://via.placeholder.com/480x320/?text=480x320"></div>
                            <p class="-right a-fade -sp4"><span class="s-kome -color03">※イメージ</span></p>
                        </div>
                    </li>
                </ul>
            </article>

            <article>
                <ul class="c-flex -h-c_pc -col2_2">
                    <li class="">
                        <div class="">
                            <p class="c-contents_subTitle s-L -left mgb5 mgb5s a-fadeLeft -sc40">コンテンツアイテム_タイトル</p>
                            <p class="tb-pc s-M -lh-2 -lh-1_5_s -left a-fadeLeft -sc40">
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                            </p>
                            <p class="sp s-M -lh-2 -lh-1_5_s -left a-fadeLeft -sc40">
                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
                            </p>
                        </div>
                    </li>
                    <li class="a-flipRight -sc40">
                        <div class="a-zoomImg">
                            <div class="imgBox"><img src="https://via.placeholder.com/480x320/?text=480x320"></div>
                            <p class="-right a-fade -sp4"><span class="s-kome -color03">※イメージ</span></p>
                        </div>
                    </li>
                </ul>
            </article>

        </div>
        <!-- ---------------- 【 > スライダー関係 】 ---------------- -->
        <div class="c-contents w95 mgb20 mgb20s">
            <h2 class="c-contents_title -portfolio s-LL -center mgb10 mgb10s">施工例</h2>
            <div class="swiper swiper-Build">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide"><a href="images/slider/example/build-pic01.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 1/5"><img src="images/slider/example/build-pic01.png" alt="施工事例 1/5"/></a></li>
                    <li class="swiper-slide"><a href="images/slider/example/build-pic02.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 2/5"><img src="images/slider/example/build-pic02.png" alt="施工事例 2/5"/></a></li>
                    <li class="swiper-slide"><a href="images/slider/example/build-pic03.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 3/5"><img src="images/slider/example/build-pic03.png" alt="施工事例 3/5"/></a></li>
                    <li class="swiper-slide"><a href="images/slider/example/build-pic04.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 4/5"><img src="images/slider/example/build-pic04.png" alt="施工事例 4/5"/></a></li>
                    <li class="swiper-slide"><a href="images/slider/example/build-pic05.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 5/5"><img src="images/slider/example/build-pic05.png" alt="施工事例 5/5"/></a></li>
                </ul>
                <div class="sp swiper-button-prev"></div>
                <div class="sp swiper-button-next"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
  </div>
</template>
