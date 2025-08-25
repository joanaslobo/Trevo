import { useState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { useLanguage } from "@/lib/language-context";

export const ContactForm = () => {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);

  // Replace with your actual Google Form URL and entry IDs
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScGE5BbWzLA_pfPaQq-e3PIw1kQfiWBWFG3dAy875v6-skauQ/formResponse";
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      // Create a hidden iframe for form submission
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Create a form element
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_FORM_URL;
      form.target = 'hidden_iframe';

      // Add form fields
      const fields = [
        { name: 'entry.1365495256', value: data.name as string },
        { name: 'entry.295087306', value: data.age as string },
        { name: 'entry.1834234693', value: data.classType as string },
        { name: 'entry.1172508630', value: data.instrument as string },
        { name: 'entry.1866162783', value: data.location as string },
        { name: 'entry.1106228860', value: data.phone as string },
        { name: 'entry.1078550884', value: data.email as string },
        { name: 'entry.361222995', value: (data.comments as string) || '' }
      ];

      fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
      });

      // Submit the form
      document.body.appendChild(form);
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);

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
            <SelectItem value="ukelele">Ukelele</SelectItem>
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