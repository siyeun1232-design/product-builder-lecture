const questions = [
    {
        question: "합방 초반 분위기가 애매하다.",
        options: [
            { text: "“야 이거 재미없다” 하며 판 흔든다", type: "A" },
            { text: "일단 버티면서 흐름이 잡히길 기다린다", type: "B" },
            { text: "어색한 사람한테 먼저 말 건다", type: "C" },
            { text: "자연스럽게 다음 주제로 넘긴다", type: "D" }
        ]
    },
    {
        question: "채팅이 갑자기 불타기 시작했다.",
        options: [
            { text: "더 큰 드립으로 덮는다", type: "A" },
            { text: "내가 대신 맞는 쪽으로 유도한다", type: "B" },
            { text: "진정시키려 한다", type: "C" },
            { text: "상황을 정리해 설명한다", type: "D" }
        ]
    },
    {
        question: "팀원이 실수했다.",
        options: [
            { text: "바로 드립 소재로 쓴다", type: "A" },
            { text: "괜찮다며 대신 부담을 나눈다", type: "B" },
            { text: "상처받지 않았는지 먼저 본다", type: "C" },
            { text: "더 커지기 전에 흐름을 바꾼다", type: "D" }
        ]
    },
    {
        question: "내가 가장 듣기 싫은 말은?",
        options: [
            { text: "“요즘 존재감 없다”", type: "A" },
            { text: "“책임감이 없다”", type: "B" },
            { text: "“차갑다”", type: "C" },
            { text: "“생각이 없다”", type: "D" }
        ]
    },
    {
        question: "게임에서 계속 지고 있다.",
        options: [
            { text: "“내가 캐리함” 선언한다", type: "A" },
            { text: "분위기 무너지지 않게 버틴다", type: "B" },
            { text: "멘탈 나간 사람부터 챙긴다", type: "C" },
            { text: "전략을 다시 짠다", type: "D" }
        ]
    },
    {
        question: "갑자기 즉흥 상황극이 시작됐다.",
        options: [
            { text: "일단 크게 질러본다", type: "A" },
            { text: "망할까 봐 안정적으로 받쳐준다", type: "B" },
            { text: "상대 대사 잘 받아준다", type: "C" },
            { text: "세계관 설정부터 잡는다", type: "D" }
        ]
    },
    {
        question: "클립이 올라왔다.",
        options: [
            { text: "내 하이라이트 장면부터 본다", type: "A" },
            { text: "내가 민폐 아니었는지 본다", type: "B" },
            { text: "누가 상처받을 부분은 없는지 본다", type: "C" },
            { text: "편집 흐름이 잘 나왔는지 본다", "type": "D" }
        ]
    },
    {
        question: "팀에서 리더를 뽑아야 한다.",
        options: [
            { text: "내가 하겠다고 한다", type: "A" },
            { text: "시키면 맡는다", type: "B" },
            { text: "옆에서 보조하겠다고 한다", type: "C" },
            { text: "적임자를 추천한다", type: "D" }
        ]
    },
    {
        question: "합방에서 두 명이 과열됐다.",
        options: [
            { text: "더 키워서 재미로 만든다", type: "A" },
            { text: "대신 화살을 나에게 돌린다", type: "B" },
            { text: "중간에서 진정시킨다", type: "C" },
            { text: "주제를 전환한다", type: "D" }
        ]
    },
    {
        question: "내가 빠지면 방송은…",
        options: [
            { text: "심심해진다", type: "A" },
            { text: "불안해진다", type: "B" },
            { text: "차가워진다", type: "C" },
            { text: "산만해진다", type: "D" }
        ]
    },
    {
        question: "새로운 콘텐츠를 제안할 때 나는…",
        options: [
            { text: "자극적인 아이디어를 낸다", type: "A" },
            { text: "무리 없는 방향을 제시한다", type: "B" },
            { text: "모두가 편할지 생각한다", type: "C" },
            { text: "성공 가능성을 계산한다", type: "D" }
        ]
    },
    {
        question: "방송 중 침묵이 길어지면…",
        options: [
            { text: "아무 말이라도 던진다", type: "A" },
            { text: "억지로 깨지는 않는다", type: "B" },
            { text: "누가 긴장했는지 본다", type: "C" },
            { text: "정리 멘트로 이어간다", type: "D" }
        ]
    },
    {
        question: "팀원이 비판을 받았다.",
        options: [
            { text: "대신 반박한다", type: "A" },
            { text: "내가 책임지겠다고 한다", type: "B" },
            { text: "괜찮은지 먼저 묻는다", type: "C" },
            { text: "사실 관계를 정리한다", type: "D" }
        ]
    },
    {
        question: "내가 제일 중요하게 생각하는 건?",
        options: [
            { text: "임팩트", type: "A" },
            { text: "안정감", type: "B" },
            { text: "관계", type: "C" },
            { text: "흐름", type: "D" }
        ]
    },
    {
        question: "회의할 때 나는…",
        options: [
            { text: "아이디어를 밀어붙인다", type: "A" },
            { text: "현실성 체크한다", type: "B" },
            { text: "분위기를 살핀다", type: "C" },
            { text: "결론을 정리한다", type: "D" }
        ]
    },
    {
        question: "팀에 갈등이 생겼다.",
        options: [
            { text: "피하지 않고 맞선다", type: "A" },
            { text: "감정적으로 흔들리지 않으려 한다", type: "B" },
            { text: "서로 오해 풀게 돕는다", type: "C" },
            { text: "쟁점을 구조화한다", type: "D" }
        ]
    },
    {
        question: "제작진이 급하게 변경사항을 전달했다.",
        options: [
            { text: "그냥 밀고 간다", type: "A" },
            { text: "당황하지 않고 유지한다", type: "B" },
            { text: "멤버들 상태를 본다", type: "C" },
            { text: "전체 일정 다시 정리한다", type: "D" }
        ]
    },
    {
        question: "나는 보통…",
        options: [
            { text: "직설적이다", type: "A" },
            { text: "묵직하다", type: "B" },
            { text: "다정하다", type: "C" },
            { text: "계산적이다", type: "D" }
        ]
    },
    {
        question: "방송이 터졌을 때 나는…",
        options: [
            { text: "더 키운다", type: "A" },
            { text: "무너지지 않게 잡는다", type: "B" },
            { text: "과열을 낮춘다", type: "C" },
            { text: "다음 단계로 넘긴다", type: "D" }
        ]
    },
    {
        question: "내가 인정받고 싶은 건?",
        options: [
            { text: "하드캐리", type: "A" },
            { text: "책임감", type: "B" },
            { text: "따뜻함", type: "C" },
            { text: "진행 능력", type: "D" }
        ]
    },
    {
        question: "팀원이 소외돼 보인다.",
        options: [
            { text: "드립으로 끌어들인다", type: "A" },
            { text: "자연스럽게 자리를 만든다", type: "B" },
            { text: "먼저 말 걸어준다", type: "C" },
            { text: "판 구조를 바꾼다", type: "D" }
        ]
    },
    {
        question: "위기 상황에서 나는…",
        options: [
            { text: "강하게 나간다", type: "A" },
            { text: "버틴다", type: "B" },
            { text: "진정시킨다", type: "C" },
            { text: "재정비한다", type: "D" }
        ]
    },
    {
        question: "채팅이 나를 오해했다.",
        options: [
            { text: "바로 반응한다", type: "A" },
            { text: "참고 넘어간다", type: "B" },
            { text: "상처받았는지 돌아본다", type: "C" },
            { text: "차분히 해명한다", type: "D" }
        ]
    },
    {
        question: "나는 성공하면…",
        options: [
            { text: "짜릿하다", type: "A" },
            { text: "안도감이 든다", type: "B" },
            { text: "다 같이 기뻐서 좋다", "type": "C" },
            { text: "계획이 맞았다는 생각이 든다", type: "D" }
        ]
    },
    {
        question: "나는 협업에서…",
        options: [
            { text: "앞에서 밀어붙인다", type: "A" },
            { text: "중심을 지킨다", type: "B" },
            { text: "연결한다", type: "C" },
            { text: "설계한다", type: "D" }
        ]
    },
    {
        question: "팀이 무너질 것 같을 때…",
        options: [
            { text: "강하게 흔든다", type: "A" },
            { text: "끝까지 버틴다", type: "B" },
            { text: "마음부터 잡는다", type: "C" },
            { text: "구조를 손본다", type: "D" }
        ]
    },
    {
        question: "가장 두려운 상황은?",
        options: [
            { text: "존재감 사라짐", type: "A" },
            { text: "신뢰 잃음", type: "B" },
            { text: "관계 틀어짐", type: "C" },
            { text: "방향 잃음", type: "D" }
        ]
    },
    {
        question: "나는 갈등을…",
        options: [
            { text: "정면 돌파한다", type: "A" },
            { text: "감정 억제하며 버틴다", type: "B" },
            { text: "대화로 푼다", type: "C" },
            { text: "분석으로 푼다", type: "D" }
        ]
    },
    {
        question: "나의 무기는?",
        options: [
            { text: "텐션", type: "A" },
            { text: "멘탈", type: "B" },
            { text: "공감", type: "C" },
            { text: "전략", type: "D" }
        ]
    },
    {
        question: "합방이 길어질수록 나는…",
        options: [
            { text: "더 올라간다", type: "A" },
            { text: "안정적으로 간다", type: "B" },
            { text: "사람들 상태를 본다", type: "C" },
            { text: "흐름을 정리한다", type: "D" }
        ]
    },
    {
        question: "내가 리더라면…",
        options: [
            { text: "결과를 만든다", type: "A" },
            { text: "책임진다", type: "B" },
            { text: "사람을 챙긴다", type: "C" },
            { text: "방향을 제시한다", type: "D" }
        ]
    },
    {
        question: "드립이 선을 넘은 것 같다.",
        options: [
            { text: "더 밀어본다", type: "A" },
            { text: "내가 대신 맞는다", type: "B" },
            { text: "멈추게 한다", type: "C" },
            { text: "다른 주제로 전환한다", type: "D" }
        ]
    },
    {
        question: "나는 결정할 때…",
        options: [
            { text: "과감하다", type: "A" },
            { text: "신중하다", type: "B" },
            { text: "배려한다", type: "C" },
            { text: "계산한다", type: "D" }
        ]
    },
    {
        question: "방송 끝나고 드는 생각은?",
        options: [
            { text: "오늘 터졌다", type: "A" },
            { text: "큰 사고 없었다", type: "B" },
            { text: "다들 괜찮았을까", type: "C" },
            { text: "흐름은 좋았다", type: "D" }
        ]
    },
    {
        question: "나를 한 단어로 표현하면?",
        options: [
            { text: "폭발", type: "A" },
            { text: "방패", type: "B" },
            { text: "온기", type: "C" },
            { text: "설계", type: "D" }
        ]
    },
    {
        question: "내가 팀에서 맡는 역할은?",
        options: [
            { text: "불 붙이는 사람", type: "A" },
            { text: "버티는 사람", type: "B" },
            { text: "이어주는 사람", type: "C" },
            { text: "굴러가게 하는 사람", type: "D" }
        ]
    },
    {
        question: "팀원이 흔들릴 때 나는…",
        options: [
            { text: "자극한다", type: "A" },
            { text: "지켜준다", type: "B" },
            { text: "위로한다", type: "C" },
            { text: "정리한다", type: "D" }
        ]
    },
    {
        question: "가장 싫은 평가는?",
        options: [
            { text: "재미없다", type: "A" },
            { text: "무책임하다", type: "B" },
            { text: "차갑다", type: "C" },
            { text: "감 없다", type: "D" }
        ]
    },
    {
        question: "나는 흐름이 끊기면…",
        options: [
            { text: "깨버린다", type: "A" },
            { text: "유지한다", type: "B" },
            { text: "완화한다", type: "C" },
            { text: "다시 설계한다", type: "D" }
        ]
    },
    {
        question: "진짜 내 본모습은…",
        options: [
            { text: "공격수", type: "A" },
            { text: "수호자", type: "B" },
            { text: "공감자", type: "C" },
            { text: "전략가", type: "D" }
        ]
    }
];

