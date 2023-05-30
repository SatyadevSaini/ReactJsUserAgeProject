
import React, { useState } from "react";
import FormCreate from "../FormCreate/FormCreate";
import "./PrintData.css";

const PrintData = (props) => {

 const [array , updatedArray]    = useState(
    [
        {age:23 , username:"Satya" , college:"UIT" , id:"jah"},
        {age:28 , username:"Vivek" , college:"GGSPU", id:"ah"}

    ] 
   );

const getValueFromFormCreate = (values1 , values2 , values3) => {
       
       updatedArray( prevArray => {
      
        const colllectingallData = [...prevArray];
           
        colllectingallData.unshift({age:values1 , username:values2 , college: values3 , id: Math.random.toString()});
    
        console.log(colllectingallData);
        console.log(values1 +"  "+ values2);
        console.log("Length of Array : "+colllectingallData.length);
         
        return colllectingallData // we have to return that array for future use ...

       });
    
       console.log("Final Array Sized " + array.length + "  " +array + " " + array[0].age);
         
     
}


  const valued = <div className="Printing_Data">
  {   
     array.map( ( value ) =>  
         <div className="printing_Div" key={value.id} >
        
       
   <div>  Name:{value.username  } {"||"} College:{value.college}  {"||"}Age:{  value.age+"(inYears)"} </div> 

             
      


         </div>
      )
     
  }
  </div>;


    
       

    return(
        <div>
            <FormCreate  sendValue = {getValueFromFormCreate}  />

            {valued}
             </div>
    )
}

export default PrintData;