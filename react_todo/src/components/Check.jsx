import React from 'react'

const Check = ({task}) => {
  return (
    <div className='text-red-600'>{task.task}</div>
  )
}

export default Check