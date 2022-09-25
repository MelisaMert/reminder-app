import {
    Route,
    Routes,
} from "react-router-dom";

/** Components */
/** todo: Component Import With Lazy Loading */
import Home from '../views/Home/Home';
import Reminders from '../views/Reminders/Reminders';
import Profile from '../views/Profile/Profile';

export default function RootRouter() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path="/reminders" element={<Reminders/>} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}