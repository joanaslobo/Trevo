import { Route, Switch } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home2 from "@/pages/home2";
import About from "@/pages/about";
import Programs from "@/pages/programs";
import TeachersPage from "@/pages/teachers";
import Contact from "@/pages/contact";
import Fees from "@/pages/fees";
import Events from "@/pages/events";
import NotFound from "@/pages/not-found";
import { LanguageProvider } from "@/lib/language-context";
import { ThemeProvider, useTheme } from "@/lib/theme-context";
import { LandingOverlay } from "@/components/ui/landing-overlay";
import React, { useState } from "react";

function AppContent() {
  const { isRockMode } = useTheme();
  const [showLandingOverlay, setShowLandingOverlay] = useState(true);

  const handleLandingComplete = () => {
    setShowLandingOverlay(false);
  };

  if (showLandingOverlay) {
    return <LandingOverlay onComplete={handleLandingComplete} />;
  }

  return (
    <div
      className={`min-h-screen flex flex-col theme-bg ${
        isRockMode ? "rock-mode" : "light-mode"
      }`}
    >
      <Header />
      <main className="flex-grow theme-text">
        <Switch>
          <Route path="/" component={Home2} />
          <Route path="/home2" component={Home2} />
          <Route path="/about" component={About} />
          <Route path="/teachers" component={TeachersPage} />
          <Route path="/programs" component={Programs} />
          <Route path="/fees" component={Fees} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
