import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PlanetsScreen from "./screens/planetsScreen";
import PlanetScreen from "./screens/planetScreens";
import NotFoundScreen from "./screens/notFound";
const RoutesScreen = () => (
    <Router>
        <Routes>
            <Route exact path="/" Component={PlanetsScreen}/>
            <Route exact path="/planet/:id" Component={PlanetScreen}/>
            <Route path="*" Component={NotFoundScreen}/>
        </Routes>
    </Router>
)

export default RoutesScreen;