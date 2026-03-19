import React from "react";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
