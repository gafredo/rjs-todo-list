import styles from './Tasks.module.css';
import { ITask } from '../../@types/types';
import { Empty } from './Empty';
import { TaskItem } from './TaskItem';

type Props = {
  tasks: ITask[];
  removeTask: (id: number) => void;
  toggleTaskStatus: (id: number, completed: boolean) => void;
};

export function Tasks({ tasks, removeTask, toggleTaskStatus }: Props) {
  const tasksDone = tasks.reduce((acc, task) => {
    acc += task.completed ? 1 : 0;
    return acc;
  }, 0);

  return (
    <main className={styles.container}>
      <div className={styles.info}>
        <div className={styles.taskCreated}>
          Tarefas criadas
          <span className={styles.badgeCount}>{tasks.length}</span>
        </div>
        <div className={styles.taskDone}>
          Concluídas
          <span className={styles.badgeCount}>
            {tasksDone > 0 ? `${tasksDone} de ${tasks.length}` : '0'}
          </span>
        </div>
      </div>

      {tasks.length <= 0 ? (
        <Empty />
      ) : (
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              removeTask={removeTask}
              toggleTaskStatus={toggleTaskStatus}
            />
          ))}
        </div>
      )}
    </main>
  );
}
