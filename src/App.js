import { BrowserRouter } from "react-router-dom";
import AdminRouter from "./Routes/AdminRouter";


function App() {
  return (
    <BrowserRouter>
      <AdminRouter />
    </BrowserRouter>
  );
}

export default App;
