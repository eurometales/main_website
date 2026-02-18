import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { CookiePreferences } from "@/components/cookies/CookiePreferences";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </div>
      <CookieBanner />
      <CookiePreferences />
    </>
  );
};

export default Layout;
