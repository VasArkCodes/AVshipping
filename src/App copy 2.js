import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = {shipCode: "", computerName: "", computerIp: "", Username: "", Password: "", password2: "", username2: ""};
  const [formValues, setFormValues]=useState(initialValues);
  const [formErrors, setFormErrors]=useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
   
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    
   

    //-----------------postVsl
    setIsSubmit(true);
   
  };

  


  useEffect(() => {

  },[formErrors]);

  const postData = () => {
    let shipCode = formValues.shipCode;
    console.log(shipCode);
  }

  const postValues = () => {
    console.log(formValues);
  }

  postValues();


  const validate =  (values) => {
      const errors = {};
      if(!values.computerName){
        errors.computerName = "computerName is required!";
    }
      if(!values.shipCode){
          errors.shipCode = "Ship code is required!";
      } else if (isNaN(values.shipCode)){
        errors.shipCode = "Ship Code must be number";
      }

      
      
      
      

      if(!values.computerIp){
          errors.computerIp = "computerIp is required!"
      }

      if(!values.Password){
        errors.Password = "Password is required!"
    }
    
    if(!values.Username){
      errors.Username = "Username is required!"
  } 


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
      <button onClick={() => postData()}>
        Post Data
      </button> 
      <h1>Computer info</h1>
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
          <label>computerName</label>
          <input
            type="text"
            name="computerName"
            placeholder="Computer Name"
            value={ formValues.computerName}
            onChange={handleChange}
            
          />
        </div>
        <p>{ formErrors.computerName}</p>
        <div className="field">
          <label>computerIp</label>
          <input
            type="text"
            name="computerIp"
            placeholder="computerIp"
            value={ formValues.computerIp}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.computerIp}</p>

        <h1>Credentials</h1>

        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="Username"
            placeholder="Username"
            value={ formValues.Username}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.Username}</p>

        <div className="field">
          <label>Password</label>
          <input
            type="text"
            name="Password"
            placeholder="Password"
            value={ formValues.Password}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.Password}</p>


      <div className="username2"></div>
        <div className="field">
          <label>Username 2</label>
          <input
            type="text"
            name="username2"
            placeholder="Username 2"
            value={ formValues.username2}
            onChange={handleChange}

          />
        </div>
        <p>{ formErrors.username2}</p>


        <div className="field">
          <label>Password 2</label>
          <input
            type="text"
            name="password2"
            placeholder="Password 2"
            value={ formValues.password2}
            onChange={handleChange}

          />

          
        </div>

        <button className="fluid ui button blue">Submit</button>
      </div>
    </form>
  </div>
  );
}

export default App;
