import React from 'react'

const MobDataPage = () => {

  return (
    <div className="MobDataPage mb-5 ">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21].map(()=>{
        return(
            <>
            <div className="row fsm align-items-center mt-2 mx-1">
    <div className="col-7">
    <i>🏀 <span>india vs pakistan</span></i>
    </div>
    <div className="col-5">
    <div className="event_iconsyt d-flex">
    <div className="video-play-icon mx-3">⏯️</div>
    <span>Today 13:00</span>
    </div>

    </div>
    </div>
            </>
        )
    })}

    
    </div>
  )
}

export default MobDataPage