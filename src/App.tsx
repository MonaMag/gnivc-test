import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import FormContainer from "./components/formContainer/FormContainer";
import {Cases} from "./components/cases/Cases";
import {useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {RequestStatusType} from "./redux/app-reducer";
import {Preloader} from "./common/preloader/Preloader";


function App() {
    console.log('APP')
    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    return (
        <div className="App">
            {status === 'loading' && <Preloader left={'40%'} top={'40%'} size={'100px'}/>}
            <div className="App">
                <Header/>
                <FormContainer/>
                <Cases/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
