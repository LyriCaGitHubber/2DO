import React, { useState } from 'react';
import styles from './Homepage.module.css';
import { TaskCards } from '../../components/TaskCards/TaskCards';
import Button from '@mui/material/Button';

export default function Homepage(): JSX.Element {
  const [klicked, setKlicked] = useState(false);
  const [task, setTask] = useState([
    {
      id: 1,
      task: 'lernen von React',
    },
    {
      id: 2,
      task: 'lernen von HTML',
    },
    {
      id: 3,
      task: 'lernen von CSS',
    },
    {
      id: 4,
      task: 'lernen von Angular',
    },
  ]);
  return (
    <div className={styles.container}>
      <header>
        <h1>ToDoList</h1>
      </header>
      <main>
        <section>
          <Button
            variant="contained"
            onClick={() => {
              console.log(klicked);
              setKlicked(!klicked);
            }}
          >
            Hinzufügen
          </Button>
        </section>
        {!klicked &&
          task.map((task) => <TaskCards id={task.id} task={task.task} />)}
      </main>
    </div>
  );
}
