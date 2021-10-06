import React from 'react';
import styles from './TaskCards.module.css';

export type TaskCardProps = {
  task: string;
  id: number;
  onClick: () => void;
};

export function TaskCards({ task, id, onClick }: TaskCardProps): JSX.Element {
  return (
    <section className={styles.taskCard}>
      <p>{id}</p>
      <p>{task}</p>
      <button onClick={onClick} className={styles.deleteButton}>
        x
      </button>
    </section>
  );
}
