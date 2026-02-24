const workoutData = [
    {
        id: 'monday',
        num: 1,
        name: 'Segunda',
        focus: 'Inferior - Quadríceps',
        title: 'Treino A',
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
        id: 'tuesday',
        num: 2,
        name: 'Terça',
        focus: 'Ombro, Peito, Tríceps + Abs',
        title: 'Treino B1',
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
        id: 'wednesday',
        num: 3,
        name: 'Quarta',
        focus: 'Inferior - Glúteo',
        title: 'Treino C.1',
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
        id: 'thursday',
        num: 4,
        name: 'Quinta',
        focus: 'Costas, Bíceps + Abs',
        title: 'Treino B2',
        exercises: [
            { id: 'b2-1', category: 'Ativação & Aquecimento', title: 'Mobilidade Ombro + Pulldown Leve', sets: 'Vários', reps: '10/10 + 8-10 reps' },
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
        id: 'friday',
        num: 5,
        name: 'Sexta',
        focus: 'Inferior - Posterior',
        title: 'Treino C.2',
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
        id: 'saturday',
        num: 6,
        name: 'Sábado',
        focus: 'Inferior Completo',
        title: 'Treino D',
        exercises: [
            { id: 'd-1', category: 'Ativação & Aquecimento', title: 'Ativação e Mobilidade Padrão', sets: 'Diversos', reps: 'Foco em quadril e cócoras' },
            { id: 'd-2', category: 'Treino Principal', title: 'Agachamento Livre + 1/2 Agachamento', sets: '4 séries', reps: '12 a 15 reps lentas + 20 reps altas' },
            { id: 'd-3', category: 'Treino Principal', title: 'Elevação Pélvica c/ Band', sets: '3 séries', reps: '12 reps + 2s isometria + diretas + drops até falha' },
            { id: 'd-4', category: 'Treino Principal', title: 'Stiff + Extensão Banco Romano', sets: '4 séries', reps: '10 a 12 reps lentas + até a falha' },
            { id: 'd-5', category: 'Treino Principal', title: 'Extensão Diagonal + Coice Cross', sets: '3 séries', reps: '12 a 15 reps + Cluster 4-4-4-4 pesudas' }
        ]
    },
    {
        id: 'sunday',
        num: 0,
        name: 'Domingo',
        focus: 'Descanso e Alongamento',
        title: 'Ativação / Recovery',
        exercises: [
            { id: 'sun-1', category: 'Mobilidade', title: 'Mobilidade Dinâmica Quadril', sets: '1 série', reps: '20 reps (10 cada lado)' },
            { id: 'sun-2', category: 'Mobilidade', title: 'Alongamento Posterior / Tornozelo', sets: '1 série', reps: '40s / 20s' },
            { id: 'sun-3', category: 'Mobilidade', title: 'Alongamento Reto Femural', sets: '2 séries', reps: '30s / 8 movimentos' },
            { id: 'sun-4', category: 'Mobilidade', title: 'Alongamento Adutores', sets: '1 série', reps: '16x + 20s por lado' },
            { id: 'sun-5', category: 'Superiores', title: 'Ao Longamento Lombar, Ombros, Tríceps', sets: '2 séries', reps: 'Treino Funcional de Mobilidade Geral' }
        ]
    }
];

// Constants for images
const lowerImages = [
    "lower_image_p001_01.jpeg", "lower_image_p001_02.jpeg", "lower_image_p001_03.jpeg", "lower_image_p001_04.jpeg",
    "lower_image_p001_05.png", "lower_image_p001_06.png", "lower_image_p001_07.png",
    "lower_image_p002_01.jpeg", "lower_image_p002_02.png", "lower_image_p002_03.jpeg"
];

const upperImages = [
    "upper_image_p003_01.png", "upper_image_p003_02.png", "upper_image_p003_03.jpeg", "upper_image_p003_04.png", 
    "upper_image_p003_05.png", "upper_image_p003_06.jpeg",
    "upper_image_p004_01.png", "upper_image_p004_02.jpeg", "upper_image_p004_03.png", "upper_image_p004_04.png"
];

// State
let currentDayIndex = new Date().getDay(); // 0 (Sun) to 6 (Sat)
// Map JS getDay (0=Sun, 1=Mon) to our data struct where Mon=1... Sun=0
const dayMapping = {
    1: 'monday', 2: 'tuesday', 3: 'wednesday', 
    4: 'thursday', 5: 'friday', 6: 'saturday', 0: 'sunday'
};

let userProgress = JSON.parse(localStorage.getItem('workoutProgress')) || {};

// DOM Elements
const weekNav = document.getElementById('week-nav');
const exerciseList = document.getElementById('exercise-list');
const btnFinish = document.getElementById('btn-finish');
const modal = document.getElementById('celebration-modal');
const imagesModal = document.getElementById('images-modal');
const btnViewImages = document.getElementById('btn-view-images');
const imageGallery = document.getElementById('image-gallery');
const resetModal = document.getElementById('reset-modal');

// Timers Elements
const workoutTimerDisplay = document.getElementById('workout-timer');
const btnToggleWorkout = document.getElementById('btn-toggle-workout');
const btnResetWorkout = document.getElementById('btn-reset-workout');
const workoutTimerBox = document.getElementById('workout-timer-box');

const restTimerDisplay = document.getElementById('rest-timer');
const btnToggleRest = document.getElementById('btn-toggle-rest');
const btnResetRest = document.getElementById('btn-reset-rest');
const restTimerBox = document.getElementById('rest-timer-box');

// Timers State
let workoutSeconds = 0;
let workoutInterval = null;
let isWorkoutRunning = false;

let restSeconds = 0;
let restInterval = null;
let isRestRunning = false;

// Init
function init() {
    checkAutoResetWeek();
    renderWeekNav();
    loadDay(dayMapping[currentDayIndex]);
    updateWeeklyProgress();
    
    // Check if workout was already running
    const savedWorkoutSeconds = localStorage.getItem('workoutSeconds');
    if (savedWorkoutSeconds) {
        workoutSeconds = parseInt(savedWorkoutSeconds);
        updateWorkoutDisplay();
    }
}

// Render Week Navigation
function renderWeekNav() {
    weekNav.innerHTML = '';
    // Sort logic to show Mon -> Sun
    const sortedData = [...workoutData].sort((a, b) => {
        let nA = a.num === 0 ? 7 : a.num;
        let nB = b.num === 0 ? 7 : b.num;
        return nA - nB;
    });

    sortedData.forEach(day => {
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

// Load Specific Day
function loadDay(dayId) {
    const dayData = workoutData.find(d => d.id === dayId);
    
    // Update theme specific to the day
    document.body.className = `theme-${dayId}`;

    // Update Headers
    document.getElementById('current-day-title').innerText = `${dayData.title} - ${dayData.name}`;
    document.getElementById('workout-focus').innerText = dayData.focus;

    // View Images Button Logic
    if (['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].includes(dayId)) {
        btnViewImages.style.display = 'flex';
    } else {
        btnViewImages.style.display = 'none';
    }

    // Render Exercises
    exerciseList.innerHTML = '';
    
    let currentCategory = '';

    dayData.exercises.forEach((ex, index) => {
        // Render Category Header if changes
        if(ex.category !== currentCategory) {
            const catEl = document.createElement('div');
            catEl.className = 'exercise-category';
            catEl.innerText = ex.category;
            exerciseList.appendChild(catEl);
            currentCategory = ex.category;
        }

        const isArr = userProgress[dayId] || [];
        const isCompleted = isArr.includes(ex.id);

        const card = document.createElement('div');
        card.className = `exercise-card ${isCompleted ? 'completed' : ''}`;
        card.onclick = () => toggleExercise(dayId, ex.id, card);

        card.innerHTML = `
            <div class="ex-number">${index + 1}</div>
            <div class="ex-details">
                <div class="exercise-title">${ex.title}</div>
                <div class="exercise-meta">
                    <span><i class="fa-solid fa-repeat"></i> ${ex.sets}</span>
                    <span><i class="fa-solid fa-dumbbell"></i> ${ex.reps}</span>
                </div>
            </div>
            <div class="custom-checkbox">
                <i class="fa-solid fa-check"></i>
            </div>
        `;
        
        exerciseList.appendChild(card);
    });

    checkFinishButton(dayId);
}

// Toggle Exercise Status
function toggleExercise(dayId, exId, cardElement) {
    if (!userProgress[dayId]) userProgress[dayId] = [];
    
    const index = userProgress[dayId].indexOf(exId);
    if (index > -1) {
        userProgress[dayId].splice(index, 1);
        cardElement.classList.remove('completed');
    } else {
        userProgress[dayId].push(exId);
        cardElement.classList.add('completed');
    }

    localStorage.setItem('workoutProgress', JSON.stringify(userProgress));
    
    checkFinishButton(dayId);
    updateWeeklyProgress();
}

// Manage Finish Button visibility
function checkFinishButton(dayId) {
    const dayData = workoutData.find(d => d.id === dayId);
    if(!dayData) return;

    const totalEx = dayData.exercises.length;
    const completedEx = (userProgress[dayId] || []).length;

    if (totalEx > 0 && totalEx === completedEx) {
        btnFinish.style.display = 'flex';
        btnFinish.onclick = () => showModal();
    } else {
        btnFinish.style.display = 'none';
        btnFinish.onclick = null;
    }
}

// Calculate Weekly Progress
function updateWeeklyProgress() {
    let totalExercises = 0;
    let totalCompleted = 0;

    workoutData.forEach(day => {
        totalExercises += day.exercises.length;
        totalCompleted += (userProgress[day.id] || []).length;
    });

    const percent = totalExercises > 0 ? Math.round((totalCompleted / totalExercises) * 100) : 0;
    
    const circle = document.getElementById('weekly-progress');
    const textPercent = document.getElementById('weekly-percent');
    
    circle.setAttribute('stroke-dasharray', `${percent}, 100`);
    textPercent.innerText = `${percent}%`;
}

// Modal Functions
function showModal() {
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

// Images Modal Functions
function openImagesModal() {
    // Populate
    imageGallery.innerHTML = '';
    const dayId = dayMapping[currentDayIndex];
    let imagesToShow = [];

    // Lower body days
    if (['monday', 'wednesday', 'friday', 'saturday'].includes(dayId)) {
        imagesToShow = lowerImages;
    }
    // Upper body days
    else if (['tuesday', 'thursday'].includes(dayId)) {
        imagesToShow = upperImages;
    }
    // Sunday (both)
    else if (dayId === 'sunday') {
        imagesToShow = [...lowerImages, ...upperImages];
    }

    imagesToShow.forEach(img => {
        const imgEl = document.createElement('img');
        imgEl.src = `assets/images/${img}`;
        imgEl.loading = "lazy";
        imageGallery.appendChild(imgEl);
    });

    imagesModal.classList.add('active');
}

function closeImagesModal() {
    imagesModal.classList.remove('active');
}

// Reset Week Functions
function checkAutoResetWeek() {
    const lastAccessStr = localStorage.getItem('lastAccessDate');
    const today = new Date();
    
    if (lastAccessStr) {
        const lastAccess = new Date(lastAccessStr);
        // If it's a new week (Monday) and the last access wasn't today
        if (today.getDay() === 1 && today.toDateString() !== lastAccess.toDateString() && lastAccess.getDay() !== 1) {
            // It's Monday, let's auto-reset the week if the last access was previous week
            const diffTime = Math.abs(today - lastAccess);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            if (diffDays >= 1) {
                 doResetWeek();
            }
        }
    }
    localStorage.setItem('lastAccessDate', today.toISOString());
}

function openResetModal() {
    resetModal.classList.add('active');
}

function closeResetModal() {
    resetModal.classList.remove('active');
}

function confirmResetWeek() {
    doResetWeek();
    closeResetModal();
}

function doResetWeek() {
    // Clear all completed exercises
    localStorage.removeItem('workoutProgress');
    userProgress = {};

    // Clear workout timer
    localStorage.removeItem('workoutSeconds');
    workoutSeconds = 0;
    updateWorkoutDisplay();
    if(isWorkoutRunning) toggleWorkoutTimer();
    
    // Reload UI
    loadDay(dayMapping[currentDayIndex]);
    updateWeeklyProgress();
}

// Timers Logic
// --- Workout Timer ---
function formatWorkoutTime(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function updateWorkoutDisplay() {
    workoutTimerDisplay.innerText = formatWorkoutTime(workoutSeconds);
}

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

// --- Rest Timer ---
function formatRestTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function updateRestDisplay() {
    restTimerDisplay.innerText = formatRestTime(restSeconds);
}

function toggleRestTimer() {
    if (isRestRunning) {
        clearInterval(restInterval);
        btnToggleRest.innerHTML = '<i class="fa-solid fa-play"></i>';
        restTimerBox.classList.remove('active');
    } else {
        restInterval = setInterval(() => {
            restSeconds++;
            updateRestDisplay();
        }, 1000);
        btnToggleRest.innerHTML = '<i class="fa-solid fa-pause"></i>';
        restTimerBox.classList.add('active');
    }
    isRestRunning = !isRestRunning;
}

function resetRestTimer() {
    if (isRestRunning) toggleRestTimer();
    restSeconds = 0;
    updateRestDisplay();
}

btnToggleRest.addEventListener('click', toggleRestTimer);
btnResetRest.addEventListener('click', resetRestTimer);

// Initialize App
init();
