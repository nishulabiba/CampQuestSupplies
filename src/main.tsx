import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/features/store";
import { CartProvider } from "./hooks/CartContext";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <div className=" max-w-screen-2xl mx-auto">
              <RouterProvider router={router}></RouterProvider>
            </div>
          </QueryClientProvider>
        </CartProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
