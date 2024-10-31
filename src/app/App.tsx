
import './styles/App.css'
import AppRoutes from "./providers/route/AppRoute";
import Navbar from "../widjets/Navbar/Navbar";

const App = () => {

    return (
    <div className='App'>
        <Navbar/>
        <AppRoutes/>
    </div>
)};


export default App;