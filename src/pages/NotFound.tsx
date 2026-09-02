import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Helmet>
        <title>Page Not Found | H &amp; L Solutions</title>
        <meta
          name="description"
          content="This page doesn't exist. Head back to H & L Solutions for forestry mulching and land clearing in the Alexander City area."
        />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Page Not Found | H &amp; L Solutions" />
        <meta
          property="og:description"
          content="This page doesn't exist. Head back to H & L Solutions for forestry mulching and land clearing in the Alexander City area."
        />
        <meta property="og:url" content="https://hlsolutions.net/" />
        <meta name="twitter:title" content="Page Not Found | H &amp; L Solutions" />
        <meta
          name="twitter:description"
          content="This page doesn't exist. Head back to H & L Solutions for forestry mulching and land clearing in the Alexander City area."
        />
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
