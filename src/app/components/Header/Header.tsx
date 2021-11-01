import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styles from './Header.module.css';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps): JSX.Element {
  return (
    <BrowserRouter>
      <header>
        <h2 className={styles.appTitle}>{title}</h2>

        <ul>
          <li>
            <Link to="/lists">Listen</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
      </header>
    </BrowserRouter>
  );
}
