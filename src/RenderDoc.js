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
            <h3>Genre :{props.genre}</h3>
            <h4>Director: {props.director}</h4>
            <h4>Release Date : {props.release}</h4>
            <h4>Earnings : {props.earnings}</h4>
            <p>
               Languages : {props.languages}
            </p>
            <p>
                Plot: <br />
                {props.description}
            </p>
            {
              props.ratings != null 
              ?
              <ul>
              {
                props.ratings.map((rating) => {
                return(
                  <li>
                    {rating.Source}  <br />
                    {rating.Value}
                  </li>
                ) 
              }
              )
              } 
              </ul>
              :
              <div> </div>
            }
          </div>
        </div>
    )
}
export default RenderDoc ;