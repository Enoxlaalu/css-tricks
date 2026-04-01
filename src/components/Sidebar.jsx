import s from './Sidebar.module.css'

function Sidebar({ tricks, activeId }) {
  return (
    <nav className={s.sidebar}>
      <span className={s.label}>Demos</span>
      <ul className={s.list}>
        {tricks.map(({ id, title }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`${s.link}${activeId === id ? ` ${s.linkActive}` : ''}`}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
