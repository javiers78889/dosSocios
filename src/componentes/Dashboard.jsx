
import { SideBar } from "../widgets/SideBar/SideBar"

import {  Route, Routes } from "react-router-dom"
import { Home } from "../widgets/SideBar/PanelViews/Home"
import { ListaUsuarios } from "../widgets/SideBar/PanelViews/ListaUsuarios"


export const Dashboard = () => {


    return (
        <>
            <div className="d-flex justify-content-center gap-5 ">
                <SideBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="usuarios" element={<ListaUsuarios/>}/>
                </Routes>


            </div>
        </>
    )
}
