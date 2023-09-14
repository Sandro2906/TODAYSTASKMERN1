import Fotter from "./pages/Fotter";
import NavBar from "./pages/NavBar";
import TasksPage from "./pages/TasksPage";
import axios from 'axios'

axios.defaults.credentials = true
function App() {
  return (
    <div className="App">
      <NavBar />
      <TasksPage />
      <Fotter />
    </div>
  );
}

export default App;
