
import './App.css';

import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="font-bold">
      <Body />
    </div>
    </Provider>
  );
}

export default App;


