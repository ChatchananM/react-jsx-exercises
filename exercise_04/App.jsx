import React, { useState } from "react";

const App = () => {
	const [temperature, setTemperature] = useState(25); // Initial temperature value

	const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
	const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);

	return (
		<>
		<Header temperature={temperature} />
		<Content temperature={temperature}/>
		<Footer onDecrease={decreaseTemperature}
                onIncrease={increaseTemperature}/>
		</>
	);
};

const Header = ({ temperature }) => {
    return (
      <div>
        <button>ON/OFF</button>
        <span>Current Temperature: {temperature} ℃</span>
      </div>
    );
  };

const Content = ({ temperature }) => {
    return (
      <div>
        <Temperature temperature={temperature} />
      </div>
    );
};
  
function Temperature({ temperature }) {
    return <div>{temperature} ℃</div>;
}

const Footer=({onDecrease, onIncrease})=> {
	return (
	  <div>
		<button onClick={onDecrease}>Down</button>
		<button onClick={onIncrease}>Up</button>
	  </div>
	);
  } 

export default App;