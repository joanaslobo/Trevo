import { useState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { useLanguage } from "@/lib/language-context";

export const ContactForm = () => {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfO0yLMfP1fU8wjLywi27VRs0ppPBbOTAV0irIvzmXbcziNRg/`;
      const params = new URLSearchParams({
        'entry.123': data.name as string,
        'entry.456': data.age as string,
        'entry.789': data.classType as string,
        'entry.012': data.instrument as string,
        'entry.345': data.phone as string,
        'entry.678': data.email as string,
        'entry.901': data.comments as string,
      });

      // For static deployment, you would need to integrate with a service like:
      // - Netlify Forms
      // - Formspree
      // - EmailJS
      // This is a placeholder for now
      console.log('Form data:', Object.fromEntries(formData.entries()));

      // Simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));

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
        <label className="block mb-2 font-medium">Name</label>
        <Input name="name" required className="w-full" />
      </div>

      <div>
        <label className="block mb-2 font-medium">Age</label>
        <Input name="age" type="number" required className="w-full" />
      </div>

      <div>
        <label className="block mb-2 font-medium">Type of Class</label>
        <Select name="classType">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select class type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="individual">Individual</SelectItem>
            <SelectItem value="group">Group</SelectItem>
            <SelectItem value="workshop">Workshop</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block mb-2 font-medium">Instrument</label>
        <Select name="instrument">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select instrument" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="guitar">Guitar</SelectItem>
            <SelectItem value="violin">Violin</SelectItem>
            <SelectItem value="piano">Piano</SelectItem>
            <SelectItem value="drums">Drums</SelectItem>
            <SelectItem value="voice">Voice</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block mb-2 font-medium">Phone Number</label>
        <Input name="phone" type="tel" required className="w-full" />
      </div>

      <div>
        <label className="block mb-2 font-medium">Email</label>
        <Input name="email" type="email" required className="w-full" />
      </div>

      <div>
        <label className="block mb-2 font-medium">Comments</label>
        <Textarea name="comments" className="w-full" rows={4} />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 px-4 bg-[#1a7a3d] text-white rounded hover:bg-[#156e35] disabled:opacity-50 transition-colors"
      >
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};