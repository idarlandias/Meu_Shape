const workoutData = [
    {
        id: 'monday', num: 1, name: 'Segunda', focus: 'Inferior - Quadríceps', title: 'Treino A',
        exercises: [
            { id: 'a-1', category: 'Ativação & Aquecimento', title: 'Cócoras c/ Peso + Agachamento Avanço', sets: '2 séries', reps: '10 + 10 repetições' },
            { id: 'a-2', category: 'Ativação & Aquecimento', title: 'Cadeira Extensora (Aquec.)', sets: '1 série', reps: '8 a 10 reps (Carga leve)' },
            { id: 'a-3', category: 'Treino Principal', title: 'Cadeira Extensora', sets: '5 séries', reps: 'Diversas c/ isometria + cluster (Ver PDF)' },
            { id: 'a-4', category: 'Treino Principal', title: 'Agachamento Livre + 1/2 Agachamento', sets: '4 séries', reps: '10-15 reps descendo devagar + 20 reps' },
            { id: 'a-5', category: 'Treino Principal', title: 'Leg Press 45 Unilateral', sets: '3 séries', reps: '10 reps c/ isometria + 10 diretas + 15 parciais' },
            { id: 'a-6', category: 'Treino Principal', title: 'Goblet Squat + Nórdica Reversa', sets: '4 séries', reps: '10 a 12 reps + 12 a 20 reps (Cluster na últ.)' },
            { id: 'a-7', category: 'Treino Principal', title: 'Avanço Frontal Step + Salto', sets: '3 séries', reps: '10/10 cada perna + 12-20 saltos' },
            { id: 'a-8', category: 'Treino Principal', title: 'Panturrilha no Smith', sets: '4 séries', reps: 'Variações c/ pico de contração + Dropset' }
        ]
    },
    {
        id: 'tuesday', num: 2, name: 'Terça', focus: 'Ombro, Peito, Tríceps + Abs', title: 'Treino B1',
        exercises: [
            { id: 'b1-1', category: 'Ativação & Aquecimento', title: 'Mobilidade Ombro + Shoulder Complex', sets: '2 séries', reps: '10/10 + 8/8/8' },
            { id: 'b1-2', category: 'Ativação & Aquecimento', title: 'Desenvolvimento c/ Halteres (Aquec.)', sets: '1 série', reps: '8 a 10 reps (Carga leve)' },
            { id: 'b1-3', category: 'Treino Principal', title: 'Desenvolvimento Aberto Sentada', sets: '5 séries', reps: 'Drop progressivo + Parciais' },
            { id: 'b1-4', category: 'Treino Principal', title: 'Elevação Lateral + Remada Alta', sets: '4 séries', reps: 'Isometrias variáveis + 12 a 15 reps' },
            { id: 'b1-5', category: 'Treino Principal', title: 'Elevação Lateral Inclinado Unilat.', sets: '4 séries', reps: '10 a 12 reps descendo lento + Cluster' },
            { id: 'b1-6', category: 'Treino Principal', title: 'Elev. Frontal Inclinado + Reto', sets: '3 séries', reps: '10 a 15 reps totais' },
            { id: 'b1-7', category: 'Treino Principal', title: 'Crucifixo Inverso', sets: '4 séries', reps: '12 a 15 reps c/ pausa + Rest pause' },
            { id: 'b1-8', category: 'Treino Principal', title: 'Crucifixo c/ Halteres + Tríceps Testa', sets: '3 séries', reps: '10 a 12 reps + Cluster 4-4-4-4' },
            { id: 'b1-9', category: 'Trabalho de Core', title: 'Circuito de Abdômen (Prancha + Flexão + Canivete)', sets: '3 séries', reps: '20 totais + 10/10 + 10/10' }
        ]
    },
    {
        id: 'wednesday', num: 3, name: 'Quarta', focus: 'Inferior - Glúteo', title: 'Treino C.1',
        exercises: [
            { id: 'c1-1', category: 'Ativação & Aquecimento', title: 'Ponte de Glúteo + Abdução + Diagonal', sets: '3 exercícios', reps: 'Altas reps focadas em contração' },
            { id: 'c1-2', category: 'Ativação & Aquecimento', title: 'Extensão Quad Diag. no Cross (Aquec.)', sets: '1 série', reps: '8 a 10 reps (Carga leve)' },
            { id: 'c1-3', category: 'Treino Principal', title: 'Extensão Diagonal + Coice Cross', sets: '4 séries', reps: '12 a 15 reps + 8 a 10 pesadas + Cluster' },
            { id: 'c1-4', category: 'Treino Principal', title: 'Elevação Pélvica', sets: '3 séries', reps: '12 isometria + diretas + Rest pause / Drops' },
            { id: 'c1-5', category: 'Treino Principal', title: 'Agachamento Sumô Smith', sets: '4 séries', reps: '10 a 12 descendo lento + falha no final' },
            { id: 'c1-6', category: 'Treino Principal', title: 'Leg Press 45 Unilat. Alto + Retrocesso', sets: '3 séries', reps: '12 a 15 inércia + 8 a 10 pesadas + falha' },
            { id: 'c1-7', category: 'Treino Principal', title: 'Abdução de Quadril Cross', sets: '4 séries', reps: '6 a 15 reps progredindo' }
        ]
    },
    {
        id: 'thursday', num: 4, name: 'Quinta', focus: 'Costas, Bíceps + Abs', title: 'Treino B2',
        exercises: [
            { id: 'b2-1', category: 'Ativação & Aquecimento', title: 'Mobilidade Ombro + Pulldown Leve', sets: '1 série', reps: '10/10 + 8-10 reps' },
            { id: 'b2-2', category: 'Treino Principal', title: 'Pulldown no Cross + Facepull', sets: '3 séries', reps: '10 a 15 reps c/ pausa de 2 seg' },
            { id: 'b2-3', category: 'Treino Principal', title: 'Puxada Aberta Pulley', sets: '4 séries', reps: 'Drop progressivo + 1 seg isometria' },
            { id: 'b2-4', category: 'Treino Principal', title: 'Remada Cavalinho + Supinada Halter', sets: '4 séries', reps: '12-8 reps pesadas + Dropset na últ.' },
            { id: 'b2-5', category: 'Treino Principal', title: 'Puxada Corda Sentada', sets: '4 séries', reps: '12 a 8 reps + Cluster 16 reps' },
            { id: 'b2-6', category: 'Treino Principal', title: 'Crucifixo Inverso Polia Alta', sets: '4 séries', reps: '15 a 10 reps c/ 2 seg atrás + Rest pause' },
            { id: 'b2-7', category: 'Treino Principal', title: 'Bíceps Corda Cross', sets: '4 séries', reps: '12 a 15 reps + Drops / Rest pause' },
            { id: 'b2-8', category: 'Treino Principal', title: 'Bíceps Supinada Uni x Bi', sets: '3 séries', reps: 'Escada até 10, 8, 6 + Falha' },
            { id: 'b2-9', category: 'Trabalho de Core', title: 'Circuito de Abdômen (Prancha + Flexão + Canivete)', sets: '3 séries', reps: '20 totais + 10/10 + 10/10' }
        ]
    },
    {
        id: 'friday', num: 5, name: 'Sexta', focus: 'Inferior - Posterior', title: 'Treino C.2',
        exercises: [
            { id: 'c2-1', category: 'Ativação & Aquecimento', title: 'Extensão em pé + RDL B-stance', sets: '2 séries', reps: '15 repetições' },
            { id: 'c2-2', category: 'Ativação & Aquecimento', title: 'RDL Unilateral (Aquec.)', sets: '1 série', reps: '8 a 10 reps (Carga leve)' },
            { id: 'c2-3', category: 'Treino Principal', title: 'Romanian Deadlift (RDL) Unilat.', sets: '4 séries', reps: '10 a 12 reps descendo em 2 seg + Drop' },
            { id: 'c2-4', category: 'Treino Principal', title: 'Levantamento Terra Sumô', sets: '4 séries', reps: 'Reps pesadas progredindo até Cluster 4-4-4' },
            { id: 'c2-5', category: 'Treino Principal', title: 'Flexora Vertical Unilateral', sets: '4 séries', reps: '15 a 10 reps + Método 3/7' },
            { id: 'c2-6', category: 'Treino Principal', title: 'Stiff + Extensão Quadril Romano', sets: '4 séries', reps: '10 a 12 reps + 6 a 8 diretos pesados' },
            { id: 'c2-7', category: 'Treino Principal', title: 'Cadeira ou Mesa Flexora', sets: '4 séries', reps: '12 a 15 reps c/ pausa + Rest pause & Dropset' }
        ]
    },
    {
        id: 'saturday', num: 6, name: 'Sábado', focus: 'Inferior Completo', title: 'Treino D',
        exercises: [
            { id: 'd-1', category: 'Ativação & Aquecimento', title: 'Ativação e Mobilidade Padrão', sets: '1 série', reps: 'Foco em quadril e cócoras' },
            { id: 'd-2', category: 'Treino Principal', title: 'Agachamento Livre + 1/2 Agachamento', sets: '4 séries', reps: '12 a 15 reps lentas + 20 reps altas' },
            { id: 'd-3', category: 'Treino Principal', title: 'Elevação Pélvica c/ Band', sets: '3 séries', reps: '12 reps + 2s isometria + diretas + drops até falha' },
            { id: 'd-4', category: 'Treino Principal', title: 'Stiff + Extensão Banco Romano', sets: '4 séries', reps: '10 a 12 reps lentas + até a falha' },
            { id: 'd-5', category: 'Treino Principal', title: 'Extensão Diagonal + Coice Cross', sets: '3 séries', reps: '12 a 15 reps + Cluster 4-4-4-4 pesadas' }
        ]
    },
    {
        id: 'sunday', num: 0, name: 'Domingo', focus: 'Descanso e Alongamento', title: 'Ativação / Recovery',
        exercises: [
            { id: 'sun-1', category: 'Mobilidade', title: 'Mobilidade Dinâmica Quadril', sets: '1 série', reps: '20 reps (10 cada lado)' },
            { id: 'sun-2', category: 'Mobilidade', title: 'Alongamento Posterior / Tornozelo', sets: '1 série', reps: '40s / 20s' },
            { id: 'sun-3', category: 'Mobilidade', title: 'Alongamento Reto Femural', sets: '2 séries', reps: '30s / 8 movimentos' },
            { id: 'sun-4', category: 'Mobilidade', title: 'Alongamento Adutores', sets: '1 série', reps: '16x + 20s por lado' },
            { id: 'sun-5', category: 'Mobilidade', title: 'Alongamento Lombar, Ombros, Tríceps', sets: '2 séries', reps: 'Treino Funcional de Mobilidade Geral' }
        ]
    }
];

