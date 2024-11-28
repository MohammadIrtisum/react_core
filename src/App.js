import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const product=[
    {pname:"PhotoShop", price:"$99.90"},
    {pname:"Illustrator", price:"$79.90"}

  ]
  const friend =[
    {name:"Mohammad", age:'19'},
    {name:"Irtisum", age:'21'},
    {name:"Shapin", age:'21'}

  ]

  // const productNames=product.map(product=>product);
  // console.log(productNames)
  return (
    <div className="App">
      <header className="App-header">
        <h1>My react</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            product.map(product=><li>{product.pname}</li>)
          }
        </ul>
        {
          product.map(product=><Product product={product}></Product>)
        }
        {/* <Product product={product[0]}></Product> */}
        {/* <Person name="ShaPIN"></Person> */}
      </header>
    </div>
  );
}

function Person(Props){
  const PersonStyle={
    border:'2px solid red',
    margin:'10px',
    padding:'15px'

  }
  return (
    <div style={PersonStyle}>
      <h1>Name:{Props.name}</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}

function Product(props){
  const ProductStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    weight:'200px',
    float:'left',
    padding:'15px',
    color:'black'
  }
  return (
    <div style={ProductStyle}>
      <h3>{props.product.pname}</h3>
      <h2>{props.product.price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [count,setCount] = useState(10);
  const hundleIncrase = () => {
    const newCount = count+1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={hundleIncrase}>Incrase</button>
      <MovieDisplay movies = {count}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){

  return(
    <h4>Movies I Have acted:{props.movies}</h4>

  )
}

function Users(){
 const [users,setUsers] = useState([]);
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUsers(data));
 }
)
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
       {
         users.map(user=><li>{user.name}</li>)
       }
      </ul>
    </div>
  )
}
  
export default App;
