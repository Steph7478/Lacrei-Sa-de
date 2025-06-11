"use client";
import {StyledLine} from "@/ui/line";
import Image from "next/image";
import React from "react";

const QuemSomos = () => {
  return (
    <div className="flex-col-center full">
      <section
        className="max-width flex-col-start media-flex-col-center"
        style={{padding: "50px 0px"}}
      >
        <div
          style={{padding: "0 20px"}}
          className="flex-col-start media-text-center media-flex-col-center"
        >
          <h2 style={{fontSize: "2.5rem"}}>
            Atendimento qualificado, <br /> seguro e inclusivo
          </h2>
          <StyledLine />
        </div>
        <div
          className="flex-items-start media-flex-col-center"
          style={{fontSize: "1.5rem", gap: "10px", padding: "0 20px"}}
        >
          <p>
            Acreditamos que, ao possibilitar a inclusão clínica da nossa
            comunidade, transformamos o mundo. <br />
            <br /> Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o
            propósito de oferecer a melhor experiência no acesso à profissionais
            da saúde para as pessoas LGBTQIAPN+. <br />
            <br /> Atuamos de forma ética e embasada nas regras e diretrizes
            estabelecidas pelos órgãos de classe e regulamentadores.
          </p>
          <div className="max-width" style={{width: "100%", maxWidth: "491px"}}>
            <Image
              src="https://lacreisaude.com.br/_next/static/media/about-us-image.0c5e5cc6.png"
              alt="atendimento"
              layout="responsive"
              width={491}
              height={491}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;
