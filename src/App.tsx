import { ITask } from './@types/types';
import { Header } from './components/Header';
import './global.css';

import styles from './App.module.css';
import { ChangeEvent, useEffect, useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { PlusCircle } from '@phosphor-icons/react';
import { Tasks } from './components/Tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState('');
  const storageKey = '@@ToDoList:v1.0.0';

  function SaveTasks(tasksToSave: ITask[]) {
    localStorage.setItem(storageKey, JSON.stringify(tasksToSave));
  }

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      completed: false,
    };

    setTasks((state) => {
      const newState = [...state, newTask];
      SaveTasks(newState);
      return [...newState];
    });
    setInputValue('');
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return;
    }

    setTasks(filteredTasks);
    SaveTasks(filteredTasks);
  }

  function handleToggleTask(id: number, completed: boolean) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
    SaveTasks(updatedTasks);
  }

  useEffect(() => {
    const storage = localStorage.getItem(storageKey);
    if (storage) {
      const sTasks = JSON.parse(storage) as ITask[];
      setTasks([...sTasks]);
    }
  }, []);

  return (
    <div>
      <Header />
      <section className={styles.container}>
        <div className={styles.infoContainer}>
          <Input
            placeholder='Adicione uma nova tarefa'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} weight='bold' />
          </Button>
        </div>

        <Tasks
          tasks={tasks}
          removeTask={handleRemoveTask}
          toggleTaskStatus={handleToggleTask}
        />
      </section>
    </div>
  );
}

export default App;
