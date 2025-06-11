import {StyledGreenButton} from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
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
      <div className="max-width" style={{padding: "40px 20px"}}>
        <div
          className="flex-col-start full header"
          style={{
            flexDirection: "column",
            textAlign: "start",
            maxWidth: "500px",
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
              fontSize: "30px",
            }}
          >
            Conectamos pessoas LGBTQIAPN+ com profissionais de saúde
            qualificados, proporcionando experiências de cuidado seguras e
            inclusivas.
          </p>
          <div
            style={{
              gap: "15px",
              margin: 0,
            }}
            className="flex-start sm-flex-col-center full"
          >
            <Link
              className="button-width"
              href="https://paciente.lacreisaude.com.br/"
            >
              <StyledGreenButton>Para pacientes</StyledGreenButton>
            </Link>
            <Link
              className="button-width"
              href="https://profissional.lacreisaude.com.br/"
            >
              <StyledGreenButton>Para profissionais</StyledGreenButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
