import { useState } from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

export const ContactForm = () => {
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
        <label className="block mb-2 font-medium">Name</label>
        <Input
          name="visible-name"
          required
          className="w-full bg-black text-white"
          value={formValues.name}
          onChange={e => handleChange("name", e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Age</label>
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
        <label className="block mb-2 font-medium">Type of Class</label>
        <Select value={formValues.classType} onValueChange={val => handleChange("classType", val)}>
          <SelectTrigger className="w-full bg-black text-white">
            <SelectValue placeholder="Select class type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Individual">Individual</SelectItem>
            <SelectItem value="Group">Group</SelectItem>
            <SelectItem value="Workshop">Workshop</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block mb-2 font-medium">Instrument</label>
        <Select value={formValues.instrument} onValueChange={val => handleChange("instrument", val)}>
          <SelectTrigger className="w-full bg-black text-white">
            <SelectValue placeholder="Select instrument" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Guitar">Guitar</SelectItem>
            <SelectItem value="Bass">Bass</SelectItem>
            <SelectItem value="Piano">Piano</SelectItem>
            <SelectItem value="Drums">Drums</SelectItem>
            <SelectItem value="Saxophone">Saxophone</SelectItem>
            <SelectItem value="Ukelele">Ukelele</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block mb-2 font-medium">Location</label>
        <Select value={formValues.location} onValueChange={val => handleChange("location", val)}>
          <SelectTrigger className="w-full bg-black text-white">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Porto">Porto</SelectItem>
            <SelectItem value="Ovar">Ovar</SelectItem>
            <SelectItem value="Ílhavo">Ílhavo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block mb-2 font-medium">Phone Number</label>
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
        <label className="block mb-2 font-medium">Comments</label>
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
      <iframe name="hidden_iframe" onLoad={() => alert("Submitted!")} style={{display: "none"}} />


      
     
    </form>
  );
};
