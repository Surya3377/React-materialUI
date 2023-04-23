import "./App.css";
// import Bootstrap from "./Bootstrap/Bootstrap";
// import Delete from "./Components/Delete";
// import Header from "./Components/Header/Header";
// import Post from "./Components/Post";
// import Users from "./Components/Users";
// import Todo from "./Components/Todo";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Comments from "./Components/Header/Comments";
// import Quotes from "./Components/Quotes";
// import Material from "./Components/MaterialUi/Material";
// import Spinner from "./Components/Spinner/Spinner";
// import { useEffect, useState } from "react";
// import Filter from "./Components/Filter";
// import Revision from "./Revision/Revision";
// import Products from "./Shopping Website/Products";
// import Practice from "./Components/Practice/Practice";
import Layout from "../src/Components/antd/Layout/Layout";



const App = (num) => {
// const[isLoading,setIsLOading] = useState(false);

// useEffect( () => {
//   setIsLOading(true);
//   setIsLOading(false)
// },[])


  

  return (
    <div>
      {/* <BrowserRouter>
        <Header />
        <Material />
        <Routes>
          <Route path="/Filter" element={<Filter />} />
          <Route path="/Delete" element={<Delete />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Comments" element={<Comments />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Quotes" element={<Quotes />} />
        </Routes>
      </BrowserRouter>
      {isLoading ? <p>Application Loaded Successfully</p> : <Spinner />}
       */}
      
      {/* <Revision /> */}
    {/* <Products /> */}
    <Layout />
    {/* <Practice /> */}
     {/* <Bootstrap /> */}
    </div>


 
  );
}

export default App;
