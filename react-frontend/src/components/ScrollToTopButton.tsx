import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 p-3 rounded-full bg-hover-pink text-white shadow-lg transition-opacity duration-300 hover:bg-hover-dark-pink
    ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
    bottom-[clamp(24px,10vh,80px)] right-6`}
      aria-label="Scroll to top"
    >
      <FaArrowCircleUp className="text-2xl" />
    </button>
  );
}
