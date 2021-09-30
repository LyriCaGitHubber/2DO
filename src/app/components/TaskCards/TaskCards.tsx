import React from 'react';

export type TaskCardProps = {
  task: string;
  id: number;
};

export function TaskCards({ task, id }: TaskCardProps): JSX.Element {
  return (
    <section>
      <p>{task}</p>
      <p>{id}</p>
    </section>
  );
}
