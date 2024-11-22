enum Status{
    TODO = "TODO",
    DOING = "Doing",
    DONE = "Done"
}

class Tarefa {
    private _id: number;
    private _desc: string;
    private _status: Status;

    constructor(id:number, desc:string){
        this._id = id;
        this._desc = desc;
        this._status = Status.TODO;
    }

    public get tarefa(): string{
        return `${this._id} -  ${this._desc} ---Status--- ${this._status}`;
    }

    public set status(status: Status){
        this._status = status;
    }

    public get id():number {
        return this._id;
    }
}

class taskList{
    private _list: Array<Tarefa>;

    constructor(){
        this._list = [];
    }

    public addTask(task: Tarefa):void {
        this._list.push(task);
    }

    public getAllTasks():string {
        return this._list.map(task => {return task.tarefa}).join('\n');
    }

    public getTaskByID(id: number):Tarefa | undefined{
        return this._list.find(task => task.id === id);
    }

    public changeStatus(id: number, status: Status): boolean{
        const task = this.getTaskByID(id);

        if(task){
            task.status = status;
            return true;
        }else{
            return false;
        }
    }
}

function main(){
    const myList = new taskList();

    //Adicionando tarefas a lista
    myList.addTask(new Tarefa(
        1,
        "Estudar sobre Typescript"
    ));
    myList.addTask(new Tarefa(
        2,
        "Falar com o professor"
    ));
    myList.addTask(new Tarefa(
        3,
        "Fazer compras no mercado"
    ));

    //Imprimindo a lista completa
    console.log(myList.getAllTasks());

    //Alterando a segunda tarefa para Doing
    myList.changeStatus(2, Status.DOING);

    console.log("-".repeat(20));

    console.log(myList.getAllTasks());

    myList.changeStatus(2, Status.DONE);

    console.log("-".repeat(20));

    console.log(myList.getAllTasks());
}

main();