
function List(){

    const fruits = [{id: 1, name : "apple", calories:95},
                    {id: 2,name: "orange", calories:45 },
                    {id: 3,name: "banana", calories:105 },
                    {id: 4,name: "coconut", calories: 159 }];

    /*****************************DIFFERENT SORTING METHODS ********************/
    // fruits.sort((a,b) => a.name.localeCompare(b.name));  ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name))     // Reverse

    //If the result of a.calories - b.calories is negative, 
    //it means a should come before b in the sorted array.
    fruits.sort((a,b) => a.calories - b.calories)  // Calories ascending order

    /************   FILTERING BY CERTAIN CRITERIA ******************/
    // replace fruits by lowCalFruit 
    const lowCalFruit = fruits.filter(fruit => fruit.calories < 100 )

    // in the inspect => console, react wants us to assign a key for wach value.  
    // for that, we could use <li key = {fruit.name}> but in case 2 names are the same we insert 
    // another prop into the objects above
    const listItems = fruits.map(fruit => <li key={fruit.id}>Fruit: {fruit.name}, &nbsp;
                                                            <b>Calories: {fruit.calories}</b>  </li>);
    return(<ul>{listItems}</ul>); 
    
}

export default List;


// SIMPLE ARRAY OF STRINGS 
/*
    // if we were to return List in the App.jsx, we would get 1 continues word "appleoragebanana..."

    const fruits = ["apple", "orange", "banana", "coconut"];

    // use the map with arrow function to seperate each element in array 
    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    return(<ul>{listItems}</ul>); 
    */