import cn from 'classnames'
import { useEffect } from 'react'
import { animated, useSprings } from 'react-spring'

export const Animator = ({
  text,
  animationConfigFn,
  className,
  interval = 15_000,
}) => {
  const [springs, api] = useSprings(text.length, animationConfigFn)

  useEffect(() => {
    const int = setInterval(() => {
      api.start(animationConfigFn)
    }, interval)

    return () => clearInterval(int)
  }, [animationConfigFn, api, interval])

  return (
    <>
      {springs.map((style, index) => (
        <animated.span
          key={index}
          className={cn({ [className]: !!className })}
          style={style}
        >
          {text[index]}
        </animated.span>
      ))}
    </>
  )
}
