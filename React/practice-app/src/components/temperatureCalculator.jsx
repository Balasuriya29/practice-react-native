import React, { Component, useState } from 'react';

function toCelsius(temp, scale) {
    if(scale === 'f')
        return (temp - 32) * 5 / 9;
    else
        return temp - 273.15;
}

function toFahrenheit(temp, scale) {
    if(scale === 'k')
        temp = toCelsius(temp, scale);
    
    return (temp * 9 / 5) + 32;
}

function toKelvin(temp, scale) {
    if(scale === 'f')
        temp = toCelsius(temp, scale);
        
    return temp + 273.15;
}


let scales = {
    c : 'Celsius', 
    f : 'Fahrenheit',
    k : 'Kelvin'
}

function tryConvert(temperature, convert, scale) {
    if(Number.isNaN(temperature)) return '';
    let temp = parseFloat(temperature);
    return Math.round((convert(temp, scale) * 1000)/1000).toString();
}

function FieldSet(props) {

    let handleChange = (e) => {
        props.onTemperatureChange(e.target.value);
    }
    
    // console.log(props);
    const temperature = props.temperature;
    const scale = props.scale;
    return (
        <fieldset style={{width: 500, padding: 10}}>
            <legend>Enter temperature in {scales[scale]}:</legend>
            <input value={temperature} onChange={handleChange}/>
        </fieldset>
    );
}

function setBoil(celsius) {
    if(celsius>=100) return true;
    else return false;
}

class TempCal extends Component {
    constructor(props){
        super(props);
        this.state = {temperature:'', scale:'c'};    
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }   

    handleCelsiusChange = (temperature) => {
        this.setState({
            temperature: temperature,
            scale: 'c'
        })
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({
            temperature: temperature,
            scale: 'f'
        })
    }

    handleKelvinChange = (temperature) => {
        this.setState({
            temperature: temperature,
            scale: 'k'
        })
    }

    render() { 
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = (scale === 'f'||scale==='k') ? tryConvert(temperature, toCelsius, scale) : temperature;
        const fahrenheit =(scale === 'c'||scale==='k') ? tryConvert(temperature, toFahrenheit, scale) : temperature;
        const kelvin =(scale === 'f'||scale==='c') ? tryConvert(temperature, toKelvin, scale) : temperature;
        const willBoil = setBoil(celsius);

        return (
            <div style={{margin: '10%'}}>
                <FieldSet 
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <br></br>
                <FieldSet
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <br></br>
                <FieldSet
                    scale="k"
                    temperature={kelvin}
                    onTemperatureChange={this.handleKelvinChange}
                />
                <br></br>
                <span>Water will </span> 
                {(!willBoil)?<span>not</span>:null}
                <span> Boil</span>
            </div>
        );
    }
}
 
export default TempCal;