import s from './Header.module.css'

function Header({ count }) {
  return (
    <header className={s.header}>
      <span className={s.logo}>CSS Tricks</span>
      <span className={s.count}>{count} demo{count !== 1 ? 's' : ''}</span>
    </header>
  )
}

export default Header
