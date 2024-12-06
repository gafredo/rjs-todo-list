import styled from './Header.module.css';
import logoTodo from '../assets/Logo.svg';

export function Header() {
  return (
    <header className={styled.header}>
      <img src={logoTodo} alt='Logotipo do todo' />
    </header>
  );
}
