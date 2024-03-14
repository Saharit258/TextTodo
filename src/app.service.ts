import { Injectable } from '@nestjs/common';
import { text } from 'stream/consumers';

@Injectable()
export class AppService {
  private todo = [];

  addtodo(todos:any) {
    const todo = { 
      id: this.todo.length + 1,
      text: todos.text  
    };
    this.todo.push(todo);
    return todo;
  }

  gettodos() {
    return this.todo
  }

  gettodo(id:number) {
    const submit = this.todo.find((text) => text.id === id);
    return submit;
  }

  update(id:number ,todos:any) {
    const updates = this.gettodo(id);
    updates.text = todos.text;
    return updates;
  }

  remove(id:number) {
    const removes = this.todo.findIndex((text) => text.id === id);
    this.todo.splice(removes, 1)
    return true;
  }

}
