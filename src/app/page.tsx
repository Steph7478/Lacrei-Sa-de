"use client";
import Card from "@/components/Home/card";
import Header from "@/components/Home/Header";
import {StyledCards} from "@/ui/cards";
import {StyledLine} from "@/ui/line";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex-col-center" style={{overflowX: "hidden", gap: "80px"}}>
      <Header />
      <section
        className="max-width flex-col-center media-text-center"
        style={{padding: "0 30px"}}
      >
        <h2>Conheça o jeito Lacrei Saúde de cuidar</h2>
        <StyledLine />
        <h3>Atendimento de qualidade e inclusivo</h3>
        <div
          className="flex-center cards"
          style={{gap: "30px", padding: "30px 0"}}
        >
          <StyledCards>
            <Image
              src="https://lacreisaude.com.br/_next/static/media/handshake-icon.422966a2.svg"
              alt="hand"
              width={78}
              height={66}
            />
            <h3 className="blueText">Inclusão</h3>
            <p>
              Nossa plataforma digital é acessível e atendemos toda comunidade
              LGBTQIAPN+.
            </p>
          </StyledCards>
          <StyledCards>
            <Image
              src="https://lacreisaude.com.br/_next/static/media/heart-icon.081c2229.svg"
              alt="hand"
              width={78}
              height={66}
            />
            <h3 className="blueText">Acolhimento</h3>
            <p>
              As pessoas profissionais da saúde entendem as necessidades da
              comunidade LGBTQIAPN+.
            </p>
          </StyledCards>
          <StyledCards>
            <Image
              src="https://lacreisaude.com.br/_next/static/media/shield-icon.54d509f2.svg"
              alt="hand"
              width={78}
              height={66}
            />
            <h3 className="blueText">Segurança</h3>
            <p>
              Protegemos seus dados e validamos pacientes e profissionais da
              saúde.
            </p>
          </StyledCards>
        </div>
      </section>
      <section
        className="flex-center"
        style={{minHeight: "100vh", width: "100%"}}
      >
        <Card />
      </section>
    </div>
  );
};

export default Home;
