
import React, { useState } from "react";
import "./FormCreate.css";
import CustomAlert from "../../CustomAlert/CustomAlert";;

const FormCreate = (props) => {
                 
  const[currentAge , updatedAge]  = useState("");
  const[currentUsername , updatedUsername]  = useState("");


    //****************************  get age here  ************************************
    
    const GetAge = (e) => {
        console.log(e.target.value);
        updatedAge(e.target.value)
    }

    //*****************************  get username here   *****************************
  
    const GetUsename = (e) => {
        console.log(e.target.value);
        updatedUsername(e.target.value);
    }
    
   

    const sendValueHere = (event) => {
        event.preventDefault();
        if(currentUsername === ""){
            <CustomAlert message="Error occurred." type="error" />
            console.log("alert");
           alert("Credentail Alert // UserName not Filled !")
        }else if( currentAge <= 0 || currentAge > 120  ){
        //  CustomAlert("invalid Credentails")
        <CustomAlert message={"Error occurred."} type={"error"} />
            alert("Invalid Age 0 to 120 Range Allowed only ")
            console.log("alert");

        }else{
            props.sendValue(currentAge , currentUsername);  // this send value function will send value from there ..... 
        }
           updatedAge("");
           updatedUsername("");
    }


    return(
           
      <div className="Screen">
         <form onSubmit={sendValueHere}>
         <div className="form_Div" >
         <div className="form_UserName">
         
         <label>Username</label>
         <div>
            <input type="text" placeholder="USERNAME" value={currentUsername} onChange={GetUsename}/>
         </div>
          </div>

          <div className="form_Age">
         <label>Age(years)</label>
         <div>
            <input type="number" placeholder="AGE" value={currentAge} onChange={GetAge} />
         </div>
          </div>   
                    <div className="add-Button">
                        <button className="add-Button_d">Add User</button>
                    </div>
                    </div>
          </form>
         </div>  
    )
}

export default FormCreate;