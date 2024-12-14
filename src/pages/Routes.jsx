import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./Home"
import { PokemonDetailsPage } from "../pages/PokemonDetails";

const AppRoutes = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/pokemon/:id" element={<PokemonDetailsPage/>}/>
            </Routes>
        </Router>
    )
}

export {AppRoutes}