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
import React, { useState } from 'react';

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
          <Route path="/" component={Home2} />
          <Route path="/home2" component={Home2} />
          <Route path="/teachers" component={TeachersPage} />
          <Route path="/programs" component={Programs} />
          <Route path="/fees" component={Fees} />
          <Route path="/contact" component={Contact} />
          <Route path="/contact-form" component={ContactForm} />
          <Route path="/events" component={Events} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

// App component without landing overlay
const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;