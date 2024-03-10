<script>
	export default{name: 'TopFview'}
</script>



<template>
<!-- ファーストビュー -->
        <div class="c-contents -imgBg">
            <div class="imgBox">
                <SwiperComponent />
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