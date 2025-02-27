import './App.css'

const api = {
  key: 'ba96337e554f535cf764f571a955cb3e',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input
           type='text'
           className='search-bar'
           placeholder='search...'>
           </input>
        </div>

      </main>
    </div>
  )
}

export default App
