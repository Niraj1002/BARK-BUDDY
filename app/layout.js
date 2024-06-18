import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer";
// import { Provider } from "react-redux";
// import { store } from "./store";
import StoreProvider from "./storeProvider";
import { GlobalProvider } from "./GlobalProvider";
// import { Provider } from "react-redux";
// import { store } from "./store";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <StoreProvider>
            {/* <Provider store={store}> */}
            <GlobalProvider>
              <Header />
              <div className="mt-20">{children}</div>
              <Footer />
            </GlobalProvider>
            {/* </Provider> */}
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
