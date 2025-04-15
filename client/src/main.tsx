import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "./lib/language-context";

// Add custom styles to Tailwind
const style = document.createElement('style');
style.textContent = `
  :root {
    --clover-primary: #1a7a3d;
    --terracotta-primary: #c66b3e;
    --gold-accent: #f4b942;
    --cream-bg: #F7F3E3;
    --charcoal-text: #333333;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes wiggle {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  .font-serif {
    font-family: 'Alba';
  }

  .font-sans {
    font-family: 'Montserrat', sans-serif;
  }

  .font-handwritten {
    font-family: 'Caveat', cursive;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-wiggle {
    animation: wiggle 1s ease-in-out infinite;
  }

  .nav-link::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: var(--gold-accent);
    transition: width .3s;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  body {
    background-color: var(--cream-bg);
    color: var(--charcoal-text);
    font-family: 'Montserrat', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }
`;
document.head.appendChild(style);

// App component already includes LanguageProvider
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <Toaster />
  </QueryClientProvider>
);
