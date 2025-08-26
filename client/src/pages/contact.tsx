import { ContactForm } from "./../components/ui/contact-form";

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-gray-600">
        Fill out the form below and we’ll get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}
