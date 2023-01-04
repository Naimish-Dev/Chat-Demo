
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import UserChatlist from './Components/UserChatlist';
import UsersChatBox from './Components/UsersChatBox';
function App() {
  
  return (
    <div className="App">
      <div className="header p-2 text-center"> Chat-App  </div>
      <UsersChatBox></UsersChatBox>
      <UserChatlist></UserChatlist>
    </div>
  );
}

export default App;
