import StoreContextProvider from "./Context/StoreContext";
import AddNewStore from "./Pages/AddNewStore";
import ItemPage from "./Pages/ItemPage";
import MainPage from "./Pages/MainPage";
import StorePage from "./Pages/StorePage";
import "./Styles/App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <StoreContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:storeId" element={<StorePage />} />
          <Route path="/:storeId/:id" element={<ItemPage />} />
          <Route path="/add" element={<AddNewStore />} />
        </Routes>
      </BrowserRouter>
    </StoreContextProvider>
  );
}

export default App;