const lowerImages = [
    "lower_image_p001_01.jpeg","lower_image_p001_02.jpeg","lower_image_p001_03.jpeg","lower_image_p001_04.jpeg",
    "lower_image_p001_05.png","lower_image_p001_06.png","lower_image_p001_07.png",
    "lower_image_p002_01.jpeg","lower_image_p002_02.png","lower_image_p002_03.jpeg"
];
const upperImages = [
    "upper_image_p003_01.png","upper_image_p003_02.png","upper_image_p003_03.jpeg","upper_image_p003_04.png",
    "upper_image_p003_05.png","upper_image_p003_06.jpeg",
    "upper_image_p004_01.png","upper_image_p004_02.jpeg","upper_image_p004_03.png","upper_image_p004_04.png"
];

// =========================================================
// STATE
// =========================================================
const dayMapping = { 1:'monday', 2:'tuesday', 3:'wednesday', 4:'thursday', 5:'friday', 6:'saturday', 0:'sunday' };
let currentDayIndex = new Date().getDay();

let userProgress   = JSON.parse(localStorage.getItem('workoutProgress'))  || {};
let seriesProgress = JSON.parse(localStorage.getItem('seriesProgress'))   || {};
let weightNotes    = JSON.parse(localStorage.getItem('weightNotes'))      || {};

