const questions = [
    {
        question: "다른 사람들에게 자신을 소개하는 것이 쉽다고 생각하십니까?",
        options: [
            { text: "동의", type: "E" },
            { text: "비동의", type: "I" }
        ]
    },
    {
        question: "종종 생각에 너무 깊이 빠져 주변을 무시하거나 잊어버리곤 합니까?",
        options: [
            { text: "동의", type: "N" },
            { text: "비동의", type: "S" }
        ]
    },
    {
        question: "이메일에 가능한 한 빨리 회신하려고 노력하고 지저분한 편지함을 참을 수 없습니까?",
        options: [
            { text: "동의", type: "J" },
            { text: "비동의", type: "P" }
        ]
    },
    {
        question: "흥미로운 사람에게 다가가 대화를 시작하는 것이 편안하게 느껴집니까?",
        options: [
            { text: "동의", type: "E" },
            { text: "비동의", type: "I" }
        ]
    },
    {
        question: "구현의 세부 사항보다 일반적인 아이디어에 더 관심이 있습니까?",
        options: [
            { text: "동의", type: "N" },
            { text: "비동의", type: "S" }
        ]
    },
    {
        question: "당신은 세부 사항에 더 중점을 두는 사람입니까?",
        options: [
            { text: "동의", type: "S" },
            { text: "비동의", type: "N" }
        ]
    },
    {
        question: "마음보다 머리를 따르는 경향이 있습니까?",
        options: [
            { text: "동의", type: "T" },
            { text: "비동의", type: "F" }
        ]
    },
    {
        question: "휴식을 취하기 전에 집안일을 먼저 하는 것을 선호하십니까?",
        options: [
            { text: "동의", type: "J" },
            { text: "비동의", type: "P" }
        ]
    },
    {
        question: "결정을 내릴 때 객관적인 사실보다 다른 사람들에게 미칠 영향에 더 집중하십니까?",
        options: [
            { text: "동의", type: "F" },
            { text: "비동의", type: "T" }
        ]
    },
    {
        question: "단체 활동에 참여하는 것을 즐기십니까?",
        options: [
            { text: "동의", type: "E" },
            { text: "비동의", type: "I" }
        ]
    },
    {
        question: "비현실적이고 비실용적이지만 흥미로운 아이디어를 탐구하는 데 시간을 보내는 것을 즐기십니까?",
        options: [
            { text: "동의", type: "N" },
            { text: "비동의", type: "S" }
        ]
    },
    {
        question: "잘 짜여진 계획보다 유연한 일정을 선호하십니까?",
        options: [
            { text: "동의", type: "P" },
            { text: "비동의", type: "J" }
        ]
    }
];

const personalityTypes = {
    "ISTJ 딜러": "검사관 - 실용적이고 사실에 입각한 개인으로, 신뢰성을 의심할 수 없습니다.",
    "ISFJ 탱커": "수호자 - 매우 헌신적이고 따뜻한 수호자이며, 항상 사랑하는 사람을 방어할 준비가 되어 있습니다.",
    "INFJ 서포터": "옹호자 - 조용하고 신비로우면서도 매우 영감을 주고 지칠 줄 모르는 이상주의자입니다.",
    "INTJ 힐러": "건축가 - 대담하고 상상력이 풍부하며 의지가 강한 지도자로, 항상 길을 찾거나 만듭니다.",
    "ISTP ": "장인 - 대담하고 실용적인 실험가이며 모든 종류의 도구의 대가입니다.",
    "ISFP": "예술가 - 유연하고 매력적인 예술가이며, 항상 새로운 것을 탐험하고 경험할 준비가 되어 있습니다.",
    "INFP": "중재자 - 시적이고 친절하며 이타적인 사람들로, 항상 좋은 명분을 도울 준비가 되어 있습니다.",
    "INTP": "사상가 - 지식에 대한 만족할 줄 모르는 갈증을 가진 혁신적인 발명가입니다.",
    "ESTP": "설득자 - 똑똑하고 활기차며 매우 통찰력 있는 사람들로, 진정으로 벼랑 끝에서 삶을 즐깁니다.",
    "ESFP": "엔터테이너 - 즉흥적이고 활기차고 열정적인 사람들 - 주변의 삶은 결코 지루하지 않습니다.",
    "ENFP": "챔피언 - 열정적이고 창의적이며 사교적인 자유로운 영혼으로, 항상 미소 지을 이유를 찾을 수 있습니다.",
    "ENTP": "토론가 - 지적 도전을 거부할 수 없는 똑똑하고 호기심 많은 사상가입니다.",
    "ESTJ": "감독 - 뛰어난 관리자이며 사물이나 사람을 관리하는 데 있어 타의 추종을 불허합니다.",
    "ESFJ": "간병인 - 매우 배려심 많고 사교적이며 인기 있는 사람들로, 항상 도울 준비가 되어 있습니다.",
    "ENFJ": "주인공 - 카리스마 있고 영감을 주는 지도자로, 청중을 매료시킬 수 있습니다.",
    "ENTJ": "사령관 - 대담하고 상상력이 풍부하며 의지가 강한 지도자로, 항상 길을 찾거나 만듭니다."
};

let currentQuestionIndex = 0;
const userAnswers = [];

const startScreen = document.getElementById('start-screen');
const testContainer = document.getElementById('test-container');
const startBtn = document.getElementById('start-btn');
const questionsContainer = document.getElementById('questions-container');
const progressBar = document.getElementById('progress-bar');

startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    testContainer.classList.remove('hidden');
    displayQuestion();
});

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionsContainer.innerHTML = `
            <div class="question-card animate-in">
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
            // Wait for animation to finish before displaying next question
            setTimeout(() => {
                displayQuestion();
            }, 500);
        });
    });
}

function showResult() {
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    userAnswers.forEach(answer => {
        scores[answer]++;
    });

    let personalityType = '';
    personalityType += scores.E > scores.I ? 'E' : 'I';
    personalityType += scores.S > scores.N ? 'S' : 'N';
    personalityType += scores.T > scores.F ? 'T' : 'F';
    personalityType += scores.J > scores.P ? 'J' : 'P';

    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        <div class="result-card animate-in">
            <h2>당신의 성격 유형은: ${personalityType}</h2>
            <p>${personalityTypes[personalityType]}</p>
            <button id="restart-btn">다시 테스트</button>
        </div>
    `;
    document.getElementById('progress-bar-container').style.display = 'none';
    document.getElementById('restart-btn').addEventListener('click', () => {
        currentQuestionIndex = 0;
        userAnswers.length = 0;
        resultContainer.innerHTML = '';
        document.getElementById('progress-bar-container').style.display = 'block';
        displayQuestion();
    });
}
