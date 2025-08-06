
export class TaskListGUI {
    constructor(taskList){
        this.taskList = taskList;

        this.mainListDiv = null;
        this.progressDone = null;
        this.countDone = null;
        this.countRemain = null;
    }

    newDiv(){
        return document.createElement('div');
    }

    addTask(task){
        const taskDiv = this.newDiv();
        taskDiv.classList.add('Task');
        this.mainListDiv.appendChild(taskDiv);

        const checkbox = document.createElement("input");
        taskDiv.classList.add('TaskCheckbox');
        checkbox.type = "checkbox";
        taskDiv.appendChild(checkbox);

        const taskName = this.newDiv();
        taskDiv.classList.add('TaskName');
        taskName.textContent = `Nouvelle tache`;
        taskDiv.appendChild(taskName);

        checkbox.addEventListener("click", () => {
            this.taskList.checkTask(task);
        });

        this.updateTaskList();
    }

    createList(){
        let mainPageContent = document.getElementById('MainPageContent');

        // create div for the task list
        this.mainListDiv = this.newDiv();
        this.mainListDiv.classList.add('TaskList');
        mainPageContent.appendChild(this.mainListDiv);

        let taskListHeader = this.newDiv();
        taskListHeader.classList.add('TaskListHeader');
        this.mainListDiv.appendChild(taskListHeader);

        // create div for the task list title
        const listTitle = this.newDiv();
        listTitle.textContent = this.taskList.type.name;
        taskListHeader.appendChild(listTitle);

        // create the div for the task list progress
        const progressWrapperDiv = this.newDiv();
        progressWrapperDiv.classList.add('progress-wrapper');
        taskListHeader.appendChild(progressWrapperDiv);

        // create the div for the number of tasks done
        this.countDone = this.newDiv();
        this.countDone.classList.add('task-count-done');
        progressWrapperDiv.appendChild(this.countDone);
        this.countDone.textContent = this.taskList.getTaskDoneCount();

        const statsProgressBar = this.newDiv();
        statsProgressBar.classList.add('progress-bar');
        progressWrapperDiv.appendChild(statsProgressBar);

        this.progressDone = this.newDiv();
        this.progressDone.classList.add('progress-done');
        statsProgressBar.appendChild(this.progressDone);
        const perc = this.taskList.getTaskDoneCount() / (this.taskList.getTaskDoneCount() + this.taskList.getTaskRemainCount());
        this.progressDone.style.width = `${Math.round(perc * 100, 0)}%`;

        this.countRemain = this.newDiv();
        this.countRemain.classList.add('task-count-todo');
        progressWrapperDiv.appendChild(this.countRemain);
        this.countRemain.textContent = this.taskList.getTaskRemainCount();
    }

    updateTaskList(){
        const perc = this.taskList.getTaskDoneCount() / (this.taskList.getTaskDoneCount() + this.taskList.getTaskRemainCount());
        this.progressDone.style.width = `${Math.round(perc * 100, 0)}%`;
        this.countDone.textContent = `${this.taskList.getTaskDoneCount()}`;
        this.countRemain.textContent = `${this.taskList.getTaskRemainCount()}`;
    }
}; // class TaskListGUI