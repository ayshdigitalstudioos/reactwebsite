import { BrowserRouter } from "react-router-dom";
import AdminLayout from "./Routes/AdminLayout";


function App() {
  return (
    <BrowserRouter>
      <AdminLayout />
    </BrowserRouter>
  );
}

export default App;
