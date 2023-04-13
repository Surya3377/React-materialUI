// import React from "react";
// import { useState } from "react";

// import { useState } from "react"

// const Practice = () => {
//   const [fruits, setFruits] = useState({
//     names: ["Daniel", "Lucas", "Gwen", "Henry", "Jasper", "Lucas", "Daniel"],
//   });

// const removingRepeatedNames = fruits.names.filter( (vall,id,array) => {
//      return(
//         array.indexOf(vall) === id
//      )
// })

// OR

//   const newArray = [];

//   for (let i = 0; i < fruits.names.length; i++) {
//     if (newArray.indexOf(fruits.names[i]) === -1) {
//       newArray.push(fruits.names[i]);
//     }
//   }

//   return (
//     <div>
//       {newArray.map((data, id) => {
//         return <div key={id}>{data}</div>;
//       })}
//     </div>
//   );
// };

// export default Practice;

//REMOVING REPEATED LETTERS

// import { useState } from "react";

// const App = () => {
//   const [counter, setCounter] = useState({
//     names: ["Danieljxfkbngzmfdklmklcriugjnkfngfmrfjjjjjjdkmkmkxcmvvvvvvvvvvvvvvvv"]
//   });

//   const uniqueNames = counter.names.map(name => {
//     // Use Set to filter out duplicate characters
//     const uniqueChars = [...new Set(name)];
//     // Join the unique characters back into a string
//     return uniqueChars.join("");
//   });

//   return (
//     <div>
//       <h1>Removing Repeated letters:</h1>
//       <ul>
//         {uniqueNames.map((name, id) => (
//           <li key={id}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

//SHOW AND HIDE BUTTON

// import React from 'react'
// import { useState } from 'react'

// const Practice = () => {

//     const[show,setShow] = useState(false)
//   const clickHandler = () => {
//     setShow(!show)
//   }
//   return (
//     <div>
// <button onClick={clickHandler}>{show ?  "Hide Below Button" : "Show Below Button" }</button>
// {show && <div>Toggle Button</div>}
//     </div>
//   )
// }

// export default Practice

//  TWO WAY DATA BINDING

// import React from 'react'
// import { useState } from 'react'

// const Practice = () => {

//     const[vallue,setvallue]= useState("")

//     const textHandler = (event) => {
//         setvallue(event.target.vallue)
//     }

//   return (
//     <div>
//       <input type='text' vallue={vallue} onChange={textHandler}/> <br/>
//       {vallue}
//     </div>
//   )
// }

// export default Practice

//   Disable Button
//  import React from 'react'
// import { useState } from 'react'

// const Practice = () => {

//     const[vallue,setvallue]= useState("")

//     const textHandler = (event) => {
//         setvallue(event.target.vallue)
//     }

//   return (
//     <div>
//       <input type='text' vallue={vallue} onChange={textHandler}/> <br/>
//       <button disabled={vallue.length < 1}>submit</button>
//       {vallue}
//     </div>
//   )
// }

// export default Practice

//    Update Parent State Challenge (using Callback)

// import { useState } from "react";
// import Child from "./Child";

// import React from 'react'

// const Practice = () => {

//     const[vallue,setvallue]=useState("I need to be updated from my child")

//   return (
//     <div>
//       <div>
//         <h2>Parent</h2>
//         {vallue}
//         <h2>Child</h2>
//         <Child setvallue={setvallue} />
//       </div>
//     </div>
//   )
// }

// export default Practice;

//React children

// import React, { Children } from 'react'

// const Practice = ({children}) => {
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       {children}
//     </div>
//   )
// }

// export default Practice;

// import React, { useState } from 'react'

// const Practice = () => {
//     const[number1,setNumber1]=useState()
//     const[number2,setNumber2]=useState()
//     const[total,setTotal]=useState(0)

//     const  firstNumber = (event) => {
//         setNumber1(+event.target.vallue)
//     }
//     const  SecondNumber = (event) => {
//         setNumber2(+event.target.vallue)
//     }
//     const  addHandler = (event) => {
//         setTotal(number1 + number2)
//     }

//   return (
//     <div>
//       <h3>Adding Two Numbers</h3>
//       <input type='number' placeholder='First Number' onChange={firstNumber} /> <br/>
//       <input type='number' placeholder='Second Number' onChange={SecondNumber} /> <br/>
//       <button onClick={addHandler}>Add To Number</button><br/><br/>

//       <h4>Total:{total || ""}</h4>

//     </div>
//   )
// }