const roleTypes = {
    "A": {
        name: "불도저 하이퍼 딜러",
        summary: "“분위기? 내가 집도한다. 다 비켜!”",
        description: "당신은 팀의 압도적인 화력 담당입니다. 정적과 지루함을 참지 못하는 본능적인 분위기 메이커죠. 당신이 입을 여는 순간 판이 흔들리고, 텐션이 폭발합니다. <br><br>가끔은 선을 넘을 듯 아슬아슬하지만, 그 짜릿함이 당신의 매력! 팀원들이 지쳐갈 때 마지막 엔진을 돌리는 건 결국 당신의 미친 텐션입니다.",
        quotes: ["“야, 이거 방송각이다!”", "“노잼은 죄악이야.”", "“내가 일단 질러볼게, 너희가 수습해!”"],
        weakness: ["가끔 혼자 너무 멀리 가버림", "정적을 견디지 못해 무리수 던짐"],
        best: "철벽 가디언 탱커",
        worst: "냉철한 설계자 서포트"
    },
    "B": {
        name: "철벽 가디언 탱커",
        summary: "“흔들리지 마라, 내가 버티고 있다.”",
        description: "당신은 팀의 거대한 방패이자 정신적 지주입니다. 폭주하는 딜러의 무리수를 묵묵히 받아내고, 팀원이 실수했을 때 가장 먼저 화살을 대신 맞는 든든한 사람입니다.<br><br>화려하진 않아도 당신이 없는 팀은 모래성처럼 쉽게 무너집니다. 당신의 침묵은 무관심이 아니라, 모두를 지켜보는 가장 깊은 배려입니다.",
        quotes: ["“괜찮아, 내가 수습할게.”", "“걱정 마, 나만 믿어.”", "“다들 진정하고 나 봐봐.”"],
        weakness: ["혼자 모든 짐을 짊어지려 함", "속마음을 얘기 안 해서 가끔 서운함"],
        best: "불도저 하이퍼 딜러",
        worst: "감성 케어 힐러"
    },
    "C": {
        name: "감성 케어 힐러",
        summary: "“너의 마음이 내 마음이야.”",
        description: "당신은 팀의 온도 조절기이자 따뜻한 공기 그 자체입니다. 누군가의 표정 변화 하나 놓치지 않고, 상처받은 마음을 어루만지는 능력이 탁월합니다.<br><br>당신과 함께라면 아무리 힘든 합방도 힐링이 됩니다. 하지만 남을 챙기느라 정작 당신의 멘탈은 방치하고 있지는 않나요? 당신이 행복해야 팀도 행복합니다.",
        quotes: ["“너 오늘 기분 안 좋아 보여, 무슨 일 있어?”", "“다들 너무 잘하고 있어!”", "“우리 싸우지 말고 좋게 좋게 가자~”"],
        weakness: ["거절을 못 해서 손해 봄", "주변 분위기에 감정이 쉽게 동화됨"],
        best: "냉철한 설계자 서포트",
        worst: "철벽 가디언 탱커"
    },
    "D": {
        name: "냉철한 설계자 서포트",
        summary: "“이미 내 계산대로 흐르고 있어.”",
        description: "당신은 보이지 않는 곳에서 판을 짜는 천재 전략가입니다. 겉으로는 조용해 보여도, 사실은 방송의 전체 흐름과 효율을 완벽하게 계산하고 있죠.<br><br>막힌 흐름을 뚫어주는 결정적인 어시스트, 과열된 분위기를 정리하는 브리핑. 당신은 팀이 승리(성공)하기 위해 반드시 필요한 '뇌'와 같은 존재입니다.",
        quotes: ["“지금은 이 주제로 넘어가는 게 좋아.”", "“방금 그건 이런 뜻이었지?”", "“다음엔 이렇게 해보는 건 어때?”"],
        weakness: ["가끔 너무 계산적이라는 오해를 삼", "감정적인 상황에서 공감이 어려움"],
        best: "감성 케어 힐러",
        worst: "불도저 하이퍼 딜러"
    }
};

