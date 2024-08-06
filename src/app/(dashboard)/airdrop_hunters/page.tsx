import Airdrops from '@/components/shared/airdrops'
import React from 'react'

const AirdropHunters = () => {
  return (
    <div>
      {/* @ts-expect-error */} 
      <Airdrops />
    </div>
  )
}

export default AirdropHunters
