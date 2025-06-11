import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
      }}
      className="flex-center"
    >
      <Image
        src="https://lacreisaude.com.br/_next/static/media/greetings-banner-image.3ec83257.png"
        alt="header"
        fill
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          objectFit: "cover",
        }}
      />
      <div className="max-width">
        <div
          className="flex-col-start full header"
          style={{
            padding: "40px 20px",
            flexDirection: "column",
            textAlign: "start",
            maxWidth: "450px",
          }}
        >
          <h1
            style={{
              color: "var(--gren)",
              fontSize: "48px",
            }}
          >
            Olá, você está <br /> na Lacrei Saúde!
          </h1>
          <p
            style={{
              color: "black",
              fontSize: "30px",
            }}
          >
            Conectamos pessoas LGBTQIAPN+ com profissionais de saúde
            qualificados, proporcionando experiências de cuidado seguras e
            inclusivas.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
