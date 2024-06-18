import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
