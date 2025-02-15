import { useContext, useState } from "react";
import {IoMdAddCircleOutline} from 'react-icons/io'
import { Createcom } from "../Store/Create-context";
function Todoitem1() {
  const [names, setnames] = useState("");
  const [dates, setdates] = useState("");
  const cliks = () => {
    additem(names, dates);
    setnames("");
    setdates("");
  };
  const {additem}=useContext(Createcom);
  console.log(additem);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 ">
          <input required={true}
            type="text"
            value={names}
            placeholder="Enter The Todo"
            onChange={(e) => setnames(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dates}
            onChange={(e) => setdates(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success" onClick={cliks}>
          <IoMdAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem1;
