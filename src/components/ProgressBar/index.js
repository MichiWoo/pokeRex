import React from 'react'
import { Progress } from './styles'

export const ProgressBar = ({width}) => {
  return (
    <Progress value={width}>
      <div className="progress progress-moved">
        <div className="progress-bar" >
        </div>                       
      </div> 
    </Progress>
  )
}
