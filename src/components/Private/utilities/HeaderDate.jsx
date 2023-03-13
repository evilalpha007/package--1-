import React from 'react'
import moment from 'moment'
const HeaderDate = () => {

  return (
    <div>
    {moment().format("MMM Do YY")}
    </div>
  )
}

export default HeaderDate