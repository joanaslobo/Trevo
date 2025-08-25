import { useState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { useLanguage } from "@/lib/language-context";

export const ContactForm = () => {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);

  // Replace with your actual Google Form URL and entry IDs
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScGE5BbWzLA_pfPaQq-e3PIw1kQfiWBWFG3dAy875v6-skauQ/viewform?usp=dialog";
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      // Create form data for Google Forms
      const googleFormData = new FormData();
      
      // Replace these entry IDs with your actual Google Form field IDs
      googleFormData.append('entry.1365495256', data.name as string);
      googleFormData.append('entry.295087306', data.age as string);
      googleFormData.append('entry.1834234693', data.classType as string);
      googleFormData.append('entry.1172508630', data.instrument as string);
      googleFormData.append('entry.1866162783', data.location as string);
      googleFormData.append('entry.1106228860', data.phone as string);
      googleFormData.append('entry.1078550884', data.email as string);
      googleFormData.append('entry.361222995', data.comments as string);

      // Submit to Google Form
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Forms
        body: googleFormData,
      });

      // Since no-cors mode doesn't return response data, we assume success
      alert('Form submitted successfully! We will get back to you soon.');
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      console.error('Error submitting form:', error);
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
            <SelectItem value="bass">Bass</SelectItem>
            <SelectItem value="piano">Piano</SelectItem>
            <SelectItem value="drums">Drums</SelectItem>
            <SelectItem value="saxophone">Saxophone</SelectItem>
            <SelectItem value="ukulele">Ukulele</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block mb-2 font-medium">Instrument</label>
        <Select name="location">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="porto">Porto</SelectItem>
            <SelectItem value="ovar">Ovar</SelectItem>
            <SelectItem value="ilhavo">Ílhavo</SelectItem>
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