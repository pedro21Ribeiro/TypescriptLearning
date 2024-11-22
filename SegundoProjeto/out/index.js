var Status;
(function (Status) {
    Status["TODO"] = "TODO";
    Status["DOING"] = "Doing";
    Status["DONE"] = "Done";
})(Status || (Status = {}));
class Tarefa {
    constructor(id, desc) {
        this._id = id;
        this._desc = desc;
        this._status = Status.TODO;
    }
    get tarefa() {
        return `${this._id} -  ${this._desc} ---Status--- ${this._status}`;
    }
    set status(status) {
        this._status = status;
    }
    get id() {
        return this._id;
    }
}
class taskList {
    constructor() {
        this._list = [];
    }
    addTask(task) {
        this._list.push(task);
    }
    getAllTasks() {
        return this._list.map(task => { return task.tarefa; }).join('\n');
    }
    getTaskByID(id) {
        return this._list.find(task => task.id === id);
    }
    changeStatus(id, status) {
        const task = this.getTaskByID(id);
        if (task) {
            task.status = status;
            return true;
        }
        else {
            return false;
        }
    }
}
function main() {
    const myList = new taskList();
    myList.addTask(new Tarefa(1, "Estudar sobre Typescript"));
    myList.addTask(new Tarefa(2, "Falar com o professor"));
    myList.addTask(new Tarefa(3, "Fazer compras no mercado"));
    console.log(myList.getAllTasks());
    myList.changeStatus(2, Status.DOING);
    console.log("-".repeat(20));
    console.log(myList.getAllTasks());
    myList.changeStatus(2, Status.DONE);
    console.log("-".repeat(20));
    console.log(myList.getAllTasks());
}
main();
//# sourceMappingURL=index.js.map