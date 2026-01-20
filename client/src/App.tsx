import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation, Redirect } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";

// Pages
import Home from "./pages/Home";
import Maguire from "./pages/Maguire";
import HowWeHelp from "./pages/HowWeHelp";
import Edge from "./pages/Edge";
import ProfessionalServices from "./pages/ProfessionalServices";
import FounderLed from "./pages/FounderLed";
import FundManagers from "./pages/FundManagers";
import PEPortfolio from "./pages/PEPortfolio";
import BoutiqueExperts from "./pages/BoutiqueExperts";
import Segments from "./pages/Segments";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StrategicDiagnostic from "./pages/StrategicDiagnostic";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

/*
 * PAGE TRANSITION ANIMATIONS
 * Premium fade + slide transitions between routes
 * Gold loading bar at top during navigation
 */

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

// Loading bar component
function LoadingBar({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] z-[9999]"
          style={{ backgroundColor: '#C9A962' }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0, originX: 1 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        />
      )}
    </AnimatePresence>
  );
}

// Animated page wrapper
function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(location);

  useEffect(() => {
    if (location !== currentLocation) {
      // Start loading animation
      setIsLoading(true);
      
      // Scroll to top on route change
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Brief delay for premium feel, then update location
      const timer = setTimeout(() => {
        setCurrentLocation(location);
        setIsLoading(false);
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [location, currentLocation]);

  return (
    <>
      <LoadingBar isLoading={isLoading} />
      <Layout>
        <AnimatePresence mode="wait">
          <AnimatedPage key={currentLocation}>
            <Switch location={currentLocation}>
              <Route path="/" component={Home} />
              <Route path="/maguire" component={Maguire} />
              <Route path="/how-we-help" component={HowWeHelp} />
              <Route path="/edge" component={Edge} />
              <Route path="/professional-services" component={ProfessionalServices} />
              <Route path="/founder-led" component={FounderLed} />
              <Route path="/fund-managers" component={FundManagers} />
              <Route path="/pe-portfolio" component={PEPortfolio} />
              <Route path="/boutique-experts" component={BoutiqueExperts} />
              <Route path="/segments" component={Segments} />
              <Route path="/about" component={About} />
              <Route path="/our-team">{() => <Redirect to="/about" />}</Route>
              <Route path="/careers" component={Careers} />
              <Route path="/contact" component={Contact} />
              {/* Hidden page - not linked from navigation, shareable directly */}
              <Route path="/strategic-diagnostic" component={StrategicDiagnostic} />
              {/* Legal pages */}
              <Route path="/privacy" component={Privacy} />
              <Route path="/terms" component={Terms} />
              <Route path="/404" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </AnimatedPage>
        </AnimatePresence>
      </Layout>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
