import React from 'react'

function FrameTypeImg({ card }) {
  return (
    <>
      <img src={`/images/frame-type-white/${card.frame_type}.png`} alt="フレームタイプ" className="frame-type-img"/>
    </>
  )
}

export default FrameTypeImg