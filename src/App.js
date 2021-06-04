import {useState} from 'react';

import Layout from './Layout/Layout';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Editor from './Editor/Editor';
import Renderer from './Renderer/Renderer';

import './App.css';

const useWebComponent = () => {
  const[display, setDisplay] = useState('');

  const onChangeHandler = (e) =>{
    setDisplay(e); 
  }

  return {
    display: display,
    onchange: onChangeHandler
  }
}

function App() {
  const WebComponents = [
    { 'id' : 1,
      'type': 'h',
      ...useWebComponent()
    },
    { 'id' : 2,
      'type': 'p',
      ...useWebComponent()
    },
  ];

  return (
    <>
      <Header/>
        <Layout>  
          <Editor componentsToEdit={[...WebComponents]} />  
          <Renderer componentsToRender={[...WebComponents]}/>
        </Layout>
      <Footer/>
    </>
  );
}

export default App;
