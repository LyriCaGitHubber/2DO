import React from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps): JSX.Element {
  return (
    <header>
      <h2 className={styles.appTitle}>{title}</h2>
      <div></div>
    </header>
  );
}
