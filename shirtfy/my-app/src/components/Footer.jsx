import React from "react";

const Footer = ({ title, links }) => {
  return (
    <div className=" p-5">
      {/* Section Title */}
      <h3 className="text-gray-900 dark:text-white font-semibold mb-4">{title}</h3>

      {/* Links */}
      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-white transition"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
