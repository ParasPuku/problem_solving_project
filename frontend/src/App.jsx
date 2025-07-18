import './App.css'
import FetchApiData from './projects/fetching_api_data/FetchApiData'
import DarkLightMode from './projects/dark_light_mode/DarkLightMode'

function App() {
  return (
    <>
     <div className="api-data-wrapper">
      {/* <FetchApiData /> */}
      <DarkLightMode />
     </div>
    </>
  )
}

export default App
