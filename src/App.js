import React ,{useEffect,useState} from 'react'
import './App.css';
import Recipe from './Recipe'

const App = ()=>{

  const APP_ID='1a4cd6d0';
  const APP_KEY='4377c54a796f596b5055e909aff95e06';
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('meat');

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async ()=>{
    const response = 
    await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data =await response.json();
    setRecipes(data.hits);
    }

    const updateSearch= e=>{
      setSearch(e.target.value);
    }

    const getSearch= e=>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
    };

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Search here...."
        value={search} onChange={updateSearch}></input>
        <button className="search-btn" type="submit" >Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        img={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
