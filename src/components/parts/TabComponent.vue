<!-- TabComponent.vue -->
<script>
	export default{
		name: 'TabComponent',
		// ロジックやデータを記述
	}
</script>

<template>
	<!-- タブ + 画像モーダル -->
	<div class="c-contents-inner">
            <div class="c-tabArea -col4" style="position: relative;">
                <input id="no1" type="radio" name="t-01" checked>
                <label class="tab-item s-L -center pdt1 pdt1s pdb1 pdb1s mgb5" for="no1">No.1</label>
                <input id="no2" type="radio" name="t-01" >
                <label class="tab-item s-L -center pdt1 pdt1s pdb1 pdb1s mgb5" for="no2">No.2</label>
                <input id="no3" type="radio" name="t-01">
                <label class="tab-item s-L -center pdt1 pdt1s pdb1 pdb1s mgb5" for="no3">No.3</label>
                <input id="no4" type="radio" name="t-01">
                <label class="tab-item s-L -center pdt1 pdt1s pdb1 pdb1s mgb5 mgb5s" for="no4">No.4</label>

                <!-- 1号棟 -->
                <div class="tab-content" id="no1-content">
                    <ul class="c-flex -col2_3">
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 1/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 1/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 2/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 2/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 3/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 3/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 4/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 4/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 5/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 5/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 6/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 6/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 7/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 7/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 8/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 8/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 9/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 9/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 10/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 10/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 11/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 11/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 12/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 12/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                    </ul>
                </div>
                <!-- 2号棟 -->
                <div class="tab-content" id="no2-content">
                    <ul class="c-flex -col2_3">
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 1/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 1/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 2/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 2/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 3/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 3/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 4/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 4/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 5/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 5/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 6/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 6/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 7/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 7/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 8/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 8/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 9/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 9/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 10/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 10/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 11/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 11/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 12/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 12/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                    </ul>
                </div>
                <!-- 3号棟 -->
                <div class="tab-content" id="no3-content">
                    <ul class="c-flex -col2_3">
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 1/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 1/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 2/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 2/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 3/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 3/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 4/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 4/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 5/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 5/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 6/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 6/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 7/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 7/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 8/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 8/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 9/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 9/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 10/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 10/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 11/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 11/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 12/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 12/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                    </ul>
                </div>
                <!-- 4号棟 -->
                <div class="tab-content" id="no4-content">
                    <ul class="c-flex -col2_3">
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 1/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 1/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 2/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 2/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 3/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 3/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 4/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 4/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 5/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 5/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 6/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 6/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 7/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 7/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 8/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 8/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 9/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 9/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 10/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 10/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 11/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 11/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                        <li class="mgb3 mgb3s">
                            <div class="a-zoomImg">
                                <div class="imgBox">
                                    <a href="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)" class="luminous" data-lightbox="build-pic" data-title="画像名 12/12"><img src="https://via.placeholder.com/480x320/?text=ALL 480x320(4:3)"  alt="画像名 12/12"/></a>
                                </div>
                            </div>
                            <p class="s-M -left">画像名</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>