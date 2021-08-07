import {
  ButtonsWrapper,
  RoundButton,
  StyledImage,
} from "../styles/misc-styles";
import { Content, Header, Main } from "../styles/layout";

import Seo from "../components/seo";
import fetch from "isomorphic-unfetch";
import { useState } from "react";

const description = "Try me out";

export default function TryMe() {
  const [catUrl, setCatUrl] = useState<string | undefined>();
  const [cookies, setCookies] = useState();

  const getCookies = async () => {
    await fetch("/api/csrf/get-cookies");
  };

  const checkCookiesFromServer = async () => {
    const res = await (await fetch("/api/csrf/post-cookies")).json();
    setCookies(res.cookies);
  };

  const getCat = async () => {
    const { catUrl } = await (await fetch("/api/csrf/get-image")).json();
    setCatUrl(catUrl);
  };

  return (
    <Main>
      <Seo description={description} />
      <Content>
        <Header>
          <h1>Try me</h1>
          <p>{description}</p>
        </Header>
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
          <RoundButton onClick={getCat}>Get cat</RoundButton>
        </ButtonsWrapper>
        {cookies && (
          <div>
            <pre>{JSON.stringify(cookies, null, 2)}</pre>
          </div>
        )}
        {catUrl && <StyledImage src={catUrl} alt="random cat" />}
      </Content>
    </Main>
  );
}
