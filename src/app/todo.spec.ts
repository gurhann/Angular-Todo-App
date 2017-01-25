import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in constructor', () => {
    const todo = new Todo({
      title: 'Todo',
      complete: true
    });
    expect(todo.title).toEqual('Todo');
    expect(todo.complete).toEqual(true);
  });
});
