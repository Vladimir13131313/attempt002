import './App.css';
import {useState} from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import {Homepage} from "./components/Homepage";
import {MainContent} from './components/MainContent/MainContent';
import {WarehousePage} from './components/WarehousePage/WarehousePage';
import {WarehouseIndividualPage} from './components/WarehouseIndividualPage/WarehouseIndividualPage'


function App() {
    const [autherized, setAutherized] = useState(JSON.parse(localStorage.getItem("autherized")));
    const [needDownBar, setDownBar] = useState(false);
    const [quantity, setQuantity] = useState();
    const [storeId, setStoreId] = useState();
    const [contentList, setContentList] = useState([]);
    const [moveModal, setMoveModal] = useState(false)
    function openCloseDownBar(quan, downbar) {
        setDownBar(downbar);
        setQuantity(quan)
    }

    function openMoveModal() {
        setMoveModal(true)
    }
    function closeMoveModal() {
        setMoveModal(false)
    }

    function changeAuthState () {
        if (autherized) {
            localStorage.setItem("autherized", JSON.stringify(false));
            setAutherized(false);
        } else {
            localStorage.setItem("autherized", JSON.stringify(true));
            setAutherized(true);
        }
    }

    return (
        <div className="all_container">
            <Routes>
                <Route path="/" element={!autherized ? <Homepage func={changeAuthState}/> : <Navigate to="/home" />}/>
                <Route path="/home" element={autherized ?
                    <MainContent closeDownBar={openCloseDownBar} func={changeAuthState} downBar={needDownBar}/>
                    : <Navigate to="/" />}/>
                <Route path="/stores" element={autherized ?
                    <MainContent closeDownBar={openCloseDownBar} func={changeAuthState} downBar={needDownBar}>
                        <WarehousePage/>
                    </MainContent>
                    : <Navigate to="/" />}/>
                <Route path="/stores/:id" element={autherized ?
                    <MainContent
                        closeDownBar={openCloseDownBar}
                        func={changeAuthState}
                        downBar={needDownBar}
                        quantity={quantity}
                        storeId={storeId}
                        setContentList={setContentList}
                        openMoveModal={openMoveModal}
                    >
                        <WarehouseIndividualPage
                            func={openCloseDownBar}
                            setId={setStoreId}
                            contentList={contentList}
                            setContentList={setContentList}
                            openMoveModal={moveModal}
                            closeMoveModal={closeMoveModal}
                        />
                    </MainContent>
                    : <Navigate to="/" />}/>
                <Route path="/cards" element={autherized ?
                    <MainContent closeDownBar={openCloseDownBar} func={changeAuthState} downBar={needDownBar}/>
                    : <Navigate to="/" />}/>
                <Route path="/account" element={autherized ?
                    <MainContent closeDownBar={openCloseDownBar} func={changeAuthState} downBar={needDownBar}/>
                    : <Navigate to="/" />}/>
                <Route path="/contacts" element={autherized ?
                    <MainContent closeDownBar={openCloseDownBar} func={changeAuthState} downBar={needDownBar}></MainContent>
                    : <Navigate to="/" />}/>
                <Route path="/chat" element={autherized ?
                    <MainContent closeDownBar={openCloseDownBar} func={changeAuthState} downBar={needDownBar}></MainContent>
                    : <Navigate to="/" />}/>
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </div>
    );
}

export default App;