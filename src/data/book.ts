type BookLink = {
  label: string;
  href: string;
};

type Book = {
  title: string;
  isbn: string;
  /** Couverture affichée sur le site. `null` affiche un emplacement réservé. */
  cover: string | null;
  links: BookLink[];
};

export const BOOK: Book = {
  title: "Quand je pars",
  isbn: "978-2-322-84108-0",
  cover: "/livre/quand-je-pars.webp",
  links: [
    {
      label: "Fnac",
      href: "https://www.fnac.com/a23773531/Fanny-Coulmance-Quand-je-pars",
    },
    {
      label: "Cultura",
      href: "https://www.cultura.com/p-quand-je-pars-9782322841080.html",
    },
    {
      label: "Amazon",
      href: "https://www.amazon.fr/dp/2322841080",
    },
  ],
};
