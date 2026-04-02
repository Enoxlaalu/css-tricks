import BubbleHoverButton from './components/buttons/BubbleHoverButton'
import NoContainers from './components/containers/NoContainers/NoContainers'

const tricks = [
  {
    id: 'bubble-hover-button',
    title: 'Bubble Hover Button',
    description:
      'Hover effect using CSS Anchor Positioning to track the hovered grid cell and expand a bubble fill across the button — no JavaScript.',
    tags: [
      'anchor-positioning',
      ':has()',
      'transition-behavior',
      'color-mix()',
    ],
    support: 'Chrome 125+',
    link: 'https://www.youtube.com/watch?v=bjw0ka0raMA',
    component: <BubbleHoverButton />,
  },
  {
    id: 'no-containers',
    title: 'No More Containers',
    description:
      'A CSS Grid layout system that eliminates the need for wrapper divs. Content, breakout, and full-width columns are controlled purely via named grid lines and subgrid.',
    tags: ['grid', 'subgrid', 'named-lines', 'grid-template-columns'],
    support: 'All modern browsers',
    link: 'https://www.youtube.com/watch?v=c13gpBrnGEw',
    component: <NoContainers />,
  },
]

export default tricks
