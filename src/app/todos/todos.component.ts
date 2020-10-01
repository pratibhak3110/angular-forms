import { Component, OnInit } from '@angular/core';
import { Todo ,Todo1} from "./todo" ;


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

 // arrName: string[] =['Pratibha', 'Kamble'];
 // arrNumber: number[] =[1,2,3,4,5];
  // {"id": 1,"title":"Hello","status":"Done"}

  id;
  title;
  status;
flag:boolean= false;

  arrTodos: Todo[]=[
    new Todo(1, "Wear a mask","done"),
    new Todo(2, "mail to your manager","pending"),
    new Todo(3, "Some Task","pending"),
    new Todo(4, "Coding Task","done"),
  ];
  OnDeleteClick(item:Todo)
  {
    this.arrTodos.splice(this.arrTodos.indexOf(item),1)
  }
  OnEditClick(item)
  {
    if(item.status=="done")
    {
      item.status="pending";
    }
    else
    {
      item.status="done";
    }
  }

  OnTaskAdd()
  {
    this.arrTodos.push(new Todo(this.id,this.title,this.status));
    this.flag=false;
  }


  arrTodosinterface:Todo1[]=[
    {id:1,title:"demo",status:"done"}
  ];

  OnNewAddTaskClick()
  {
    this.flag=true;
  }

  OnCancleClick()
  {
    this.flag=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
