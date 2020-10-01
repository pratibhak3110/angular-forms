export class Todo
{
  constructor(public id:number, public title:string,public status:string){

  }
}

export interface Todo1{
   id: number;
   title:string;
   status:string;
}
