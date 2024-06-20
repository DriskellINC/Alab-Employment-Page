import React from "react";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import "./app.css";

function App() {
  return (
    <div className="app">
      <HomePage />
      <EmployeePage />
    </div>
  );
}

export default App;






// function App() {

// function Card(props) {
//   return(
//     <div style={{border: "2px solid black"}}>
//       <Title heading={props.title} />
//       <p style={{fontFamily: "monospace"}}>{props.content}</p>
//     </div>
//   )
// }
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Welcome name= "Dionte" style={{border: "2px solid black"}}/>
//       <div className="container">

//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>

//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
        
       
//       </div>
     
//     </>
//   )
// }

// export default App