// =========================================================
// DOM
// =========================================================
const weekNav       = document.getElementById('week-nav');
const exerciseList  = document.getElementById('exercise-list');
const btnFinish     = document.getElementById('btn-finish');
const modal         = document.getElementById('celebration-modal');
const imagesModal   = document.getElementById('images-modal');
const btnViewImages = document.getElementById('btn-view-images');
const imageGallery  = document.getElementById('image-gallery');
const resetModal    = document.getElementById('reset-modal');

const workoutTimerDisplay = document.getElementById('workout-timer');
const btnToggleWorkout    = document.getElementById('btn-toggle-workout');
const btnResetWorkout     = document.getElementById('btn-reset-workout');
const workoutTimerBox     = document.getElementById('workout-timer-box');

const restTimerDisplay = document.getElementById('rest-timer');
const btnToggleRest    = document.getElementById('btn-toggle-rest');
const btnResetRest     = document.getElementById('btn-reset-rest');
const restTimerBox     = document.getElementById('rest-timer-box');

// =========================================================
// HELPERS
// =========================================================
function parseSetsCount(setsStr) {
    const match = setsStr.match(/^(\d+)/);
    return match ? parseInt(match[1]) : 1;
}

// =========================================================
// MIGRATION — old workoutProgress → seriesProgress
// =========================================================
function migrateOldProgress() {
    const hasNew = Object.keys(seriesProgress).length > 0;
    const hasOld = Object.keys(userProgress).length > 0;
    if (hasOld && !hasNew) {
        Object.entries(userProgress).forEach(([dayId, exIds]) => {
            if (!seriesProgress[dayId]) seriesProgress[dayId] = {};
            const dayData = workoutData.find(d => d.id === dayId);
            if (!dayData) return;
            exIds.forEach(exId => {
                const ex = dayData.exercises.find(e => e.id === exId);
                if (ex) seriesProgress[dayId][exId] = parseSetsCount(ex.sets);
            });
        });
        localStorage.setItem('seriesProgress', JSON.stringify(seriesProgress));
    }
}

