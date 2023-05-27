import './App.css';
import { FIREBASE_AUTHENTICATION_SIGNIN } from './Components/FIREBASE_AUTHENTICATION_SIGNIN';
import { FIREBASE_AUTHENTICATION_SIGNUP } from './Components/FIREBASE_AUTHENTICATION_SIGNUP';
import FIREBASE_DATABASE from './Components/FIREBASE_DATABASE';

function App() {
  return (
    <div className="App">
      <FIREBASE_DATABASE/>
      <FIREBASE_AUTHENTICATION_SIGNUP/>
      <FIREBASE_AUTHENTICATION_SIGNIN/>
    </div>
  );
}

export default App;
