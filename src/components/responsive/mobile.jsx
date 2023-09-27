'use client'

import dynamic from 'next/dynamic'
const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
})
function Mobile({ children }) {
  return <MediaQuery maxWidth={767}>{children}</MediaQuery>
}

export default Mobile