// =========================================================
// INIT
// =========================================================
function init() {
    checkAutoResetWeek();
    migrateOldProgress();
    renderWeekNav();
    loadDay(dayMapping[currentDayIndex]);
    updateWeeklyProgress();
    updateStreak();

    const saved = localStorage.getItem('workoutSeconds');
    if (saved) { workoutSeconds = parseInt(saved); updateWorkoutDisplay(); }

    updateRestDisplay();

    // Hide splash screen
    const hideSplash = () => {
        const splash = document.getElementById('splash-screen');
        if (!splash) return;
        splash.classList.add('fade-out');
        setTimeout(() => splash && splash.remove(), 500);
    };
    if (document.readyState === 'complete') {
        setTimeout(hideSplash, 700);
    } else {
        window.addEventListener('load', () => setTimeout(hideSplash, 700));
    }
}

// =========================================================
// STREAK
// =========================================================
function recordTrainingDay() {
    const today = new Date().toISOString().split('T')[0];
    let dates = JSON.parse(localStorage.getItem('trainingDates')) || [];
    if (!dates.includes(today)) {
        dates.push(today);
        localStorage.setItem('trainingDates', JSON.stringify(dates));
        updateStreak();
    }
}

function getStreak() {
    const dates = new Set(JSON.parse(localStorage.getItem('trainingDates')) || []);
    const d = new Date();
    const today = d.toISOString().split('T')[0];
    if (!dates.has(today)) d.setDate(d.getDate() - 1);
    let streak = 0;
    while (true) {
        const s = d.toISOString().split('T')[0];
        if (dates.has(s)) { streak++; d.setDate(d.getDate() - 1); }
        else break;
    }
    return streak;
}

function updateStreak() {
    const streak = getStreak();
    const badge = document.getElementById('streak-badge');
    const count = document.getElementById('streak-count');
    if (!badge || !count) return;
    count.innerText = streak;
    badge.classList.toggle('hidden', streak < 2);
}

// =========================================================
// WEEK NAV
// =========================================================
function renderWeekNav() {
    weekNav.innerHTML = '';
    const sorted = [...workoutData].sort((a, b) => (a.num === 0 ? 7 : a.num) - (b.num === 0 ? 7 : b.num));
    sorted.forEach(day => {
        const btn = document.createElement('button');
        btn.className = `day-btn ${day.id === dayMapping[currentDayIndex] ? 'active' : ''}`;
        btn.innerText = day.name.substring(0, 3);
        btn.onclick = () => {
            document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentDayIndex = day.num;
            loadDay(day.id);
        };
        weekNav.appendChild(btn);
    });
}

