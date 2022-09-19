import Login from "./pages/login";
import SignUp from "./pages/singup";
import MainPage from "./pages/main";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    // <Login></Login>
    // <SignUp></SignUp>
    <Switch>
      <Route path={"/login"}>
        <Login></Login>
      </Route>
      <Route path={'/signup'}>
        <SignUp></SignUp>
      </Route>
      <Route path={'/'}>
        <MainPage></MainPage>
      </Route>
      <Route path={'*'}>
        <Redirect to={"/login"}/>
      </Route>
    </Switch>
  );
}


export default App;
