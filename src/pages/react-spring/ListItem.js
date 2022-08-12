import { useCallback, useRef } from 'react'
import { animated, useSpring } from 'react-spring'

export const ListItem = ({ car }) => {
  const [openStyles, openApi] = useSpring(() => ({
    immediate: true,
    from: { width: '300px', height: '87px' },
  }))
  const isOpen = useRef(false)

  const handleOpen = useCallback(() => {
    const order = isOpen.current
      ? {
          from: { width: '1216px', height: '538px' },
          to: { width: '300px', height: '87px' },
        }
      : {
          from: { width: '300px', height: '87px' },
          to: { width: '1216px', height: '538px' },
        }
    openApi.start(() => ({
      ...order,
      immediate: false,
    }))
    isOpen.current = !isOpen.current
  }, [openApi])

  const [deleteStyles, deleteApi] = useSpring(() => ({
    immediate: true,
    from: { x: 1, y: 1 },
  }))

  const handleDelete = useCallback(() => {
    deleteApi.start(() => ({
      from: { x: 1, y: 1 },
      to: [
        { x: 0, y: 1 },
        { x: 0, y: 0 },
      ],
      immediate: false,
    }))
  }, [deleteApi])

  // console.log(`deleteStyles.x: `, deleteStyles.x.to)
  // console.log(`deleteStyles.y: `, deleteStyles.y.to)
  return (
    <animated.div
      className="bg-white shadow overflow-hidden sm:rounded-lg mb-4"
      style={{
        ...openStyles,
        transform: deleteStyles.x.to(
          (x) => `scale(${x}, ${deleteStyles.y.to((y) => y)})`
        ),
        transformOrigin: 'left',
      }}
    >
      <div className="px-4 py-5 sm:px-6 flex">
        <div className="grow">
          <h3
            className="text-lg leading-6 font-medium text-gray-900 cursor-pointer"
            onClick={handleOpen}
          >
            {car.name}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{car.short}</p>
        </div>
        <div>
          <span className="relative z-0 inline-flex shadow-sm rounded-md">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-red-400 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              Delete
            </button>
          </span>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div>
              <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-base font-normal text-gray-900">
                    Top&nbsp;speed
                  </dt>
                  <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                    <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                      ${car.topSpeed}
                    </div>
                  </dd>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-base font-normal text-gray-900">Price</dt>
                  <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                    <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                      ${car.price}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <img
              src={car.url}
              alt={car.name}
              style={{ width: '716px', height: '240px' }}
            />
          </div>
        </dl>
      </div>
    </animated.div>
  )
}