// =========================================================
// LOAD DAY
// =========================================================
function loadDay(dayId) {
    const dayData = workoutData.find(d => d.id === dayId);
    document.body.className = `theme-${dayId}`;
    document.getElementById('current-day-title').innerText = `${dayData.title} - ${dayData.name}`;
    document.getElementById('workout-focus').innerText = dayData.focus;
    btnViewImages.style.display = 'flex';

    exerciseList.innerHTML = '';
    let currentCategory = '';

    dayData.exercises.forEach((ex, index) => {
        if (ex.category !== currentCategory) {
            const catEl = document.createElement('div');
            catEl.className = 'exercise-category';
            catEl.innerText = ex.category;
            exerciseList.appendChild(catEl);
            currentCategory = ex.category;
        }

        const totalSets  = parseSetsCount(ex.sets);
        const doneSets   = (seriesProgress[dayId] && seriesProgress[dayId][ex.id]) || 0;
        const isCompleted = doneSets >= totalSets;
        const note        = (weightNotes[dayId] && weightNotes[dayId][ex.id]) || '';

        const card = document.createElement('div');
        card.className = `exercise-card ${isCompleted ? 'completed' : ''}`;
        card.id = `card-${ex.id}`;
        card.innerHTML = `
            <div class="ex-number">${index + 1}</div>
            <div class="ex-details">
                <div class="exercise-title">${ex.title}</div>
                <div class="exercise-meta">
                    <span><i class="fa-solid fa-repeat"></i> ${ex.sets}</span>
                    <span><i class="fa-solid fa-dumbbell"></i> ${ex.reps}</span>
                </div>
                <div class="note-area ${note ? '' : 'hidden'}" id="note-area-${ex.id}">
                    <input type="text" class="note-input"
                        placeholder="Carga / observação..."
                        value="${note.replace(/"/g, '&quot;')}"
                        data-dayid="${dayId}" data-exid="${ex.id}" />
                </div>
            </div>
            <div class="card-actions">
                <button class="note-btn" data-exid="${ex.id}" title="Anotar carga">
                    <i class="fa-solid fa-pencil"></i>
                </button>
                <div class="series-counter">
                    <button class="series-btn minus"
                        data-dayid="${dayId}" data-exid="${ex.id}" data-total="${totalSets}">−</button>
                    <span class="series-count" id="sc-${ex.id}">${doneSets}/${totalSets}</span>
                    <button class="series-btn plus"
                        data-dayid="${dayId}" data-exid="${ex.id}" data-total="${totalSets}">+</button>
                </div>
            </div>
        `;
        exerciseList.appendChild(card);
    });

    // Series buttons
    exerciseList.querySelectorAll('.series-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const delta = btn.classList.contains('plus') ? 1 : -1;
            changeSeries(btn.dataset.dayid, btn.dataset.exid, parseInt(btn.dataset.total), delta);
        });
    });

    // Note toggle
    exerciseList.querySelectorAll('.note-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const area = document.getElementById(`note-area-${btn.dataset.exid}`);
            area.classList.toggle('hidden');
            if (!area.classList.contains('hidden')) area.querySelector('input').focus();
        });
    });

    // Note save
    exerciseList.querySelectorAll('.note-input').forEach(input => {
        input.addEventListener('input', e => {
            const { dayid, exid } = e.target.dataset;
            if (!weightNotes[dayid]) weightNotes[dayid] = {};
            weightNotes[dayid][exid] = e.target.value;
            localStorage.setItem('weightNotes', JSON.stringify(weightNotes));
        });
    });

    checkFinishButton(dayId);
    updateProgressBar(dayId);
}

// =========================================================
// SERIES COUNTER
// =========================================================
function changeSeries(dayId, exId, total, delta) {
    if (!seriesProgress[dayId]) seriesProgress[dayId] = {};
    const current = seriesProgress[dayId][exId] || 0;
    const next    = Math.max(0, Math.min(total, current + delta));
    seriesProgress[dayId][exId] = next;
    localStorage.setItem('seriesProgress', JSON.stringify(seriesProgress));

    const sc = document.getElementById(`sc-${exId}`);
    if (sc) sc.innerText = `${next}/${total}`;

    const card        = document.getElementById(`card-${exId}`);
    const isCompleted = next >= total;

    if (!userProgress[dayId]) userProgress[dayId] = [];
    const idx = userProgress[dayId].indexOf(exId);

    if (isCompleted && idx === -1) {
        userProgress[dayId].push(exId);
        card && card.classList.add('completed');
        recordTrainingDay();
    } else if (!isCompleted && idx > -1) {
        userProgress[dayId].splice(idx, 1);
        card && card.classList.remove('completed');
    }

    localStorage.setItem('workoutProgress', JSON.stringify(userProgress));
    checkFinishButton(dayId);
    updateWeeklyProgress();
    updateProgressBar(dayId);
}

