//クイズ出題
const quiz = [
    {
        question: '将棋はどうなったら勝ち？',
        answers: [
            '相手の駒を全部取ったら',
            '最終的に陣地が大きい方',
            '相手の王を詰ませたら',
            '駒を多く取った方'
        ],
        correct: '相手の王を詰ませたら'
    },
    {
        question: 'この中で将棋の格言ではないものは?',
        answers: [
            '風邪を引いても後手ひくな',
            '両取り逃げるべからず',
            '王手は追う手',
            '大駒は近くから打て'
        ],
        correct: '大駒は近くから打て'
    }, {

        question: '将棋の格言　○○は駒の損得より速度。○○に入るものは？',
        answers: [
            '序盤',
            '中盤',
            '終盤',
            '王'
        ],
        correct: '終盤'
    }, {

        question: 'この中で駒の価値が一番高いものは？',
        answers: [
            '桂馬',
            '金',
            '銀',
            '香車'
        ],
        correct: '金'
    }, {
        question: '将棋系youtuberからプロになった人の名前は?',
        answers: [
            '羽生善治',
            '折田翔吾',
            '藤井聡太',
            '加藤一二三'
        ],
        correct: '折田翔吾'
    }
];
//クイズの数
const quizLength = quiz.length;

let quizIndex = 0;
let score = 0;



//HTMLからbuttonを引用したのを変数に定義する
const $button = document.getElementsByTagName('button');

//ボタンの数を定数にした
const buttonLength = $button.length;
//クイズの問題文、選択肢

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    //HTMLの問題を引用し中身を入れた
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    // ボタンの数を初期値にする
    let buttonIndex = 0;
    //ボタンを四つ分繰り返す
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;

    }

}
setupQuiz();






// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];





//ボタンをクリックしたら正誤判定
const clickHandler = (e) => {

    if (quiz[quizIndex].correct === e.target.textContent) {
        alert('正解');
        score++;
    } else {
        alert('不正解');
    }
    quizIndex++;

    if (quizIndex < quizLength) {
        //問題数があればこちらを実行
        setupQuiz();
    } else {
        //問題数がもうなければこちらを実行
        window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です!')
    }

};
let handlerIndex = 0;

while (handlerIndex < buttonLength) {

    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);

    });
    handlerIndex++;
}

