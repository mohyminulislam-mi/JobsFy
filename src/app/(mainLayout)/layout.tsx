import React from "react";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="sticky top-0 z-50 ">
        <Header />
      </header>
      <main className="min-h-screen">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