// =========================================================
// PROGRESS BAR
// =========================================================
function updateProgressBar(dayId) {
    const dayData = workoutData.find(d => d.id === dayId);
    if (!dayData) return;
    const total = dayData.exercises.length;
    const done  = (userProgress[dayId] || []).length;
    const pct   = total > 0 ? (done / total) * 100 : 0;
    const fill  = document.getElementById('progress-bar-fill');
    const text  = document.getElementById('progress-bar-text');
    if (fill) fill.style.width = pct + '%';
    if (text) text.innerText = `${done}/${total}`;
}

// =========================================================
// FINISH BUTTON & WEEKLY PROGRESS
// =========================================================
function checkFinishButton(dayId) {
    const dayData = workoutData.find(d => d.id === dayId);
    if (!dayData) return;
    const total = dayData.exercises.length;
    const done  = (userProgress[dayId] || []).length;
    if (total > 0 && total === done) {
        btnFinish.style.display = 'flex';
        btnFinish.onclick = () => showModal();
    } else {
        btnFinish.style.display = 'none';
        btnFinish.onclick = null;
    }
}

function updateWeeklyProgress() {
    let total = 0, done = 0;
    workoutData.forEach(day => {
        total += day.exercises.length;
        done  += (userProgress[day.id] || []).length;
    });
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    document.getElementById('weekly-progress').setAttribute('stroke-dasharray', `${pct}, 100`);
    document.getElementById('weekly-percent').innerText = `${pct}%`;
}

// =========================================================
// CONFETTI
// =========================================================
function launchConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    const colors = ['#10b981','#6366f1','#f59e0b','#ef4444','#ec4899','#3b82f6','#34d399','#a78bfa'];
    for (let i = 0; i < 90; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        p.style.cssText = `
            left:${Math.random() * 100}vw;
            width:${6 + Math.random() * 6}px;
            height:${10 + Math.random() * 8}px;
            background:${colors[Math.floor(Math.random() * colors.length)]};
            animation-duration:${1.5 + Math.random() * 2}s;
            animation-delay:${Math.random() * 0.5}s;
            transform:rotate(${Math.random() * 360}deg);
            border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
        `;
        container.appendChild(p);
        p.addEventListener('animationend', () => p.remove());
    }
}

// =========================================================
// MODALS
// =========================================================
function showModal() {
    modal.classList.add('active');
    launchConfetti();
}
function closeModal() { modal.classList.remove('active'); }

function openImagesModal() {
    imageGallery.innerHTML = '';
    const dayId = dayMapping[currentDayIndex];
    let imgs = [];
    if (['monday','wednesday','friday','saturday'].includes(dayId)) imgs = lowerImages;
    else if (['tuesday','thursday'].includes(dayId)) imgs = upperImages;
    else imgs = [...lowerImages, ...upperImages];
    imgs.forEach(img => {
        const el = document.createElement('img');
        el.src = `assets/images/${img}`;
        el.loading = 'lazy';
        imageGallery.appendChild(el);
    });
    imagesModal.classList.add('active');
}
function closeImagesModal() { imagesModal.classList.remove('active'); }

function openResetModal()  { resetModal.classList.add('active'); }
function closeResetModal() { resetModal.classList.remove('active'); }

function confirmResetWeek() { doResetWeek(); closeResetModal(); }

function doResetWeek() {
    localStorage.removeItem('workoutProgress');
    localStorage.removeItem('seriesProgress');
    localStorage.removeItem('workoutSeconds');
    userProgress   = {};
    seriesProgress = {};
    workoutSeconds = 0;
    updateWorkoutDisplay();
    if (isWorkoutRunning) toggleWorkoutTimer();
    loadDay(dayMapping[currentDayIndex]);
    updateWeeklyProgress();
}

