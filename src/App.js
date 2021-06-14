import {Provider} from "react-redux";
import ConfigureStore from "./component/store/ConfigureStore";
import Base from "./component/base/base";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import './App.css';

const store = ConfigureStore()

function App() {
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        <Provider store={store}>
            <ToastContainer/>

            <Base/>
        </Provider>


    );
}

export default App;
