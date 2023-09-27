'use client'

import dynamic from 'next/dynamic'
const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
})

function Tablet({ children }) {
  return (
    <MediaQuery minWidth={768} maxWidth={991}>
      {children}
    </MediaQuery>
  )
}

export default Tablet