// =========================================================
// AUTO RESET
// =========================================================
function checkAutoResetWeek() {
    const lastStr = localStorage.getItem('lastAccessDate');
    const today   = new Date();
    if (lastStr) {
        const last = new Date(lastStr);
        if (today.getDay() === 1 && today.toDateString() !== last.toDateString() && last.getDay() !== 1) {
            const diff = Math.ceil(Math.abs(today - last) / (1000 * 60 * 60 * 24));
            if (diff >= 1) doResetWeek();
        }
    }
    localStorage.setItem('lastAccessDate', today.toISOString());
}

// =========================================================
// WORKOUT TIMER
// =========================================================
let workoutSeconds  = 0;
let workoutInterval = null;
let isWorkoutRunning = false;

function formatWorkoutTime(s) {
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return [h, m, sec].map(v => v.toString().padStart(2, '0')).join(':');
}
function updateWorkoutDisplay() { workoutTimerDisplay.innerText = formatWorkoutTime(workoutSeconds); }

function toggleWorkoutTimer() {
    if (isWorkoutRunning) {
        clearInterval(workoutInterval);
        btnToggleWorkout.innerHTML = '<i class="fa-solid fa-play"></i>';
        workoutTimerBox.classList.remove('active');
    } else {
        workoutInterval = setInterval(() => {
            workoutSeconds++;
            updateWorkoutDisplay();
            localStorage.setItem('workoutSeconds', workoutSeconds);
        }, 1000);
        btnToggleWorkout.innerHTML = '<i class="fa-solid fa-pause"></i>';
        workoutTimerBox.classList.add('active');
    }
    isWorkoutRunning = !isWorkoutRunning;
}

function resetWorkoutTimer() {
    if (isWorkoutRunning) toggleWorkoutTimer();
    workoutSeconds = 0;
    updateWorkoutDisplay();
    localStorage.removeItem('workoutSeconds');
}

btnToggleWorkout.addEventListener('click', toggleWorkoutTimer);
btnResetWorkout.addEventListener('click', resetWorkoutTimer);

// =========================================================
// REST TIMER — countdown 90 s + vibração + beep
// =========================================================
const REST_DEFAULT = 90;
let restSeconds   = REST_DEFAULT;
let restInterval  = null;
let isRestRunning = false;

function formatRestTime(s) {
    const m = Math.floor(s / 60), sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}
function updateRestDisplay() { restTimerDisplay.innerText = formatRestTime(restSeconds); }

function playBeep() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        [0, 0.3, 0.6].forEach(delay => {
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = 880;
            gain.gain.setValueAtTime(0.4, ctx.currentTime + delay);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.25);
            osc.start(ctx.currentTime + delay);
            osc.stop(ctx.currentTime + delay + 0.25);
        });
    } catch (e) { /* browser may block AudioContext without user gesture */ }
}

function onRestFinished() {
    clearInterval(restInterval);
    restInterval  = null;
    isRestRunning = false;
    btnToggleRest.innerHTML = '<i class="fa-solid fa-play"></i>';
    restTimerBox.classList.remove('active');
    restTimerBox.classList.add('finished');
    setTimeout(() => restTimerBox.classList.remove('finished'), 1800);
    playBeep();
    if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 300]);
}

function toggleRestTimer() {
    if (isRestRunning) {
        clearInterval(restInterval);
        btnToggleRest.innerHTML = '<i class="fa-solid fa-play"></i>';
        restTimerBox.classList.remove('active');
    } else {
        if (restSeconds <= 0) restSeconds = REST_DEFAULT;
        restInterval = setInterval(() => {
            restSeconds--;
            updateRestDisplay();
            if (restSeconds <= 0) onRestFinished();
        }, 1000);
        btnToggleRest.innerHTML = '<i class="fa-solid fa-pause"></i>';
        restTimerBox.classList.add('active');
    }
    isRestRunning = !isRestRunning;
}

function resetRestTimer() {
    if (isRestRunning) {
        clearInterval(restInterval);
        isRestRunning = false;
        btnToggleRest.innerHTML = '<i class="fa-solid fa-play"></i>';
        restTimerBox.classList.remove('active');
    }
    restSeconds = REST_DEFAULT;
    updateRestDisplay();
}

btnToggleRest.addEventListener('click', toggleRestTimer);
btnResetRest.addEventListener('click', resetRestTimer);

// =========================================================
// START
// =========================================================
init();
