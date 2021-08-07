import {
  ButtonsWrapper,
  RoundButton,
  StyledImage,
} from "../styles/misc-styles";
import { Content, Header, Main } from "../styles/layout";

import Seo from "../components/seo";
import fetch from "isomorphic-unfetch";
import { useState } from "react";

const description =
  "Using this domain to try methods to by-pass CSRF and CORS.";

export default function TryMe() {
  const [cookies, setCookies] = useState();

  const getCookies = async () => {
    await fetch("/api/csrf/get-cookies");
  };

  const checkCookiesFromServer = async () => {
    const res = await (await fetch("/api/csrf/post-cookies")).json();
    setCookies(res.cookies);
  };

  return (
    <Main>
      <Seo description={description} />
      <Content>
        <Header>
          <h1>Test domain</h1>
          <p>{description}</p>
          <p>
            I made this after this article piqued my curiosity and I did more
            research:{" "}
            <a href="https://blog.azuki.vip/csrf/" target="__blank">
              how to be popular
            </a>
            .
          </p>
        </Header>

        <h2>GET and POST data to server</h2>

        <ButtonsWrapper>
          <RoundButton onClick={getCookies}>
            Get cookies from server
          </RoundButton>
          <RoundButton
            onClick={
              cookies ? () => setCookies(undefined) : checkCookiesFromServer
            }
          >
            {cookies ? "Clear cookies from state" : "Check cookies from server"}
          </RoundButton>
        </ButtonsWrapper>

        {cookies && (
          <div>
            <pre>{JSON.stringify(cookies, null, 2)}</pre>
          </div>
        )}

        <h2>Image direct from URL</h2>

        <p>Directly loaded into an img tag.</p>
        <StyledImage src={`/api/csrf/get-image`} alt="random cat" />
      </Content>
    </Main>
  );
}
