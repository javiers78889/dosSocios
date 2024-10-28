
import { SideBar } from "../widgets/SideBar/SideBar"

import {  Route, Routes } from "react-router-dom"
import { Home } from "../widgets/SideBar/PanelViews/Home"
import { ListaUsuarios } from "../widgets/SideBar/PanelViews/ListaUsuarios"
import { Catalogo } from "../widgets/SideBar/PanelViews/Catalogo"
import { Facturas } from "../widgets/SideBar/PanelViews/Facturas"



export const Dashboard = () => {
  

    return (
        <>
            <div className="d-flex justify-content-center gap-5 mt-5 ">
                <SideBar />
                <Routes>
                    <Route path="home" element={<Home/>}/>
                    <Route path="usuarios" element={<ListaUsuarios/>}/>
                    <Route path="catalogo" element={<Catalogo/>}/>
                    <Route path="facturas" element={<Facturas/>}/>
                </Routes>


            </div>
        </>
    )
}
