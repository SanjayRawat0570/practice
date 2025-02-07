

import './App.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import ShowCounter from './components/ShowCounter'

function App() {

  return (
    <Provider store={store}>
      <ShowCounter/>
      </Provider>
  )
        
}

export default App
