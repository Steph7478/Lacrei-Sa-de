import React from "react";
import {render, screen} from "@testing-library/react";
import Header from "@/components/Home/Header";

jest.mock("next/image", () => {
  return (props: any) => {
    const {fill, ...rest} = props;
    return <img {...rest} alt={props.alt} />;
  };
});

jest.mock("next/link", () => {
  return ({children, href}: any) => {
    return <a href={href}>{children}</a>;
  };
});

test("renderiza botões com textos e links corretos", () => {
  render(<Header />);

  expect(screen.getByText(/para pacientes/i).closest("a")).toHaveAttribute(
    "href",
    "https://paciente.lacreisaude.com.br/"
  );

  expect(screen.getByText(/para profissionais/i).closest("a")).toHaveAttribute(
    "href",
    "https://profissional.lacreisaude.com.br/"
  );
});
