import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = {shipCode: "", shipName: "", IMO: "", DWT: "", Flag: "", naftoreCode: "", navarinoCode: "", Subnet: "", Gateway: "", Connection: "", dataType: "", dataPerMonth: ""};
  const [formValues, setFormValues]=useState(initialValues);
  const [formErrors, setFormErrors]=useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
   // console.log(formValues);

  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues)); 
    setIsSubmit(true);
  };


  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors]);


  const validate =  (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.shipName){
        errors.shipName = "shipname is required!";
    }
      if(!values.shipCode){
          errors.shipCode = "Ship code is required!";
      } 

      
      if(isNaN(values.shipCode)){
          errors.shipCode = "Ship Code must be number";
        }
      
      

        //check imo for number

      if(values.Flag.length !== 2 && values.Flag !== ""){
        errors.Flag = "Flag code must be 2 letters!"
      }
     
      
      
      

      if(!values.Subnet){
          errors.Subnet = "Subnet is required!"
      }

      if(!values.Gateway){
        errors.Gateway = "Gateway is required!"
    }
    
    if(!values.Connection){
      errors.Connection = "Connection is required!"
  } else if (values.Connection.toUpperCase() !== "4G" && values.Connection.toUpperCase() !== "FBB" && values.Connection.toUpperCase() !== "VSAT"){
    errors.Connection = "Must be either 4G, FBB, or VSAT"
  }

  if(!values.dataType){
    errors.dataType = "data type is required!"
} else if (values.dataType.toUpperCase() !== "MB" && values.dataType.toUpperCase() !== "GB"){
  errors.dataType = "Must be either MB or GB"
}

  //make number error for DataPerMonth``

      return errors;
    };


  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className = "ui message success" >Signed in successfully</div>
        ) :  ( 
           <pre>{ JSON.stringify(formValues, undefined, 2)}</pre>
        )}

    <form onSubmit={handleSubmit}>
      <h1>Add New Vessel</h1>
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">
          <label>Ship Code</label>
          <input
            type="text"
            name="shipCode"
            placeholder="shipCode"
            value={ formValues.shipCode}
            onChange={handleChange}
            
          />
          
        </div>
       <p>{ formErrors.shipCode}</p>
       <div className="field">
          <label>shipName</label>
          <input
            type="text"
            name="shipName"
            placeholder="Ship Name"
            value={ formValues.shipName}
            onChange={handleChange}
            
          />
        </div>
        <p>{ formErrors.shipName}</p>
        <div className="field">
          <label>IMO</label>
          <input
            type="text"
            name="IMO"
            placeholder="IMO"
            value={ formValues.IMO}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.IMO}</p>
        <div className="field">
          <label>DWT</label>
          <input
            type="text"
            name="DWT"
            placeholder="DWT"
            value={ formValues.DWT}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.DWT}</p>

        <div className="field">
          <label>Flag</label>
          <input
            type="text"
            name="Flag"
            placeholder="Flag"
            value={ formValues.Flag}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.Flag}</p>



        <h1>External Code</h1>


      <div className="navarinoCode"></div>
        <div className="field">
          <label>Navarino Code</label>
          <input
            type="text"
            name="navarinoCode"
            placeholder="Navarino Code"
            value={ formValues.navarinoCode}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.navarinoCode}</p>


        <div className="field">
          <label>Naftore Code</label>
          <input
            type="text"
            name="naftoreCode"
            placeholder="Naftore Code"
            value={ formValues.naftoreCode}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.naftoreCode}</p>

        <h1>Network</h1>


        <div className="field">
          <label>Subnet</label>
          <input
            type="text"
            name="Subnet"
            placeholder="Subnet"
            value={ formValues.Subnet}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.Subnet}</p>

        <div className="field">
          <label>Gateway</label>
          <input
            type="text"
            name="Gateway"
            placeholder="Gateway"
            value={ formValues.Gateway}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.Gateway}</p>

        <h1>Satelite Connection</h1>


        <div className="field">
          <label>Connection</label>
          <input
            type="text"
            name="Connection"
            placeholder="(4G, FBB, VSAT)"
            value={formValues.Connection}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.Connection}</p>

        <div className="field">
          <label>Data type</label>
          <input
            type="text"
            name="dataType"
            placeholder="(MB,GB)"
            value={formValues.dataType}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.dataType}</p>


        <div className="field">
          <label>Data Per Month</label>
          <input
            type="text"
            name="dataPerMonth"
            placeholder="data per month"
            value={formValues.dataPerMonth}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.dataPerMonth}</p>



        <button className="fluid ui button blue">Submit</button>
      </div>
    </form>
  </div>
  );
}

export default App;
