import { useRef, useState, useEffect } from "react";
import Input from "./Input";
import { MdClose } from "react-icons/md";

const ContactModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    ime: "",
    prezime: "",
    email: "",
    organizacija: "",
    telefon: "",
    postanskiBroj: "",
    grad: "",
    drzava: "",
    adresa: "",
    pib: "",
    maticniBroj: "",
  });

  const formDetails = [
    { label: "Ime", name: "ime", required: true },
    { label: "Prezime", name: "prezime", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Organizacija", name: "organizacija", required: true },
    { label: "Telefon", name: "telefon", required: true },
    { label: "Poštanski broj", name: "postanskiBroj", required: true },
    { label: "Grad", name: "grad", required: true },
    { label: "Država", name: "drzava", required: true },
    { label: "Adresa", name: "adresa", required: true },
    { label: "PIB", name: "pib", required: true },
    { label: "Matični broj", name: "maticniBroj", required: false },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("ime", formData.ime);
    form.append("prezime", formData.prezime);
    form.append("email", formData.email);
    form.append("organizacija", formData.organizacija);
    form.append("telefon", formData.telefon);
    form.append("postanskiBroj", formData.postanskiBroj);
    form.append("grad", formData.grad);
    form.append("drzava", formData.drzava);
    form.append("adresa", formData.adresa);
    form.append("pib", formData.pib);
    form.append("maticniBroj", formData.maticniBroj);

    try {
      const response = await fetch("home/ponuda", {
        method: "POST",
        body: form,
      });

      if (!response.ok) throw new Error("Network response was not ok");

      await response.json();
      setStatus("success");
      setFormData({
        ime: "",
        prezime: "",
        email: "",
        organizacija: "",
        telefon: "",
        postanskiBroj: "",
        grad: "",
        drzava: "",
        adresa: "",
        pib: "",
        maticniBroj: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div
        ref={modalRef}
        className="relative bg-white rounded-xl p-4 sm:p-6 w-full max-w-2xl shadow-lg overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-xl p-0.5 text-gray-500 hover:text-hover-dark-pink focus:outline-none"
          aria-label="Zatvori modal"
        >
          <MdClose className="bg-hover-pink bg-transparent p-1 text-grey text-3xl " />
        </button>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 text-center">
          Kontakt
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {formDetails.map(({ label, name, type = "text", required }) => (
            <div key={name} className="flex flex-col">
              <label
                htmlFor={name}
                className="mb-1 text-sm font-medium text-gray-700"
              >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
              </label>
              <Input
                id={name}
                name={name}
                type={type}
                required={required}
                value={formData[name]}
                onChange={handleChange}
                className="border border-gray-300 px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-hover-dark-pink"
              />
            </div>
          ))}

          {status === "success" && (
            <p className="col-span-full text-green-600 text-sm text-center">
              Poruka je uspešno poslata!
            </p>
          )}
          {status === "error" && (
            <p className="col-span-full text-red-600 text-sm text-center">
              Došlo je do greške. Pokušajte ponovo.
            </p>
          )}

          <div className="col-span-full flex flex-col sm:flex-row justify-end mt-2 sm:mt-4 gap-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 rounded-xl transition bg-black hover:bg-hover-dark-pink text-white"
            >
              Otkaži
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#a0258c] text-white px-6 py-2 rounded-xl hover:bg-hover-dark-pink transition"
            >
              Pošalji
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
