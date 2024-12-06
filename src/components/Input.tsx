import React from 'react';

import styles from './Input.module.css';

export default function Input({
  ...rest
}: React.InputHTMLAttributes<HTMLElement>) {
  return <input {...rest} className={styles.input} />;
}
