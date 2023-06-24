import './App.css';
import Navbar from './components/Navbar';
import React ,{useState} from 'react';
import Textform from './components/Textform';
// import About from './components/about';
function App() {
  const [mode, setMode] = useState('light');
 
 const toggleMode=()=>{
        if(mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor='#0d246c'
        }
        else{
          setMode('light');
          document.body.style.backgroundColor='white'
          
        }
  }
  return (
    <>
   <Navbar mode={mode} toggleMode={toggleMode} />
   <div className='container'> 
     {/* <About/> */}
    <Textform heading="Enter your text " mode={mode}/>
   </div>
   
    </>
  );
}

export default App;
