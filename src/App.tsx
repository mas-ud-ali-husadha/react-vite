import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { BrowserRouter } from "react-router-dom";
import Layout from "@/components/layouts";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </PersistGate>
      </Provider>
      <Toaster position="top-right" reverseOrder={false} containerClassName="font-medium text-sm" />
    </>
  );
}

export default App;
