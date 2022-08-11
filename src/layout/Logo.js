import { Animator } from 'shared'

const configFn = (index) => ({
  to: [{ top: 3 }, { top: 0 }, { top: -3 }, { top: 0 }],
  from: { top: 0 },
  delay: index * 16 * 6,
  config: { duration: 200 },
})

export const Logo = () => (
  <Animator
    text="Animations galore"
    animationConfigFn={configFn}
    className="relative"
  />
)
