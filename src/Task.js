
export class Task {
    constructor(taskListType){
        this.type = taskListType;
        this.isDone = false;
    }

    checkTask(){
        this.isDone = !this.isDone;
    }
}; // class Task