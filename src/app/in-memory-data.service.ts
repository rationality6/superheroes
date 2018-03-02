import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './class/todo'

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ]

    const todos: Todo[] = [
      { id: 0, name: "Eatthing rice" },
      { id: 1, name: "Fooping" },
      { id: 2, name: "Thinking about dinner" },
      { id: 3, name: "Running" },
      { id: 4, name: "Exercise" },
      { id: 5, name: "Coding" }
    ]
    return { heroes, todos };
  }
}

