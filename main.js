import {TaskListHandler} from './src/TaskListHandler.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function roundPercent(v){
    return Math.round(v * 100, 0);
}

let doneCount = getRandomInt(10);
let todoCount = getRandomInt(10) + 1;
const totalTaskCount = doneCount + todoCount;

const taskListHandler = new TaskListHandler();


/**
 * IDEAS
 * 
 * 
 * stats globale: number of tasks done this day, week, month, all time
 */


/*
const listNames = ['En retard', 'Aujourd\'hui', 'Cette semaine', 'Ce mois-ci', 'Plus tard'];
for (let listName of listNames){
    const listDiv = document.createElement('div');
    listDiv.classList.add('MainItemList');
    mainPageContent.appendChild(listDiv);

    const listDivTitle = document.createElement('div');
    listDivTitle.textContent = listName;
    listDiv.appendChild(listDivTitle);

    const listStatsDiv = document.createElement('div');
    listStatsDiv.classList.add('progress-wrapper');
    listDiv.appendChild(listStatsDiv);

    const taskCountDone = document.createElement('div');
    taskCountDone.classList.add('task-count-done');
    listStatsDiv.appendChild(taskCountDone);
    taskCountDone.textContent = doneCount;

    const statsProgressBar = document.createElement('div');
    statsProgressBar.classList.add('progress-bar');
    listStatsDiv.appendChild(statsProgressBar);

    const statsDoneDiv = document.createElement('div');
    statsDoneDiv.classList.add('progress-done');
    statsProgressBar.appendChild(statsDoneDiv);
    statsDoneDiv.style.width = roundPercent(doneCount/(doneCount + todoCount)) + "%";

    const taskCountTod = document.createElement('div');
    taskCountTod.classList.add('task-count-todo');
    listStatsDiv.appendChild(taskCountTod);
    taskCountTod.textContent = todoCount;

    statsProgressBar.addEventListener('click', (e) => {
        if (doneCount === totalTaskCount || todoCount === 0)
            return;

        doneCount += 1;
        todoCount -= 1;
        console.log(doneCount, todoCount);

        statsDoneDiv.style.width = `${roundPercent(doneCount/(doneCount + todoCount))}%`;
        taskCountDone.textContent = `${doneCount}`;
        taskCountTod.textContent = `${todoCount}`;
    });

    for (let i = 0; i < 3; i++){
        const itemDiv = document.createElement('div');
        listDiv.appendChild(itemDiv);
    }
}
*/