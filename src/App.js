import React,{useState,useEffect} from 'react' ;
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import RenderDoc from './RenderDoc' ;
/* 
  input-name
  submit =query(name)
  by useeffect
  getResults()
*/
function App() {
  const APIKEY = '9e604928';

  // useState

  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  //useEffect 
  useEffect (() => {
    getResults()
  },[query]) ;

  const updateName = e => {
    setName(e.target.value) ;
  }

  const SubmitFunction = e =>{
    e.preventDefault() ;
    setQuery(name) ;
    setName('') ;
  }
  const ResetFunction = () => {
    setName('') ;
    setQuery('') ;
  }

  const getResults = async() => {
    fetch(`https://www.omdbapi.com/?t=${query}&apikey=${APIKEY}`)
      .then(data => data.json())
      .then(result => setResults(result)) 
      .catch(err => console.error(err)) 
  }

  return (
    <div className="App">
        <h1 className='heading'>Jaenil's Movie Searcher</h1>
        <form>
          <input 
          type='text' 
          className='input_name' 
          placeholder='Enter the name of the movie'
          value={name} 
          onChange={updateName}
          />
          <button className='submit_btn' type='submit' onClick={SubmitFunction}>Submit</button>    
          <button type='reset' onClick={ResetFunction} className='reset_btn'>Reset</button>   
        </form>
        <div>
        {
          results != null ?
          <RenderDoc 
          title={results.Title} 
          release={results.Released} 
          languages={results.Language}
          director={results.Director}
          description={results.Plot}
          image={results.Poster}
          /> 
          :
          <div> </div>
        }
        </div>
    </div>
  );
}

export default App;
