import BubbleHoverButton from './components/buttons/BubbleHoverButton'

const tricks = [
  {
    id: 'bubble-hover-button',
    title: 'Bubble Hover Button',
    description:
      'Hover effect using CSS Anchor Positioning to track the hovered grid cell and expand a bubble fill across the button — no JavaScript.',
    tags: ['anchor-positioning', ':has()', 'transition-behavior', 'color-mix()'],
    support: 'Chrome 125+',
    component: <BubbleHoverButton />,
  },
]

export default tricks
