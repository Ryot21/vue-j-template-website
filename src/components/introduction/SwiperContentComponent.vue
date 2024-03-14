<!-- SwiperContentComponent.vue -->
<template>
    <swiper class="swiper-Build"
        :modules="modules"
        :effect="'slide'"
        :loop="true"
        :slides-per-view="3"
        :centeredSlides="true"
        :pagination="{
            clickable: true,
        }"
        :mousewheel="{invert: false,}" 
        :speed="3000"
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <SwiperSlide>
            <a href="images/slider/example/build-pic01.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 1/5">
                <img src="images/slider/example/build-pic01.png" alt="施工事例 1/5"/>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="images/slider/example/build-pic02.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 2/5">
                <img src="images/slider/example/build-pic02.png" alt="施工事例 2/5"/>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="images/slider/example/build-pic03.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 3/5">
                <img src="images/slider/example/build-pic03.png" alt="施工事例 3/5"/>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="images/slider/example/build-pic04.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 4/5">
                <img src="images/slider/example/build-pic04.png" alt="施工事例 4/5"/>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="images/slider/example/build-pic05.png" class="luminous" data-lightbox="build-pic" data-title="施工事例 5/5">
                <img src="images/slider/example/build-pic05.png" alt="施工事例 5/5"/>
            </a>
        </SwiperSlide>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';// Import Swiper Vue.js components
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';// import Swiper core and required modules

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const onSwiper = (swiper) => { console.log(swiper); };
            const onSlideChange = () => { console.log('コンテンツslide 変更'); };
            return {
                onSwiper,
                onSlideChange,
                modules: [Navigation, Pagination, Autoplay],
            };
        },
    };
</script>

<style scoped>
    .swiper-Build{padding-bottom: 5%;}
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
