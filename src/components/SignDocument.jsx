import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { EmbedSignDocument } from "@documenso/embed-preact";

const SignDocument = ({ token, name, email }) => {
  return token ? (
    <div>
      <EmbedSignDocument className="w-100 vh-100" token={token} name={name} email={email} />
    </div>
  ) : (
    <p>Error: Missing token</p>
  );
};

export default SignDocument;
