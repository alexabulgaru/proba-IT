import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header></Header>
      </div>
      <div className="Landing">
        <Landing></Landing>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
