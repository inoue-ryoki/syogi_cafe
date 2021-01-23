

// 下線を引くアニメーション
$(function () {
    // 文字の幅を取得
    winW = $(".under").width();
    // 動く時間を指定
    spped = 2000;
    // 下線のidをアニメーションする
    $('#underline').animate({
        // 幅と速さを入れた変数を入れる
        width: winW
    }, spped);
});