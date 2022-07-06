import './App.scss'
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Sidebar from './components/Menu/Menu';
import 'antd/dist/antd.css'


const App = () => {
    return (
        <div className='app'>
            <div className="menu">
                <Sidebar/>
            </div>
            <div className="routers">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;