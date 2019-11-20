interface Item {
  id: number;
  title: string;
  details: string;
}

type Id = number;

class Todo {
  list: Record<Id, Item>;

  private getIndex(): number {
    return Object.keys(this.list).length;
  }

  addTodo(title: string, details = ''): Record<Id, Item> {
    const nextId = this.getIndex() + 1;
    const nextList = {
      ...this.list,
      [nextId]: { id: nextId, title: title, details: details },
    };
    this.list = nextList;
    return nextList;
  }

  getItem(index: number): Item {
    return this.list[index];
  }
}

// いれる item
const todos: Record<Id, Item> = {
  1: { id: 1, title: 'about', details: '' },
};