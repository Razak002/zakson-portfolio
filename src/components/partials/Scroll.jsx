// import { useEffect, useState } from 'react'
// import { BiArrowFromBottom } from 'react-icons/bi'


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export const Scroll = () => {
//   const [isVisible, setIsVisible] = useState(false)

//   const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true)
//     } else {
//       setIsVisible(false)
//     }
//   }

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     })
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility)

//     return () => {
//       window.removeEventListener('scroll', toggleVisibility)
//     }
//   }, [])

//   return (
//     <div className="fixed bottom-2 right-2">
//       <button

//         type="button"
//         onClick={scrollToTop}
//         className={classNames(
//           isVisible ? 'opacity-100' : 'opacity-0',
//           'bg-zinc-800  hover:bg-gray-600 focus:ring-white inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2',
//         )}
//       >
//         <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
//       </button>
//     </div>
//   )
// }

import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
          'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500',
          'backdrop-blur-md shadow-lg shadow-pink-500/30',
          'transition-all duration-300 ease-in-out transform hover:scale-110',
          'focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2',
          'inline-flex items-center justify-center rounded-full p-3 text-white'
        )}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}
