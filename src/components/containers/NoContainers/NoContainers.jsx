import s from './NoContainers.module.css'

const NoContainers = () => {
  return (
    <div className={`${s.contentGrid} ${s.flow}`}>
      <h1 className={s.siteTitle}>No more containers!</h1>
      <p>
        It can be useful to have a system in place that's easy to go full-width,
        or have a "breakout" section for calls to action or blockquotes, or
        other things you want to call attention to.
      </p>
      <p className={s.breakout}>
        Traditionally, we use a container or wrapper, which we need to close,
        and then open again, but thanks to grid, and with the recent additions
        of subgrid to all the evergreen browsers, maybe there's a better way to
        do things?
      </p>

      <section className={`${s.fullWidth} ${s.bgPrimary} ${s.sectionPadding} ${s.flow}`}>
        <h2>This section has a different background-color</h2>
      </section>

      <h2>Back to normal</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nam
        at praesentium cumque rem molestias earum officia neque nemo sunt
        laboriosam vero eum optio, saepe dolorem exercitationem quod asperiores
        iste?
      </p>
      <p className={`${s.breakout} ${s.callToAction}`}>
        Not sure why, but we could set things up if ever you wanted random text
        to be full-bleed.
      </p>
      <h3>Images as full-bleed works too</h3>
      <img className={s.fullWidth} src="https://unsplash.it/1600/400" alt="" />
      <p>
        Exercitationem dolorum animi at autem tempore omnis, dolorem saepe sint
        totam architecto, vitae cum doloribus
      </p>

      <section className={`${s.bgPrimary} ${s.fullWidth}`}>
        <h3>content</h3>
      </section>
    </div>
  )
}

export default NoContainers