let currentQuestionIndex = 0;
const userAnswers = [];

const startScreen = document.getElementById('start-screen');
const testContainer = document.getElementById('test-container');
const resultContainer = document.getElementById('result-container');
const startBtn = document.getElementById('start-btn');
const questionsContainer = document.getElementById('questions-container');
const progressBar = document.getElementById('progress-bar');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

if (startBtn) {
    startBtn.addEventListener('click', () => {
        document.body.classList.remove('result-screen');
        startScreen.classList.add('hidden');
        testContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');

        shuffleArray(questions);
        questions.forEach(q => shuffleArray(q.options));
        
        currentQuestionIndex = 0;
        userAnswers.length = 0;
        progressBar.style.width = '0%';

        displayQuestion();
    });
} else {
    console.error("Start button not found!");
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionsContainer.innerHTML = `
            <div class="retro-card question-card animate-in">
                <p class="question-text">${question.question}</p>
                <div class="options">
                    ${question.options.map(option => `
                        <button class="option-btn" data-type="${option.type}">${option.text}</button>
                    `).join('')}
                </div>
            </div>
        `;
        updateProgressBar();
        attachOptionListeners();
    } else {
        showResult();
    }
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function attachOptionListeners() {
    const optionButtons = questionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            userAnswers.push(e.target.dataset.type);
            currentQuestionIndex++;
            const questionCard = questionsContainer.querySelector('.question-card');
            questionCard.classList.add('animate-out');
            setTimeout(() => {
                displayQuestion();
            }, 500);
        });
    });
}

