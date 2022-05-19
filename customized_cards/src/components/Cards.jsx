import React from 'react'

const Cards = (props) => {
  return (
    <>
      <h1>Cards</h1>
     <div className="mainbody" style={props.styling}>
         <div className="leftbody">
            <p>{props.date}</p>
            <button className='casebtn'>Case Study</button>
            <h1>{props.title}</h1>
            <p>{props.devices}</p>
         </div>
         <div className="rightbody">
             <figure>
                 <img src={props.logo} alt="" />
             </figure>
             <i class="fa-solid fa-arrow-right"></i>

         </div>

     </div>
    </>
  )
}

export default Cards;
