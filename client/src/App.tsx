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
import React, { useState, useEffect } from 'react';

// Define LandingOverlay component
const LandingOverlay = ({ onComplete }: { onComplete: () => void }) => {
  const [spinning, setSpinning] = useState(false);
  const [shrinking, setShrinking] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const handleClick = () => {
    setSpinning(true);
    setShrinking(true);
    setOpacity(0);

    // Call onComplete after the animation duration (adjust as needed)
    setTimeout(() => {
      onComplete();
    }, 1000); // Assumes 1s animation. Adjust this value to match your CSS transition duration
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'opacity 1s',
        opacity: opacity,
      }}
      onClick={handleClick}
    >
      <img
        src="/logo.png" // Replace with your logo path
        alt="Logo"
        style={{
          width: '200px',
          height: 'auto',
          transition: 'transform 1s, width 1s, height 1s',
          transform: spinning ? 'rotate(360deg)' : 'rotate(0deg)',
          width: shrinking ? '50px' : '200px',
          height: shrinking ? 'auto' : 'auto',
        }}
      />
      <h1
        style={{
          fontSize: '2em',
          transition: 'transform 1s, font-size 1s',
          transform: spinning ? 'rotate(-360deg)' : 'rotate(0deg)',
          fontSize: shrinking ? '0.5em' : '2em',
        }}
      >
       Trevo
      </h1>
    </div>
  );
};

// Define ContactForm component
const ContactForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [classType, setClassType] = useState('');
  const [instrument, setInstrument] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('entry.000000000', name); // Replace with your form field IDs
    formData.append('entry.111111111', age); // Replace with your form field IDs
    formData.append('entry.222222222', classType); // Replace with your form field IDs
    formData.append('entry.333333333', instrument); // Replace with your form field IDs
    formData.append('entry.444444444', phone); // Replace with your form field IDs
    formData.append('entry.555555555', email); // Replace with your form field IDs
    formData.append('entry.666666666', comments); // Replace with your form field IDs


    try {
      const response = await fetch(
        'YOUR_GOOGLE_FORM_URL', // Replace with your Google Form URL
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (response.status === 200) {
        alert('Form submitted successfully!');
      } else {
        alert('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label htmlFor="classType">Type of Class:</label>
        <input type="text" id="classType" value={classType} onChange={(e) => setClassType(e.target.value)} />
      </div>
      <div>
        <label htmlFor="instrument">Instrument:</label>
        <input type="text" id="instrument" value={instrument} onChange={(e) => setInstrument(e.target.value)} />
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="comments">Comments:</label>
        <textarea id="comments" value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

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
          <Route path="/contact-form" component={ContactForm} /> // Added route for ContactForm
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

// Modified App component to include LandingOverlay
const App = () => {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <LanguageProvider>
      <ThemeProvider>
        {showLanding && <LandingOverlay onComplete={() => setShowLanding(false)} />}
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;