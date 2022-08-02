import { useState } from "react";
import axios from "axios";

export default function CreateUser() {
    let [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Create an account");
        const User = {
            username: name
        }
        console.log(User);
        axios.post('http://localhost:5000/people/add', User)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        
        window.location = "/";
    }

    return(
        <div>
            <h1>Create User</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <br />
                    <input 
                        type="text" 
                        value={name.value} 
                        onChange={(e) => setName(e.target.value)}
                        required />
                </label>
                <br />
                <br />
                <input 
                    type="submit"
                    value="Submit" />
            </form>
        </div>
    );
}