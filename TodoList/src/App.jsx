import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import Headertodo from "./Companent/Headertodo";
import Todoitem1 from "./Companent/TodoItem1";
import Allitem from "./Companent/Allitem";
import Error from "./Companent/Error";
import { Createcom } from "./Store/Create-context";
function App() {
  // let item=[
  //   {
  //     name:"govind",
  //     date:'12/12/2024'
  //   },
  // ];
  const mystyle = {
    maxWidth: "45%",
    border: "2px solid black",
    margin: "5% auto",
  };
  const [names, setname] = useState([]);
  const additem = (namee, datee) => {
    // console.log(namee,datee);
    // const newitem=[...names,{name:namee,date:datee}];
    setname((events) => [...events, { name: namee, date: datee }]);
  };
  const handlebuttons = (xx) => {
    let ss = names.filter((e) => e.name != xx);
    setname(ss);
  };
  return (
    <Createcom.Provider value={{ names, additem, handlebuttons }}>
      <div style={mystyle}>
        <center>
          <Headertodo></Headertodo>
          <Todoitem1 ></Todoitem1>
          <Error></Error>
          <Allitem ></Allitem>
        </center>
      </div>
    </Createcom.Provider>
  );
}
export default App;
