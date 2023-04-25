"use client";

import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] =
    useState<string>("Select Country");

  const handleClick = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const countries = [
    {
      name: "Spain",
      slug: "spain",
      links: [
        { name: "Sociedades en España", slug: "sociedades-en-espana" },
        {
          name: "Fiscalidad en España",
          slug: "fiscalidad-espana",
        },
        {
          name: "Tributacion",
          slug: "tributacion",
        },
        {
          name: "Oficina de Representacion",
          slug: "oficina-representacion",
        },
      ],
    },
    {
      name: "Belgium",
      slug: "belgium",
      links: [
        { name: "Fiscalidad en Alemania", slug: "fiscalidad-en-alemania" },
        {
          name: "La sociedad Unternehmergesellscaft",
          slug: "sociedad-unternehmergesellschaft",
        },
      ],
    },
    {
      name: "Germany",
      slug: "germany",
      links: [
        { name: "Fiscalidad en Alemania", slug: "fiscalidad-en-alemania" },
        {
          name: "La sociedad Unternehmergesellscaft",
          slug: "sociedad-unternehmergesellschaft",
        },
      ],
    },
    {
      name: "Cyprus",
      slug: "cyprus",
      links: [
        { name: "Fiscalidad en Alemania", slug: "fiscalidad-en-alemania" },
        {
          name: "La sociedad Unternehmergesellscaft",
          slug: "sociedad-unternehmergesellschaft",
        },
      ],
    },
    {
      name: "France",
      slug: "france",
      links: [
        { name: "Fiscalidad en Alemania", slug: "fiscalidad-en-alemania" },
        {
          name: "La sociedad Unternehmergesellscaft",
          slug: "sociedad-unternehmergesellschaft",
        },
      ],
    },
    {
      name: "Gibraltar",
      slug: "gibraltar",
      links: [
        { name: "Fiscalidad en Alemania", slug: "fiscalidad-en-alemania" },
        {
          name: "La sociedad Unternehmergesellscaft",
          slug: "sociedad-unternehmergesellschaft",
        },
      ],
    },
    {
      name: "Ireland",
      slug: "ireland",
      links: [
        { name: "Fiscalidad en Alemania", slug: "fiscalidad-en-alemania" },
        {
          name: "La sociedad Unternehmergesellscaft",
          slug: "sociedad-unternehmergesellschaft",
        },
      ],
    },
    {
      name: "Italy",
      slug: "italy",
      links: [
        { name: "Fiscalidad en Alemania", slug: "fiscalidad-en-alemania" },
        {
          name: "La sociedad Unternehmergesellscaft",
          slug: "sociedad-unternehmergesellschaft",
        },
      ],
    },
    {
      name: "Netherlands",
      slug: "netherlands",
      links: [
        { name: "Fiscalidad en Alemania", slug: "fiscalidad-en-alemania" },
        {
          name: "La sociedad Unternehmergesellscaft",
          slug: "sociedad-unternehmergesellschaft",
        },
      ],
    },
    {
      name: "Morocco",
      slug: "morocco",
      links: [
        { name: "Fiscalidad en Alemania", slug: "fiscalidad-en-alemania" },
        {
          name: "La sociedad Unternehmergesellscaft",
          slug: "sociedad-unternehmergesellschaft",
        },
      ],
    },
    {
      name: "Portugal",
      slug: "portugal",
      links: [
        { name: "Fiscalidad en Alemania", slug: "fiscalidad-en-alemania" },
        {
          name: "La sociedad Unternehmergesellscaft",
          slug: "sociedad-unternehmergesellschaft",
        },
      ],
    },
    {
      name: "United Kingdom",
      slug: "united-kingdom",
      links: [
        { name: "Fiscalidad en Alemania", slug: "fiscalidad-en-alemania" },
        {
          name: "La sociedad Unternehmergesellscaft",
          slug: "sociedad-unternehmergesellschaft",
        },
      ],
    },
  ];

  const country = countries.find((c) => c.name === selectedCountry);
  const linkNames = country?.links.map((link) => link.name);

  return (
    <div className="flex border-b-2 border-black pt-0.5 space-x-2">
      <div className="relative mx-2">
        <button onClick={handleClick}>{selectedCountry}</button>
        {toggleDropdown && (
          <ul className="absolute mt-1 z-20 bg-white rounded-xl overflow-auto max-h-52 w-60">
            {countries.map((country) => (
              <li
                key={country.name}
                className={` bg-black text-white hover:bg-blue-800 hover:text-white ${
                  country.name.toLowerCase() ? "block" : "hidden"
                }`}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    setSelectedCountry(country.name), setToggleDropdown(false);
                  }}
                  className="flex items-center space-x-2 px-3 py-2 w-full"
                  title={country.name}
                >
                  {country.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedCountry !== "Select Country" && (
        <>
          {linkNames?.map((name) => (
            <li className="hover:underline hover:cursor-pointer" key={name}>{name}</li>
          ))}
        </>
      )}
      {/* <Image   
        className="object-cover object-left"
        src="/spain.svg"
        width={50}
        height={50}
        alt="flag"
      /> */}
    </div>
  );
};

export default NavBar;
