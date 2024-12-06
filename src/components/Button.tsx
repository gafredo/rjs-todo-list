import React from 'react';

import styles from './Button.module.css';

export default function Button({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
