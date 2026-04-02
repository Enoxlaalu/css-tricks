import { useEffect, useState } from 'react'

function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null)

  useEffect(() => {
    const activeMap = {}

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          const idx = ids.indexOf(id)

          if (entry.isIntersecting) {
            activeMap[idx] = id
          } else {
            delete activeMap[idx]
          }
        })

        setActiveId(Object.values(activeMap)[0] ?? null)
      },
      { rootMargin: '-80px 0px 0px 0px' },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return activeId
}

export default useActiveSection
