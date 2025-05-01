import { useState } from "react";

function TrafficLight() {
const [ selectedLight, setSelectedLight ] = useState("red");

return (
    <div> 
            <div className="trafficTop">
            </div>
            <div className="trafficBody">
                <div onClick={() => setSelectedLight("red")} className={"red light " + (selectedLight === "red" ? " selected" : "")}></div>
                <div onClick={() => setSelectedLight("yellow")} className={"yellow light "+ (selectedLight === "yellow" ? " selected" : "")}></div>
                <div onClick={() => setSelectedLight("green")} className={"green light " + (selectedLight === "green" ? " selected" : "")}></div>
            </div>
        </div>
    )
};


export default TrafficLight; 