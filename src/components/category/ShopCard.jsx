import React from 'react'

const ShopCard = (props) => {
  return (
    <div>

    <div style={{width:"300px",height:"350px"}}>
        <img className='img-fluid' onClick={props.onClick} src={props.image} alt='shopThumb'/>
        <h4>{props.name}</h4>
    </div>
    </div>

  )
}

export default ShopCard