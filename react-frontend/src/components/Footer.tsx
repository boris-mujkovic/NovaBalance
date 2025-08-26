import logo from "../assets/Logo.webp";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./shared/Button";
import Input from "./shared/Input";
import { quickLinks } from "../data/navigationsLinks";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/novabalance/",
    src: "https://www.svgrepo.com/show/521725/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/novabalancesoftware/",
    src: "https://www.svgrepo.com/show/521711/instagram.svg",
    alt: "Instagram",
  },
  {
    href: "https://open.spotify.com/show/2uFoVB4oUtIASJ2wLcaFk6",
    src: "https://cdn-icons-png.flaticon.com/128/87/87409.png",
    alt: "Spotify",
  },
  {
    href: "https://www.youtube.com/@NovaBalanceYT",
    src: "https://cdn-icons-png.flaticon.com/128/3669/3669688.png",
    alt: "YouTube",
  },
];

function Footer() {
  const location = useLocation();
  const isOnServicesPage = location.pathname === "/usluge";

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("home/subscribe", {
        method: "POST",
        body: email,
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Subscription failed:", error);
      setStatus("error");
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (location.pathname === "/usluge") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <footer className="w-full text-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-[#debdda] px-24 py-10 lg:py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 flex-wrap">
          {/* Column 1: Logo and Socials */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="logo" className="w-56 h-auto mb-4" />
            <div className="flex gap-4">
              {socialLinks.map(({ href, src, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={src} alt={alt} className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Brzi Linkovi */}
          {!isOnServicesPage ? (
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Brzi Linkovi</h3>
              <ul className="space-y-0.5 text-black">
                {quickLinks.map(({ label, section, to }) => (
                  <li key={label}>
                    {to ? (
                      <Link
                        to={to}
                        className="hover:text-white transition tracking-[1px]"
                      >
                        {label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => section && scrollToSection(section)}
                        className="hover:text-white transition tracking-[1px]"
                      >
                        {label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="hidden md:block" aria-hidden="true" />
          )}

          {/* Column 3: Newsletter */}
          <div className="flex flex-col max-w-[450px]">
            <h3 className="text-2xl font-semibold mb-2">
              Prijavite se na newsletter
            </h3>
            <p className="text-black mb-6">
              Budite u toku sa najnovijim vestima, ponudama i unapređenjima
              našeg softvera.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 font-merriweather"
            >
              <Input
                type="email"
                placeholder="Unesite svoj e-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Button
                name="Prijavite se"
                color="hover-pink"
                className="w-1/2"
              />
            </form>
            {status === "success" && (
              <p className="text-green-600 text-sm">You're subscribed!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full px-4 py-3 sm:px-6 lg:px-8 bg-black">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold text-white">NovaForma</h2>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} NovaBalance. All rights reserved.
            </p>
          </div>
          <a
            href="https://novabalance.rs/assets/files/POLITIKA%20PRIVATNOSTI%20I%20POLITIKA%20KOLACICA.pdf"
            className="text-gray-400 hover:text-white"
            target="_blank"
          >
            Politika privatnosti
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
