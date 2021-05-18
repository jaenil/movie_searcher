import React from 'react' ;
import './App.css'

const RenderDoc = (props) => {
    return(
        <div className='RenderDoc'>
          <div className='item1'>
            <img src={props.image} className='image'/>
          </div>
          <div className='item2'>
            <h2>{props.title}</h2>
            <h4>Release Date : {props.release}</h4>
            <h4>Director: {props.director}</h4>
            <p>
               Languages : {props.languages}
            </p>
            <p>
                Plot: <br />
                {props.description}
            </p>
          </div>
        </div>
    )
}
export default RenderDoc ;