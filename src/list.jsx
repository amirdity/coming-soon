function List(props){
  const fruits=[{id:1, name: "apple", calories:95},
                {id:1, name: "banana", calories:95},
                {id:1, name: "orenge", calories:95},
                {id:1, name: "watermelon", calories:95},
                {id:1, name: "jsx", calories:95},
                {id:1, name: "next.js", calories:95}];

  const items= fruits.map(fruit=> <li key={fruit.id} >
                                       {fruit.name} : 
                                       <b> {fruit.calories} </b>
                                        </li>)

  const itemList = props.item;
  const category = props.category
  return(
    <>
    <h1> {category} </h1>
    <ul> {items} </ul>
    </>
    

  );
}
export default List;