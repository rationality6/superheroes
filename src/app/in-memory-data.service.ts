import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './class/todo'
import { Hero } from './class/hero'

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ]

    const todos: Todo[] = [
      { id: 0, name: "Eating rice" },
      { id: 1, name: "Take a shit" },
      { id: 2, name: "Thinking about dinner" },
      { id: 3, name: "Running" },
      { id: 4, name: "Exercise" },
      { id: 5, name: "Coding" },
      { id: 6, name: "Thinking about lunch" },
      { id: 7, name: "Study" },
    ]
    return { heroes, todos };
  }
}
