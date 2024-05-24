import React,{useState} from 'react'
import "../css/Bookservice.css";
import Bookservhid from "./Bookservhid"

const Bookservice = ({name , arr}) => {

  const[ser, setser]= useState(false);
  const[ bdr , setbdr] = useState("none")
    const cser = ()=>{

        console.log("Hello");
        if(ser===false){
            setser(true);
            setbdr("1px dashed white");
        }
        else{
            setser(false);
            setbdr("none");
        }
    }
  return (
    <div class="bookoserv">
        <div class="d11" onClick={cser}>
            <div class="d111" style={{border: bdr}}>
              <h5>{name}</h5>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          {
            arr.map((data)=>{
               return ser && <Bookservhid name={data.hdata} time={data.time}/>
            })
          }
    </div>
  )
}

export default Bookservice