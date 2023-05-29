// import logo from './logo.svg';
import './App.css';
import Landingpage from './components/landingpage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  library.add(fas);
  return (
    <div className="App w-[100%] h-[100vh] overflow-x-hidden">
      <ToastContainer />
      <Landingpage />
    </div>
  );
}

export default App;
