import { LiveShowContainer } from '@/components/shared/liveshows'
import React from 'react'

const LiveShowsPage = () => {
  return (
    <div>
      {/* @ts-expect-error */} 
      <LiveShowContainer />
    </div>
  )
}

export default LiveShowsPage
