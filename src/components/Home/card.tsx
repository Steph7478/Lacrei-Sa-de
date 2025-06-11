import {StyledWhiteButton} from "@/ui/button";
import {StyledLine} from "@/ui/line";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
        }}
        className="max-width flex-center"
      >
        <div
          style={{position: "absolute", marginLeft: 75, left: 0}}
          className="hidden-image"
        >
          <Image
            src="https://lacreisaude.com.br/_next/static/media/people-holding-flag.8d096827.png"
            alt=""
            width={640}
            height={462}
          />
        </div>
        <div className="flex-col-start media-flex-center media-text-center main-card">
          <h2 style={{fontSize: "2.5rem"}}>
            O que é a <br /> Lacrei Saúde?
          </h2>
          <StyledLine />
          <p style={{fontSize: "1.2rem"}}>
            O nosso papel é construir a conexão entre as pessoas da comunidade
            LGBTQIAPN+ que precisam de atendimento clínico com profissionais da
            saúde. <br />
            <br /> Tudo isso com segurança, inclusão e representatividade.{" "}
            <br />
            <br />
            Surgimos da esperança de ter um atendimento clínico qualificado,
            seguro e empático para todas as pessoas.
          </p>
          <Link
            style={{textDecoration: "none", marginTop: "10px"}}
            href="/quem-somos"
            className="flex-center button-width"
          >
            <StyledWhiteButton>Conhecer</StyledWhiteButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
