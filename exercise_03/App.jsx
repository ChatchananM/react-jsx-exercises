import React, { useState } from "react";

const App = () => {
	const temperature = 25;

	return (
		<>
		  <Header temperature={temperature} />
		  <Content temperature={temperature}/>
		  <Footer />
		</>
	  );
};

const Header =({temperature}) => {
	return (
	  <div>
		<button>ON/OFF</button>
		<span>Current Temperature: {temperature}℃</span>
	  </div>	
	);
  };
  
  const Content=({temperature}) =>{
	return (
	  <div>
		<Temperature temperature={temperature} />
	  </div>
	);
  }
  
  function Temperature({temperature}) {
	return <div>{temperature} ℃</div>;
  }
  
  function Footer() {
	return (
	  <div>
		<button>Down</button>
		<button>Up</button>
	  </div>
	);
  } 

export default App;
