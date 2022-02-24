import './css/App.css';
import HomeCard  from './components/HomeCard';
import CalenderCard from './components/CalenderCard';
import Activities from './components/Activities';

function App() {
  return (
    <div className="App">
      <HomeCard/>
      {/* <CalenderCard/> */}
      <Activities/>
    </div>
  );
}

export default App;
