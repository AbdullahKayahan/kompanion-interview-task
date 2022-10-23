import {createContext} from 'react';

const MainContext = createContext({
  login: () => {},
  logout: () => {},
  changeTheme: () => {},
});
export default MainContext;
