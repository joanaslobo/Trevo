import { ContactForm } from "./../components/ui/contact-form";
import { useLanguage } from "@/lib/language-context";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-gray-600">
        {t("contact.form.reply")}
      </p>
      <ContactForm />
    </div>
  );
}
