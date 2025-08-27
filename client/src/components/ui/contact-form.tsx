import { useState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { useLanguage } from "@/lib/language-context";

export const ContactForm = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    classType: "",
    instrument: "",
    location: "",
    phone: "",
    email: "",
    comments: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form
      action="https://docs.google.com/forms/d/e/1FAIpQLScGE5BbWzLA_pfPaQq-e3PIw1kQfiWBWFG3dAy875v6-skauQ/formResponse"
      method="POST"
      target="hidden_iframe"
      onSubmit={() => setSubmitted(true)} 
      className="space-y-6"
    >
      {/* Real inputs with Google Form entry IDs */}
      <input type="hidden" name="entry.1365495256" value={formValues.name} />
      <input type="hidden" name="entry.295087306" value={formValues.age} />
      <input type="hidden" name="entry.1834234693" value={formValues.classType} />
      <input type="hidden" name="entry.1172508630" value={formValues.instrument} />
      <input type="hidden" name="entry.1866162783" value={formValues.location} />
      <input type="hidden" name="entry.1106228860" value={formValues.phone} />
      <input type="hidden" name="entry.1078550884" value={formValues.email} />
      <input type="hidden" name="entry.361222995" value={formValues.comments} />

      <div>
        <label className="block mb-2 font-medium">{t("contact.form.name")}</label>
        <Input
          name="visible-name"
          required
          className="w-full bg-black text-white"
          value={formValues.name}
          onChange={e => handleChange("name", e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">{t("contact.form.age")}</label>
        <Input
          name="visible-age"
          type="number"
          required
          className="w-full bg-black text-white"
          value={formValues.age}
          onChange={e => handleChange("age", e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">{t("contact.form.classtypeheader")}</label>
        <Select value={formValues.classType} onValueChange={val => handleChange("classType", val)}>
          <SelectTrigger className="w-full bg-black text-white">
            <SelectValue placeholder={t("contact.form.classtype")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Individual">Individual</SelectItem>
            <SelectItem value="Group">Group</SelectItem>
            <SelectItem value="Workshop">Workshop</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block mb-2 font-medium">{t("contact.form.instrumentheader")}</label>
        <Select value={formValues.instrument} onValueChange={val => handleChange("instrument", val)}>
          <SelectTrigger className="w-full bg-black text-white">
            <SelectValue placeholder={t("contact.form.instrument")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Guitar">{t("contact.instrument.guitar")}</SelectItem>
            <SelectItem value="Bass">{t("contact.instrument.bass")}</SelectItem>
            <SelectItem value="Piano">{t("contact.instrument.piano")}</SelectItem>
            <SelectItem value="Drums">{t("contact.instrument.drums")}</SelectItem>
            <SelectItem value="Saxophone">{t("contact.instrument.sax")}</SelectItem>
            <SelectItem value="Ukelele">{t("contact.instrument.ukulele")}</SelectItem>
            <SelectItem value="Other">{t("contact.instrument.other")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block mb-2 font-medium">{t("contact.form.location")}</label>
        <Select value={formValues.location} onValueChange={val => handleChange("location", val)}>
          <SelectTrigger className="w-full bg-black text-white">
            <SelectValue placeholder={t("contact.form.location")}/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Porto">Porto</SelectItem>
            <SelectItem value="Ovar">Ovar</SelectItem>
            <SelectItem value="Ílhavo">Ílhavo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block mb-2 font-medium">{t("contact.form.phone")}</label>
        <Input
          name="visible-phone"
          type="tel"
          required
          className="w-full bg-black text-white"
          value={formValues.phone}
          onChange={e => handleChange("phone", e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Email</label>
        <Input
          name="visible-email"
          type="email"
          required
          className="w-full bg-black text-white"
          value={formValues.email}
          onChange={e => handleChange("email", e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">{t("contact.form.comments")}</label>
        <Textarea
          name="visible-comments"
          rows={4}
          className="w-full bg-black text-white"
          value={formValues.comments}
          onChange={e => handleChange("comments", e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-[#1a7a3d] text-white rounded hover:bg-[#156e35] transition-colors"
      >
        Submit
      </button>
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (submitted) { alert("Submitted!");
            setSubmitted(false); // reset
          }
        }}
      />


      
     
    </form>
  );
};
