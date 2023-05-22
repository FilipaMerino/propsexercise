import React from 'react'



function Card(props){

  console.log(props)


  return(
    <div className='card'>

      <div className='top'>
        <h2>{props.name}</h2>
        <img src={props.img}/>
      </div>

      <div className='bottom'>
        <p>{props.tel}</p>
        <p>{props.email}</p>

      </div>
    </div>
  )
};



export default Card;
