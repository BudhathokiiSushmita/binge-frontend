import '../App.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { useEffect } from 'react';

function App() {

  return (
    <div className="binge-main">
      <Header></Header>
      <Body></Body>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default App;
