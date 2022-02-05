import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import FormContainer from "./components/form/FormContainer";
import {Cases} from "./components/cases/Cases";



function App() {
    console.log('APP')
    return (
        <div className="App">
            <Header/>
            <FormContainer/>
            <Cases />
            <Footer/>
            {/*<Routes>
                <Route path={'/'} element={<FormContainer/>}/>
                <Route path={'/form'} element={<FormContainer/>}/>
                <Route path={'/404'} element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>*/}
        </div>
    );
}

export default App;
