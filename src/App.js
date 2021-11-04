import './App.css';
import SideNav from './components/sideNav/sideNav';
import MainArea from './components/mainArea/mainArea';

function App() {
  return (
      <div className="App">
        <div className="main-content">
          <section className="side-nav">
            <SideNav />
          </section>
          <section className="main-area">
            <MainArea />
          </section>
        </div>
        <section className="music-player"></section>
      </div>
  );
}

export default App;
