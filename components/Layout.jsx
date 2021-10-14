import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children, footer = true }) => {
  // Obtenemos la ruta de la pagina actual
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      NProgress.start();
    };
    // activando el escucha del evento
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());
    // desactivando el escucha para que no se repita
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h3>&copy; Ryan Ray Portfolio</h3>
            <p>2000-{new Date().getFullYear()}</p>
            <p>All Rights Reserverd.</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Layout;
