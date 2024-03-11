<script>
	export default{name: 'FirstViewComponent02'}
</script>



<template>
    <!-- ファーストビュー -->
    <div class="c-contents -f-view w1100 w95s mgb3 mgb5s">
        <div class="imgBox a-fviewOutImg">
            <img class="sp"    src="images/f-view/f-sample_sp.png" alt="">
            <img class="tb-pc" src="images/f-view/f-sample02_tbpc.png" alt="">
        </div>
        <!-- ページタイトル -->
        <h1 class="sp c-contentsBox -f-title -f-title_r -layout -ws-n s-LL -f-mincho a-fade -sp3">{{ $route.meta.contentMainTitle }}</h1>
        <!-- 注釈 -->
        <p class="-right a-fade -sp4"><span class="s-kome -color03">※イメージ</span></p>
    </div>
</template>