function showResult() {
    testContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    document.body.classList.add('result-screen');

    const scores = { A: 0, B: 0, C: 0, D: 0 };
    userAnswers.forEach(answer => {
        scores[answer]++;
    });

    let maxScore = 0;
    let resultType = '';
    for (const type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            resultType = type;
        }
    }

    const finalRole = roleTypes[resultType];

    resultContainer.innerHTML = `
        <div class="retro-card animate-in">
            <p class="result-sub-text">테스트 결과</p>
            <h2>당신은 <br> ✨${finalRole.name}✨</h2>

            <div class="result-section">
                <h3>🏆 한 줄 요약</h3>
                <span class="summary-text">${finalRole.summary}</span>
            </div>

            <div class="result-section">
                <h3>📖 포지션 분석</h3>
                <p class="description-text">${finalRole.description}</p>
            </div>

            <div class="result-section">
                <h3>💬 이런 말 자주 듣는다</h3>
                <ul>
                    ${finalRole.quotes.map(quote => `<li>${quote}</li>`).join('')}
                </ul>
            </div>

            <div class="result-section chemi-section">
                <h3>🤝 케미 분석</h3>
                <div class="chemi-grid">
                    <div class="chemi-item">
                        <p class="chemi-label">환상의 짝꿍</p>
                        <p class="chemi-value best">${finalRole.best}</p>
                    </div>
                    <div class="chemi-item">
                        <p class="chemi-label">파멸의 짝꿍</p>
                        <p class="chemi-value worst">${finalRole.worst}</p>
                    </div>
                </div>
            </div>

            <div class="result-section">
                <h3>⚠️ 주의할 점</h3>
                <ul>
                    ${finalRole.weakness.map(w => `<li>${w}</li>`).join('')}
                </ul>
            </div>

            <button id="restart-btn">다시 테스트하기</button>
        </div>
    `;

    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            document.body.classList.remove('result-screen');
            resultContainer.classList.add('hidden');
            resultContainer.innerHTML = '';
            startScreen.classList.remove('hidden');
        });
    }
}
