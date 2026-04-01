import s from './BubbleHoverButton.module.css'

const BubbleHoverButton = () => {
  return (
    <button className={s.button}>
      <span className={s.btnContent}>Hover me</span>
      <div className={s.btnCells}>
        {Array(20)
          .fill('')
          .map((_, i) => {
            return <span key={i}></span>
          })}
      </div>
    </button>
  )
}

export default BubbleHoverButton
