import useLocalStorage from './useLocalStorage';

export default function useLocalStorageTask() {
  const [tasks, setTask] = useLocalStorage('Tasks', []);

  function addTask(task: string): void {
    setTask([...tasks, task]);
  }

  function deleteTask(elem: string) {
    setTask(tasks.filter((task) => task !== elem));
  }

  return { addTask, tasks, deleteTask };
}
