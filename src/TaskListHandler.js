
import {Task} from './Task.js';
import {TaskList} from './TaskList.js';
import {TASK_LIST_TYPE, TASK_LIST_TYPE_BY_VALUE} from './TaskListType.js';

export class TaskListHandler {
    constructor(){
        this.taskListMap = new Map();
        this.createTaskLists();
    }

    createTaskLists(){
        // TODO: parse tasks

        for (let i = 0; i < TASK_LIST_TYPE.MAX.value; i++){
            const type = TASK_LIST_TYPE_BY_VALUE[i];
            let taskList = new TaskList(type);
            taskList.taskListGui.createList();
            for (let i = 0; i < 10; i++)
                taskList.addTask(new Task(type));
            this.taskListMap.set(type.value, taskList);
        }
    }

    setTaskDone(task){
        if (this.taskListMap.has(task.type.value))
            this.taskListMap.get(task.type.value).setTaskDone(task);
    }
}; // class TaskListHandler