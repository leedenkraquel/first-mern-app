import { useState } from "react";

export default function EditPeople() {
    let [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Edit an account");
        const User = {
            username: name
        }
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