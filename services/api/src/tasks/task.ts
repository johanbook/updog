interface Task {
  id: string;
  cancel(): void;
}

const tasks: Record<string, Task> = {};

interface CreateTaskOptions<T> {
  args: T;
  id?: string;
  interval?: number;
}

export function create<T = undefined>(
  fn: (props: T) => void,
  options: CreateTaskOptions<T>
): string {
  const id = options.id || Math.random().toString();
  const interval = setInterval(fn, options.interval || 60 * 1000, options.args);

  tasks[id] = { id, cancel: () => clearInterval(interval) };
  return id;
}

export function remove(id: string): void {
  tasks[id].cancel();
}

export function exists(id: string): boolean {
  return id in tasks;
}
