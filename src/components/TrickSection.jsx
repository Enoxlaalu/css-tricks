import s from './TrickSection.module.css'

function TrickSection({ id, title, description, tags, support, component }) {
  return (
    <section id={id} className={s.section}>
      <div className={s.header}>
        <h2>{title}</h2>
        <div className={s.meta}>
          <div className={s.tags}>
            {tags.map((tag) => (
              <code key={tag}>{tag}</code>
            ))}
          </div>
          {support && <span className={s.support}>{support}</span>}
        </div>
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.demo}>{component}</div>
    </section>
  )
}

export default TrickSection
