import './App.css';
import { NavBar } from './Components/NavBar';
import { MainPage } from './Pages/MainPage';

function App() {
  return (
    <div style={{"backgroundColor": "#121212"}} className="App">
      <NavBar />
      <MainPage />
    </div>
  );
}

export default App;
