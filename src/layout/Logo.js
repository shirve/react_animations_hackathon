import { useEffect } from 'react'
import { animated, useSprings } from 'react-spring'

const title = 'Animations galore'.split('')

const configFn = (index) => ({
  to: [{ top: 6 }, { top: 0 }, { top: -6 }, { top: 0 }],
  from: { top: 0 },
  delay: index * 16 * 6,
  config: { duration: 200 },
})

export const Logo = () => {
  const [springs, api] = useSprings(title.length, configFn)

  useEffect(() => {
    const int = setInterval(() => {
      api.start(configFn)
    }, 10_000)

    return () => clearInterval(int)
  })

  return (
    <>
      {springs.map((style, index) => (
        <animated.span key={index} className="relative" style={style}>
          {title[index]}
        </animated.span>
      ))}
    </>
  )
}
