import {Provider} from 'react-redux';
import Matches from './components/Matches';
import MatchesList from './components/MatchesList';
import { Store } from './Redux/store';

function App() {
  

  return (
    <>
      <Provider store={Store}>
        <Matches/>
        
        <MatchesList/>
      </Provider>
    </>
  )
}

export default App

