import React from "react";

const Footer = ({ title, links }) => {
  return (
    <div className="">
      {/* Section Title */}
      <h3 className="text-white font-semibold mb-4">{title}</h3>

      {/* Links */}
      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-white transition"
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
