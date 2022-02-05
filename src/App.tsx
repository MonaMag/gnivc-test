import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import FormContainer from "./components/form/FormContainer";
import {Cases} from "./components/cases/Cases";
import {useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {RequestStatusType} from "./redux/app-reducer";
import {Preloader} from "./common/preloader/Preloader";


function App() {

    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    return (
        <div className="App">
            {status === 'loading' && <Preloader left={'40%'} top={'40%'} size={'100px'}/>}
            <div className="App">
                <Header/>
                <FormContainer/>
                <Cases/>
                <Footer/>
                {/*<Routes>
                <Route path={'/'} element={<FormContainer/>}/>
                <Route path={'/form'} element={<FormContainer/>}/>
                <Route path={'/404'} element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>*/}
            </div>
        </div>
    );
}

export default App;
