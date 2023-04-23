// import React from "react";
// import { useState } from "react";

// const Footer = () => {
//   const [todo, setTodo] = useState([
//     { id: 1, text: "Buy Milk", completed: false },
//     { id: 2, text: "Do laundry", completed: false },
//     { id: 3, text: "Clean the House", completed: false },
//   ]);

//   const handleToggleTodo = (id) => {
//     setTodo((prevState) =>
//       prevState.map((data) =>
//         data.id === id ? { ...data, completed: !data.completed } : data
//       )
//     );
//   };

//   const [selectedColor, setSelectedColor] = useState("#000000");
//   const colors = [
//     "#000000",
//     "gray",
//     "#FF0000",
//     "#00FF00",
//     "#0000FF",
//     "#FFFF00",
//     "#FF00FF",
//     "#00FFFF",
//   ];

//   const handleClick = (color) => {
//     setSelectedColor(color);
//   };
//   return (
//     <div>
//     <div>
//       {todo.map((data, id) => {
//         return (
//           <div key={id}>
//             <input
//               type="checkbox"
//               checked={data.completed}
//               onChange={() => handleToggleTodo(data.id)}
//             />
//             <label
//               style={{ textDecoration: data.completed ? "line-through" : "" }}>
//               {data.text}
//             </label>
//           </div>
//         );
//       })}
//     </div>
//     <div>
//         {colors.map((color, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: color,
//               width: "30px",
//               height: "30px",
//               display: "inline-block",
//               margin: "5px",
//               cursor: "pointer",
//               border: `1px solid ${
//                 color === selectedColor ? "black" : "white"
//               }`,
//             }}
//             onClick={() => handleClick(color)}
//           />
//         ))}
//       </div>
//       <div
//         style={{
//           marginTop: "10px",
//           backgroundColor: selectedColor,
//           width: "50px",
//           height: "50px",
//           border: "1px solid black",
//         }}
//       />
//     </div>
    
//   );
// };

// export default Footer;
