
import { useState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { useLanguage } from "@/lib/language-context";

export const ContactForm = () => {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    // Replace FORM_ID with your Google Form ID
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfO0yLMfP1fU8wjLywi27VRs0ppPBbOTAV0irIvzmXbcziNRg/viewform?usp=dialog`;
    
    try {
      // Map your form fields to Google Form field names
      const params = new URLSearchParams({
        'entry.123': data.name as string,
        'entry.456': data.age as string,
        'entry.789': data.classType as string,
        'entry.012': data.instrument as string,
        'entry.345': data.phone as string,
        'entry.678': data.email as string,
        'entry.901': data.comments as string,
      });

      // Using no-cors mode as Google Forms doesn't support CORS
      await fetch(`${formUrl}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      });

      alert('Form submitted successfully!');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      alert('Error submitting form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2">Name</label>
        <Input name="name" required />
      </div>
      <div>
        <label className="block mb-2">Age</label>
        <Input name="age" type="number" required />
      </div>
      <div>
        <label className="block mb-2">Type of Class</label>
        <select name="classType" className="w-full p-2 border rounded" required>
          <option value="">Select a class type</option>
          <option value="individual">Individual</option>
          <option value="group">Group</option>
        </select>
      </div>
      <div>
        <label className="block mb-2">Instrument</label>
        <Input name="instrument" required />
      </div>
      <div>
        <label className="block mb-2">Phone</label>
        <Input name="phone" type="tel" required />
      </div>
      <div>
        <label className="block mb-2">Email</label>
        <Input name="email" type="email" required />
      </div>
      <div>
        <label className="block mb-2">Comments</label>
        <Textarea name="comments" />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 px-4 bg-[#1a7a3d] text-white rounded hover:bg-[#156e35] disabled:opacity-50"
      >
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};
