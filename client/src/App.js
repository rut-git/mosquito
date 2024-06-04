import './App.css';
// import TemplateDemo from './component/NavBar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from './component/Register';
import { Provider } from 'react-redux';
import Menu from './component/Menu';
import RealTimeGraphPage from './component/RealTimeGraphPage';
import A from "./component/A"
import FirstComponent from "./component/FirstComponent"
// import "primeicons/primeicons.css"
// import "primereact/resources/primereact.min.css"

function App() {
  return (
    // <Provider >
    <BrowserRouter>
      <div className="App">
        {/* <TemplateDemo /> */}
        <Routes>
          <Route path="/realTimeGraphPage" element={<RealTimeGraphPage />} />
          <Route path="/register" element={<RegistrationForm />} /> 
          <Route path="/firstComponent" element={<FirstComponent />} />
          <Route path="/buzz" element={<A />} />
          <Route path="/thank-you" element={<Menu />} />


        </Routes>

      </div></BrowserRouter>
    // </Provider>

  );
}

export default App;
