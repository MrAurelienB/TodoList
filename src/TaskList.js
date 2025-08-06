
import {TaskListGUI} from './TaskListGUI.js';

export class TaskList {
    constructor(taskListType){
        this.type = taskListType;

        this.taskList = [];

        this.taskListGui = new TaskListGUI(this);
    }

    addTask(task){
        // TODO: selon le statut de la tâche
        this.taskList.push(task);
        this.taskListGui.addTask(task);
    }

    checkTask(task){
        task.checkTask();
        this.taskListGui.updateTaskList();
    }

    getTaskDoneCount(){
        let c = 0;
        for (let task of this.taskList){
            if (task.isDone)
                c++;
        }
        return c;
    }

    getTaskRemainCount(){
        let c = 0;
        for (let task of this.taskList){
            if (!task.isDone)
                c++;
        }
        return c;
    }
}; // class TaskList