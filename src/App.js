import './App.css';
import { useEffect, useState } from "react";
import Popup from "./Popup.js";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [currency, setCurrency] = useState('INR');
  const [city, setCity] = useState('');
  const [population, setPopulation] = useState(1);
  const [percentage, setPercentage] = useState(1);
  const [oneHomeCost, setOneHomeCost] = useState(0);
  const [familySize, setFamilySize] = useState(4);
  const [totalCost, setTotalCost] = useState(0);
  const [shortenedTotalCost, setShortenedTotalCost] = useState(0);



  return (
    <div className="App">
      <div className='App-headings'>
        <div className='img-holder'>
          <img src="https://cdn.pixabay.com/photo/2015/09/09/17/19/light-bulb-931979_960_720.jpg" />
        </div>
        <div className='h1'><h1>Know the cost of eradicating homelessness from you city!</h1></div>
        <h3>Enter the details <span className='display-change arrow'> →</span> <span className='display-change below'> below</span></h3>
      </div>
      <div className='App-inner'>
        <form>
          <div className='currency-container'>
            Currency:
            <div className='radio-btn-container'>
              <div className='radio-btn' onClick={() => {
                setCurrency("INR");
              }}>
                <input type={'radio'} id='rupee' name='currency' value={currency} checked={currency === "INR"}/>
                INR
              </div>
              <div className='radio-btn' onClick={() => {
                setCurrency("USD");
              }}>
                <input type={'radio'} id='usd' name='currency' value={currency} checked={currency === "USD"}/> 
                USD
              </div>
            </div>
          </div>
          <label>
            City:
            <input id='city' value={city} onChange={ (event) => {
              setCity(event.target.value);
            }}/>
          </label>
          <label>
            Total city population (in millions):
            <input type={'number'} id='population'value={population} onChange={ (event) => {
              setPopulation(event.target.value);
            }}/>
          </label>
          <label>
            Percentage of Homeless people:
            <input type={'number'} id='percentage' value={percentage} onChange={ (event) => {
              setPercentage(event.target.value);
            }}/>
          </label>
          <label>
            {`Cost to build one home (in ${currency}): `}
            <input id='oneHomeCost' value={oneHomeCost} onChange={ (event) => {
              setOneHomeCost(event.target.value);
            }}/>
          </label>
          <label>
            {`Members in a family (on an average) :`}
            <input type={'number'} id='familySize' value={familySize} onChange={ (event) => {
              setFamilySize(event.target.value);
            }}/>
          </label>
        </form>
        <br></br>
        <div className='btn-container'>
          <button
            className='btn btn-calculate'
            onClick={() => {
              setButtonPopup(true);
              setTotalCost(((population*1000000)*(percentage/100)/familySize)*oneHomeCost);
              setShortenedTotalCost( () => {
                if(totalCost > 999999999){
                  return `${totalCost/1000000000}bn`;
                } else if (totalCost > 999999) {
                  return `${totalCost/1000000}mn`;
                } else {
                  return `${totalCost/1000}k`;
                }
              })
            }}
          >
            Calculate
          </button>
          <button 
            className='btn btn-reset'
            onClick={() => {
            setCurrency('INR');
            setCity('');
            setPopulation(1);
            setPercentage(1);
            setOneHomeCost(0);
            setFamilySize(4);
          }}>
            Reset
          </button>
        </div>
        <Popup 
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          city={city}
          population={population}
          percentage={percentage}
          oneHomeCost={oneHomeCost}
          familySize={familySize}
          currency={currency}
          totalCost={totalCost}
          shortenedTotalCost={shortenedTotalCost}
        ></Popup>
      </div>
    </div>
  );
}

export default App;
