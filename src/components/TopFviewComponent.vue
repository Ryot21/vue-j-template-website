<script>
	export default{
		name: 'TopFivew'
	}
</script>

<template>
<!-- ファーストビュー -->
					<div class="c-contents -imgBg">
            <div class="imgBox">
                <div class="swiper swiper-Fview">
                    <div class="swiper-wrapper">
												<!-- TOP > Slider01 -->
                        <div class="swiper-slide">
                            <div class="c-contents -f-slider -imgBg">
                                <div class="imgBox">
                                    <img class="sp" src="https://via.placeholder.com/750x1320/?text=SP 750x1320">
                                    <img class="tb" src="https://via.placeholder.com/1100x477/?text=TB 1100x477">
                                    <img class="pc" src="https://via.placeholder.com/1920x480/?text=PC 1920x480">
                                </div>
                            </div>
                        </div>
												<!-- TOP > Slider02 -->
                        <div class="swiper-slide">
                            <div class="c-contents -f-slider -imgBg"><!-- -->
                                <div class="imgBox zoom">
                                    <img class="sp" src="https://via.placeholder.com/750x1320/?text=SP 750x1320">
                                    <img class="tb" src="https://via.placeholder.com/1100x477/?text=TB 1100x477">
                                    <img class="pc" src="https://via.placeholder.com/1920x480/?text=PC 1920x480">
                                </div>
                                <p class="sp c-contentsBox -f-des s-SS">※完成予想図</p>
                                <p class="tb-pc c-contentsBox -f-des -w s-SS">※完成予想図 掲載パースは図面を基に描き起こしたもので実際とは多少異なります。</p>
                            </div>
                        </div>
												<!-- TOP > Slider03 -->
                        <div class="sp swiper-slide">
                            <div class="c-contents -f-slider -imgBg">
                                <div class="imgBox zoom">
                                    <img class="sp" src="https://via.placeholder.com/750x1320/?text=SP 750x1320">
                                </div>
                                <p class="sp c-contentsBox -f-des s-SS">※完成予想図</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination -type01"></div>
                </div>
            </div>
            <div class="sp c-contentsBox -f-logo_s">
                <div class="c-contents -imgBg">
                    <!-- SPサイズ：w300px × h108px -->
                    <div class="imgBox">
                        <img src="https://via.placeholder.com/300x108/?text=SP 300x108">
                    </div>
                    <div class="c-contentsBox -logo-item01 a-moveUp"><img src="images/logo/site-logo-bird01.png" alt="動かす画像1"></div>
                    <div class="c-contentsBox -logo-item02 a-moveDown"><img src="images/logo/site-logo-bird02.png" alt="動かす画像2"></div>
                </div>
            </div>
        </div>
</template>