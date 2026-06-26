
import { Route, Routes } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import NewEstimatePage from "./pages/NewEstimatePage";
import ArchivePage from "./pages/ArchivePage";
import NewInvoicePage from "./pages/NewInvoicePage";


function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout/>}>
        <Route path="/" element={<NewEstimatePage/>}/>
        <Route path="/archivio" element={<ArchivePage/>}/>
        <Route path="/fatture" element={<NewInvoicePage/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;