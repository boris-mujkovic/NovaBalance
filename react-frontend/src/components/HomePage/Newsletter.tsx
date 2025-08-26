import React, { useState } from "react";
import { AppData } from "../../interface/interfaces";
import Input from "../shared/Input";

type FormData = {
  name: string;
  address: string;
  phone: string;
  email: string;
  pib: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  address: "",
  phone: "",
  email: "",
  pib: "",
  message: "",
};

type NewsletterFields = {
  name: keyof FormData;
  placeholder: string;
  type?: string;
  required?: boolean;
};

function Newsletter({ data }: { data: AppData }) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      form.append(`cntc_${key}`, value)
    );

    try {
      const response = await fetch("/home/contact", {
        method: "POST",
        body: form,
      });

      if (!response.ok) throw new Error("Error submitting form");

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
    }
  };

  const fields: NewsletterFields[] = [
    { name: "name", placeholder: "Ime/Naziv Firme", required: true },
    { name: "address", placeholder: "Adresa" },
    { name: "phone", placeholder: "Telefon" },
    { name: "email", placeholder: "Email", type: "email", required: true },
    { name: "pib", placeholder: "PIB" },
  ];

  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row gap-12 px-6 md:px-12 lg:pt-6 lg:px-20 xl:px-40 pb-24 items-center justify-between"
    >
      {/* Left side: content */}
      <div className="flex flex-col items-start gap-4 w-full md:w-1/2">
        <span className="bg-[#fbe2fb] rounded-xl px-3 py-1 text-sm">
          Kontaktirajte nas
        </span>
        <h2 className="text-2xl md:text-3xl">{data.heading}</h2>
        <div
          className="font-merriweather text-sm sm:text-base md:text-base"
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
      </div>

      {/* Right side: form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Kontaktirajte nas
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {fields.map(({ name, placeholder, type = "text", required }) => (
            <Input
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              required={required}
            />
          ))}

          <textarea
            name="message"
            placeholder="Vaša poruka"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-2 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#a0258c]"
          />

          <button
            type="submit"
            className="bg-hover-pink text-white px-6 py-2 rounded-xl hover:bg-hover-dark-pink transition"
          >
            Pošaljite poruku
          </button>

          {status === "success" && (
            <p className="text-green-600 text-sm">Poruka uspešno poslata!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm">
              Došlo je do greške. Pokušajte ponovo.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
