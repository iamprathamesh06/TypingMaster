import React,{useState,useEffect} from 'react';

function App() {



  const [theme, setTheme] = useState('dark'); 

  const handleThemeSwitcher = () => {
    console.log("clicked")
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    console.log("done with execution");
  };

  const setDefaultTheme = () => {
    document.documentElement.classList.toggle('dark',theme === 'dark');
    console.log("Executed once.");
  }

  useEffect(()=>{
    setDefaultTheme();
  })

  return (
    <div>
      <div className='dark:bg-bgColor'>
        <button onClick={handleThemeSwitcher}>change theme</button>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default App;