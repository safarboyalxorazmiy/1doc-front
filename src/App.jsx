import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { check } from "./function/http/UserApi";
import { Context } from "./main";
import { Spinner } from "react-bootstrap";
import AppRouter from "./function/AppRouter";
// import { SocketProvider } from "./pages/SocketClass";

const App = observer( () => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      const storedTheme = localStorage.getItem('theme');
      // if (storedTheme) {
      //     user.setTheme(JSON.parse(storedTheme));
      // }
      user.setUser(data);
      user.setIsAuth(true);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      {/* <SocketProvider> */}
        <AppRouter/>
      {/* </SocketProvider> */}
    </BrowserRouter>
  );
  
});

export default App;