import { useState } from "react";

export default function CreateCar() {
    let [make, setMake] = useState("");
    let [model, setModel] = useState("");
    let [year, setYear] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Create a car");
        const Car = {
            make,
            model,
            year,
        }
        console.log(Car);
        window.location = "/";
    }

    return(
        <div>
            <h1>Create car</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    Make
                    <br />
                    <input 
                        type="text"
                        value={make.value} 
                        onChange={(e) => setMake(e.target.value)}/>
                </label>
                <br />
                <label>
                    Model
                    <br />
                    <input 
                        type="text"
                        value={year.value} 
                        onChange={(e) => setModel(e.target.value)}/>
                </label>
                <br />
                <label>
                    Year
                    <br />
                    <input 
                        type="text"
                        value={year.value} 
                        onChange={(e) => setYear(e.target.value)}/>
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