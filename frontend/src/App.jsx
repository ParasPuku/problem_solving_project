import './App.css'
import FetchApiData from './projects/fetching_api_data/FetchApiData'
import DarkLightMode from './projects/dark_light_mode/DarkLightMode'
import Debounce_input_search from './projects/debounce_example/debounce_input_search'

function App() {
  return (
    <>
     <div className="api-data-wrapper">
      {/* <FetchApiData /> */}
      {/* <DarkLightMode /> */}
      <Debounce_input_search />
     </div>
    </>
  )
}

export default App
