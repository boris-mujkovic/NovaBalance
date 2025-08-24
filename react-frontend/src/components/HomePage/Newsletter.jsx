import React, { useState } from "react";
import Input from "../Input";

function Newsletter({data}) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    pib: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("cntc_name", formData.name);
    form.append("cntc_address", formData.address);
    form.append("cntc_phone", formData.phone);
    form.append("cntc_email", formData.email);
    form.append("cntc_pib", formData.pib);
    form.append("cntc_message", formData.message);
    try {
      const response = await fetch("/home/contact", {
        method: "POST",
        body: form,
      });

      if (!response.ok) throw new Error("Error submitting form");

      setStatus("success");
      setFormData({
        name: "",
        address: "",
        phone: "",
        email: "",
        pib: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row gap-12 px-6 md:px-12 lg:pt-6 lg:px-20 xl:px-40 pb-24 items-center justify-between"
    >
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

      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Kontaktirajte nas
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            name="name"
            type="text"
            placeholder="Ime/Naziv Firme"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="address"
            type="text"
            placeholder="Adresa"
            value={formData.address}
            onChange={handleChange}
          />
          <Input
            name="phone"
            type="text"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            name="pib"
            type="text"
            placeholder="PIB"
            value={formData.pib}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Vaša poruka"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-2 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#a0258c]"
          ></textarea>

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
