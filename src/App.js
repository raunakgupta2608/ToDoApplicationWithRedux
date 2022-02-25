import './css/App.css';
import HomeCard  from './components/HomeCard';
import store from './redux/store';
import { Provider } from 'react-redux';
import RenderActivityCalender from './components/RenderActivityCalender';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomeCard />
        <RenderActivityCalender />
      </Provider>
    </div>
  );
}
// 
export default App;
