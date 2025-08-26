export type QuickLink = {
    label: string;
    section?: string;
    to?: string;
  };

export const quickLinks: QuickLink[] = [
    { label: "Benefiti", section: "general" },
    { label: "O nama", section: "about" },
    { label: "Funkcionalnosti", section: "functionality" },
    { label: "Usluge", to: "/usluge" },
    { label: "Podcast", section: "podcast" },
    { label: "Kontakt", section: "contact" },
  ];