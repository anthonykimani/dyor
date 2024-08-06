import { Podcasts } from '@/components/landing-page/Podcasts'
import React from 'react'

const PodcastEpisodes = () => {
  return (
    <div>
      {/* @ts-expect-error */}
      <Podcasts />
    </div>
  )
}

export default PodcastEpisodes
