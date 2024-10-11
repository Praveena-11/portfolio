import React from 'react'
import './Projects.css'
import mywork_data from '../assets/mywork_data'
import arrow_icon from '../assets/arrow_icon.png'

export const Projects = () => {
  return (
    <div id='projects' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Works</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
          return <img key={index} src={work.w_img}/>
        })}
      </div>
      <div className='mywork-showmore'>
        <p>Show More</p>
        <img src={arrow_icon}alt=''/>
      </div>
    </div>
  )
}
