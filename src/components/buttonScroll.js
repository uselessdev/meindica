import React, {  useState } from 'react'
import { Button } from './button'

export function ButtonScroll({ children, ...props }) {
  const [showScroll, setShowScroll] = useState(false)

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > window.innerHeight){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= window.innerHeight){
      setShowScroll(false)
    }
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <Button
      color="blue.100"
      borderColor="blue.100"
      onClick={scrollTop}
      position="fixed"
      zIndex={1000}
      cursor="pointer"
      bottom={5}
      right={5}
      rightIcon="arrow-up"
      display= {showScroll ? 'flex' : 'none'}
      _hover={{
        backgroundColor: 'blue.100',
        color: 'white',
      }}
      _focus={{
        backgroundColor: 'blue.100',
        color: 'white',
      }}
      _active={{
        backgroundColor: 'blue.100',
        color: 'white',
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
