import {
  ButtonsWrapper,
  RoundButton,
  StyledImage,
  TextWrapper,
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

          <TextWrapper>
            <p>{description}</p>

            <p>
              I made this after reading{" "}
              <a href="https://blog.azuki.vip/csrf/" target="__blank">
                &quot;how to be popular&quot;
              </a>{" "}
              and doing a bit more research.
            </p>

            <p>
              Get cookies with the button below, take note of the image, then go
              to{" "}
              <a href="https://security-testing.vercel.app/" target="__blank">
                this page
              </a>{" "}
              to try the exploits.
            </p>

            <p>
              Feel free to download both repos to try locally and get insight
              from the server.
            </p>
          </TextWrapper>
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
