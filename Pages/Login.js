import React, {useState} from "react";
import  axios  from "axios";
//import { useHistory } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    //let history = useHistory();
  //  const {occupation} = useParams();

    const Connexion =  (e) => {
    	e.preventDefault();
      axios.post("http://localhost:3001/login", {
        username: username,
        password: password
      
      }).then((response) =>{

        if(response.data.logedIn){
          localStorage.setItem("logedIn", true);
          localStorage.setItem("username", response.data.username); 
           localStorage.setItem("occupation", response.data.occupation); 
           const occupation = response.data.occupation
           console.log(occupation)
           let EXIST_RP = occupation.indexOf("RP");
           let EXIST_CP = occupation.indexOf("CP");
           let EXIST_CI = occupation.indexOf("CI");

           if(EXIST_RP > -1){
          window.location.href = 'http://localhost:3000/affiche';

           }else if(EXIST_CP > -1){
           	window.location.href = 'http://localhost:3000/room';

          }else if(EXIST_CI > -1){
            window.location.href = 'http://localhost:3000/liste';

           	}else{
           		window.location.href = 'http://localhost:3000/login';
           	}
        } else {
          setErrorMessage(response.data.message);
        }
      });
    

    };

    return(
        <div className="container">
            <div className="row mt-4">
                    <h4 className="text-center mb-4">Login</h4>


                            <input
                             placeholder="username"  
                             onChange={(e) => {
                                setUsername(e.target.value);
                              }}
                             required
                            />
                            <input  
                            placeholder="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            required
                            />
                            <button onClick={Connexion}>Login</button>
                            <h1 style={{color: "red"}}>{errorMessage}</h1>
                        </div>
                    </div>

    );
}

export default Login 