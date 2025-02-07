// import Home from './components/Home'
import Home from './components/Home'
function App() {
  const user = {
    name: 'sanjay',
    age: 20,
    address: {
      city: 'bangalore',
      state: 'karnataka',
    },
    details: {
      email: "sanjayrawat0570@gmail.com",
      phone: 6263801708
    }
  }

  return (
    <>
       < Home name={user.name} age={user.age} address={user.address} details={user.details} />
       
    </>
  )
}

export default App

