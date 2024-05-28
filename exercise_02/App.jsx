// import React from "react";

const App = () => {
  const temperature = 25; //ตัวหลอก???

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

function Header() {
  return (
    <div>
      <button>ON/OFF</button>
      <span>Current Temparature = 25 &deg;C </span>
    </div>
  );
}

function Content() {
  return (
    <div>
      <Temparature />
    </div>
  );
}

function Temparature() {
  return <div>25 &deg;C</div>;
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
