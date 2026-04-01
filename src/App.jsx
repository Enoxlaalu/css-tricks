import s from './App.module.css'
import tricks from './tricks'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TrickSection from './components/TrickSection'
import useActiveSection from './hooks/useActiveSection'

function App() {
  const activeId = useActiveSection(tricks.map(({ id }) => id))

  return (
    <div className={s.layout}>
      <Header count={tricks.length} />
      <div className={s.body}>
        <Sidebar tricks={tricks} activeId={activeId} />
        <main className={s.content}>
          {tricks.map((trick) => (
            <TrickSection key={trick.id} {...trick} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
