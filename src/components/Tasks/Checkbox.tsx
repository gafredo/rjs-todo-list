import { Check } from '@phosphor-icons/react';
import styles from './Checkbox.module.css';
import { ITask } from '../../@types/types';

type Props = {
  task: ITask;
  toggleTaskStatus: (id: number, completed: boolean) => void;
};

export default function Checkbox({ task, toggleTaskStatus }: Props) {
  return (
    <div className={styles.container}>
      <label
        htmlFor='checkbox'
        onClick={() => {
          toggleTaskStatus(task.id, !task.completed);
        }}
      >
        <input readOnly type='checkbox' checked={task.completed} />
        <span
          className={`${styles.checkbox} ${
            task.completed
              ? styles['checkbox-checked']
              : styles['checkbox-unchecked']
          }`}
        >
          {task.completed && <Check size={12} />}
        </span>

        <p
          className={`${styles.paragraph} ${
            task.completed ? styles['paragraph-checked'] : ''
          }`}
        >
          {task.text}
        </p>
      </label>
    </div>
  );
}
