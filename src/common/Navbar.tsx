import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "var(--navbar)",
        width: "100%",
        height: "80px",
      }}
      className="flex-center"
    >
      <ul
        style={{
          width: "90%",
          padding: "0px",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
        className="flex-between"
      >
        <Link
          href="/"
          style={{
            height: "100%",
          }}
          className="flex-center"
        >
          <Image
            src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg"
            width={187}
            height={24}
            priority
            className="logo"
            alt="Home"
          />
        </Link>

        <li
          className="flex-center"
          style={{
            listStyle: "none",
            height: "30px",
          }}
        >
          <Link className="link-hover flex-center full" href="/quem-somos">
            Quem somos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
