import React, { useEffect, useState } from 'react';
import useLocalStorageTask from '../../utils/useLocalStorageTask';
import styles from './Homepage.module.css';
import { TaskCards } from '../../components/TaskCards/TaskCards';
import Header from '../../components/Header/Header';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

export default function Homepage(): JSX.Element {
  const [disabled, setDisabled] = useState(true);
  const [taskValue, setTaskValue] = useState('');
  const { addTask, tasks, deleteTask } = useLocalStorageTask();

  useEffect(() => {
    if (taskValue === '') {
      setDisabled(true);
    }
  }, [taskValue, disabled]);

  return (
    <div className={styles.container}>
      <Header title="2 DO" />
      <main>
        <section>
          <Input
            required={true}
            color="primary"
            value={taskValue}
            onChange={(event) => {
              event.preventDefault();
              setTaskValue(event.target.value);
              {
                taskValue === '' ? setDisabled(true) : setDisabled(false);
              }
            }}
          />
          <Button
            disabled={disabled}
            variant="contained"
            onClick={() => {
              if (taskValue !== '') {
                addTask(taskValue);
              }

              setTaskValue('');
            }}
          >
            Hinzufügen
          </Button>
        </section>
        {tasks.map((task, index) => (
          <TaskCards
            task={task}
            id={index + 1}
            onClick={() => {
              deleteTask(task);
            }}
          />
        ))}
      </main>
    </div>
  );
}
