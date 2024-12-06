import { Trash } from '@phosphor-icons/react';
import { ITask } from '../../@types/types';
import styles from './TaskItem.module.css';
import Checkbox from './Checkbox';

interface PropsItem {
  task: ITask;
  removeTask: (id: number) => void;
  toggleTaskStatus: (id: number, completed: boolean) => void;
}

export function TaskItem({ task, removeTask, toggleTaskStatus }: PropsItem) {
  return (
    <div className={styles.taskItem}>
      <Checkbox task={task} toggleTaskStatus={toggleTaskStatus} />

      <button
        onClick={() => {
          removeTask(task.id);
        }}
      >
        <Trash size={16} />
      </button>
    </div>
  );
}
