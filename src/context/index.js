import {
    createContext 
} from "react";

const MainContext = createContext({
    login: () => {},
    logout: () => {},
});
export default MainContext;
