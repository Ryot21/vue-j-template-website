<!-- SwiperComponent.vue -->
<template>
    <swiper class="swiper-Fview"
        :modules="modules"
        :slides-per-view="1"
        :pagination="{dynamicBullets: true,}"
        :effect="'fade'"
        :speed="3000"
        :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
            waitForTransition: true
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <SwiperSlide>
            <div class="c-contents -f-slider -imgBg">
                <div class="imgBox zoom">
                    <!-- <img class="sp" src="https://via.placeholder.com/750x1320/?text=SP 750x1320">
                    <img class="tb" src="https://via.placeholder.com/1100x477/?text=TB 1100x477">
                    <img class="pc" src="https://via.placeholder.com/1920x480/?text=PC 1920x480"> -->
                    <img class="sp" src="/images/slider/f-view01_sp.jpg">
                    <img class="tb" src="/images/slider/f-view01_tb.jpg">
                    <img class="pc" src="/images/slider/f-view01_pc.jpg">
                </div>
                <div class="c-contentsBox -f-title">
                </div>
                <p class="tb-pc c-contentsBox -f-des -w s-SS">※完成予想図 掲載パースは図面を基に描き起こしたもので実際とは多少異なります。</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="c-contents -f-slider -imgBg">
                <div class="imgBox zoom">
                    <!-- <img class="sp" src="https://via.placeholder.com/750x1320/?text=SP 750x1320">
                    <img class="tb" src="https://via.placeholder.com/1100x477/?text=TB 1100x477">
                    <img class="pc" src="https://via.placeholder.com/1920x480/?text=PC 1920x480"> -->
                    <img class="sp" src="/images/slider/f-view02_sp.jpg">
                    <img class="tb" src="/images/slider/f-view02_tb.jpg">
                    <img class="pc" src="/images/slider/f-view02_pc.jpg">
                </div>
                <div class="c-contentsBox -f-title">
                </div>
                <p class="tb-pc c-contentsBox -f-des -w s-SS">※完成予想図 掲載パースは図面を基に描き起こしたもので実際とは多少異なります。</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="c-contents -f-slider -imgBg">
                <div class="imgBox zoom">
                    <!-- <img class="sp" src="https://via.placeholder.com/750x1320/?text=SP 750x1320">
                    <img class="tb" src="https://via.placeholder.com/1100x477/?text=TB 1100x477">
                    <img class="pc" src="https://via.placeholder.com/1920x480/?text=PC 1920x480"> -->
                    <img class="sp" src="/images/slider/f-view03_sp.jpg">
                    <img class="tb" src="/images/slider/f-view03_tb.jpg">
                    <img class="pc" src="/images/slider/f-view03_pc.jpg">
                </div>
                <div class="c-contentsBox -f-title">
                </div>
                <p class="tb-pc c-contentsBox -f-des -w s-SS">※完成予想図 掲載パースは図面を基に描き起こしたもので実際とは多少異なります。</p>
            </div>
        </SwiperSlide>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';// Import Swiper Vue.js components
    import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';// import Swiper core and required modules

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/autoplay';
    import 'swiper/css/effect-fade';
    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const onSwiper = (swiper) => { console.log(swiper); };
            const onSlideChange = () => { console.log('slide 変更'); };
            return {
                onSwiper,
                onSlideChange,
                modules: [Navigation, Pagination, A11y, EffectFade, Autoplay],
            };
        },
    };
</script>

<style scoped>
    .swiper-slide .imgBox img {transition: 3s all;}
    .swiper-slide-active .zoom img {transform: scale(1.05);}

    .swiper-pagination .swiper-pagination-bullet{
        box-shadow: 1px 1px 3px rgba(128, 128, 128, 0.692);
        transition: all 1s;
    }
    .swiper-pagination .swiper-pagination-bullet-active {
        width: 20px;
        border-radius: 5px;
    }
</style>
