import { h } from "preact";
import { EmbedSignDocument } from "@documenso/embed-preact";

const Proposal = ({ token, name, email, cssVars}) => {
  const host = "https://sign.loopdash.com";
  const customCss = `
    .documenso-embed {
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `;

  return token ? (
    <EmbedSignDocument
      host={host}
      token={token} 
      name={name}
      email={email}
      lockEmail={"false"}
      customCss={customCss}
      cssVars={cssVars}
    />
  ) : (
    <p>Loading document...</p>
  );
};

export default Proposal;
