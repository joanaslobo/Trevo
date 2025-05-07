import { Route, Switch } from "wouter";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Programs from "@/pages/programs";
import Fees from "@/pages/fees";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import TeachersPage from "@/pages/teachers";
import { LanguageProvider } from "@/lib/language-context";
import { ThemeProvider, useTheme } from "@/lib/theme-context";

function AppContent() {
  const { isRockMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col theme-bg ${isRockMode ? 'rock-mode' : 'light-mode'}`}>
      <Header />
      <main className="flex-grow theme-text">
        <Switch>
          <Route path="/" component={Home} />
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

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
