import Link from "next/link";

interface FooterProps {
  contact: {
    title: string;
    email: string;
  };
  legal: {
    title: string;
    links: string[];
  };
  lang: string;
}

export const Footer = ({
  contact,
  legal,
  lang,
}: FooterProps) => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      {/* <div className="container mx-auto"> */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center border-gray-700 pt-8">
        <div className="flex flex-col">
          <h4 className="text-lg font-bold mb-2">
            {contact.title}
          </h4>
          <div>{contact.email}</div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">
            {legal.title}
          </h4>
          <ul className="flex justify-center items-center gap-4">
            {legal.links.map((link, index) => (
              <li key={index}>
                <Link
                  href={`/${lang}/${index === 0 ? "terms" : "privacy"}`}
                  className="hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};
