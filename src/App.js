import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <div className="container">
      <div className="container__content">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
