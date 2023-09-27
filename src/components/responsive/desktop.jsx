'use client'
import dynamic from 'next/dynamic'
const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
})

function Desktop({ children }) {
  return <MediaQuery minWidth={992}>{children}</MediaQuery>
}

export default Desktop