// export default Practice

// ADD/DELETE

// import React from "react";
// import { useState } from "react";
// import Child from "./Child";

// const Practice = () => {
//   const [addData, setData] = useState("");
//   const [todoData, setTodoData] = useState([]);

//   const addHandler = (event) => {
//     setData(event.target.vallue);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const newTodos = [...todoData, addData];
//     setTodoData(newTodos);
//     setData("")
//   };

//   const deleteHandler = (indexvallue) => {
//     const newTodos = todoData.filter((todoData, index) => index !== indexvallue);
//     setTodoData(newTodos);
//   };

//   return (
//     <div>
//       <div>
//         <input type="text" vallue={addData} onChange={addHandler} />
//         <button onClick={submitHandler}>ADD</button>
//       </div>
//       <div>
//         <Child todoData={todoData} deleteHandler={deleteHandler} />
//       </div>
//     </div>
//   );
// };

// export default Practice;

//SUM OF NUMBERS

// import React, { useState } from 'react';

// const Practice = () => {
//   const [numbers, setNumbers] = useState([1, 2, 3]);

//   const sumNumbers = () => {
//     const sum = numbers.map((num) => num + 2);
//     console.log(sum);
//   };

//   return (
//     <div>
//       <ul>
//         {numbers.map((number, index) => (
//           <li key={index}>{number}</li>
//         ))}
//       </ul>
//       <button onClick={sumNumbers}>Sum</button>
//     </div>
//   );
// };

// export default Practice;

//REPEATING NUMBERS

// import React, { useState } from 'react'

// const Practice = () => {

//  const[vallue,setvallue]= useState({
//   arr:[1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5]
//  })

//   const repeatedLetters = vallue.arr.filter( (vall,index,arr) => {
//          return arr.indexOf(vall) === index;

//   })

//   return (
//     <div>
//       {repeatedLetters.map( (num,id) => {
//         return (
//           <div key={id}>{num}</div>
//         )
//       })}
//     </div>
//   )
// }

// export default Practice;

//PALINDROME

// import React from 'react';

// const Practice = () => {

//   let string = "madam";

//     let reverseString = string.split("").reverse().join("");
//     console.log(reverseString)

//     if(string === reverseString) {
//       console.log(`${string} is a palindrome`)
//     }
//     else{
//       console.log(`${string} is not a palindrome`)
//     }
//   return (
//     <div>

//     </div>

//   )
// }

// export default Practice;

//FACTORIAL

// import React from 'react';

// const Practice = () => {

// const factorial = (num) => {
//  let result = 6;

//   for(let i = 2 ; i < num ; i ++) {
//      result *= i
//   }
//      return result;

// }

// console.log(factorial(6))

//   return (
//     <div>

//     </div>
//   )
// }

// export default Practice;

//SEPERATES NUMBERS AND ALPHABETS

// import React from "react";

// const Practice = () => {
//   let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];

//   const numbersAndLetters = (arr) => {
//     let numbers = [];
//     let alphabets = [];
//     let finalArray = [];

//     numbers = arr.filter((val) => {
//       return typeof val === "number";
//     });
//     alphabets = arr.filter((val) => {
//       return typeof val === "string";
//     });
//     finalArray = [...numbers,...alphabets];
//     console.log(finalArray)
//     return finalArray
//   };

//   numbersAndLetters(arr)

//   return <div></div>;
// };

// export default Practice;

//FIND VOWELS

// import React from 'react';

// const Practice = () => {

// const findVowels = (str) => {
//     const vowels = str.match(/[aeiou]/gi);
//     return vowels ? vowels.length : 0 ;
// }

// console.log(findVowels("hello"))
//   return (
//     <div>

//     </div>
//   )
// }

// export default Practice;

//FizzBuzz

// import React from 'react'

// const Practice = () => {
// for (let i = 0; i <= 100; i++) {
//   if( i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz")
//   }else if ( i % 3 === 0) {
//     console.log("Fizz")
//   }else if ( i % 5) {
//     console.log("Buzz")
//   }else {
//     console.log(i)
//   }
// }

//   return (
//     <div>

//     </div>
//   )
// }

// export default Practice;

                         //Reversing Order

// import React from "react";

// const Practice = () => {
//   let words = "Hello World";

//   const reversing = () => {
//     let reversingOrder = words.split("").reverse().join(" ");
//     console.log(reversingOrder);
//   };

//   reversing(words);

//   return <div></div>;
// };

// export default Practice;


