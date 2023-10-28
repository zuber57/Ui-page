import './App.css';
import Login from './components/login';
import {Routes,Route} from 'react-router-dom';
import Dashboard from './components/tabs';
import Registration from './components/Register';
function App() {
  return (
<>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/tabs" element={<Dashboard/>}/>
  <Route path="/register" element={<  Registration/>}/>
</Routes>
  </>
  );
}

export default App;
