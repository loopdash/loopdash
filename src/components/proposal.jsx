import { h } from "preact";
import { EmbedSignDocument } from "@documenso/embed-preact";

const Proposal = ({ token, name, email, cssVars}) => {
  const host = "https://sign.loopdash.com";

  return token ? (
    <EmbedSignDocument
      host={host}
      token={token} 
      name={name}
      email={email}
      lockEmail={"false"}
      customCss={customCss}
    />
  ) : (
    <p>Loading document...</p>
  );
};

export default Proposal;
