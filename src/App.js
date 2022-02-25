import './css/App.css';
import HomeCard  from './components/HomeCard';
import CalenderCard from './components/CalenderCard';
import Activities from './components/Activities';

import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomeCard/>
        {
          store.getState()?.isActivitiesCardActive ? <Activities/> : ""
        }
        {/* <CalenderCard/> */}
        
      </Provider>
    </div>
  );
}

export default App;
