import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";


function Main() {

    const [celsius,setCelsius] = useState('')
    const [fahrenheit,setFahrenheit] = useState('')

    return (
        <div>

            <TextField
                id="celsiusText"
                label="Celsius"
                value={celsius}
                helperText="Enter temperature in Celsius"
                onChange={(e) => setCelsius(e.target.value)}
            />

            <TextField
                id="fahrenheitText"
                label="Fahrenheit"
                value={fahrenheit}
                helperText="Enter temperature in Fahrenheit:"
                onChange={(e) => setFahrenheit(e.target.value)}
            />

        </div>
    );
}

export default Main;