// pages/_app.tsx
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import NavBar from "../components/header"; // Import the NavBar component
import '../styles/globals.css'; // Global styles

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {/* NavBar component is globally included */}
      <NavBar /> 
      <main>
        {/* Main content will be rendered here */}
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
