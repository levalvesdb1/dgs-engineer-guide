import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Container from "./../../components/container/container";
import Button from "./../../components/button/button";
import {translate} from '@docusaurus/Translate';

export default function Intro() {

  const component = "shift-intro";

  return (
    <div className={component}>
      <Container componentClass={component} size={"medium"} bgColor={"light"}>
        <div
          className={`${component}__title`}
          dangerouslySetInnerHTML={{
            __html: translate({message: "intro.title"}),
          }}
        ></div>
        {/* <div className={`${component}__image`}>
          <img
            className={`${component}__image-bg`}
            src={useBaseUrl("img/ic-intro.svg")}
          />
          <img
            className={`${component}__image-img`}
            src={useBaseUrl("img/img-boilerplate-intro@2x.png")}
          />
        </div> */}
        <div className={`${component}__content`}>{translate({message: "intro.description"})}</div>
        <Button
          componentClass={component}
          label={translate({message: "intro.button-start"})}
          href={useBaseUrl("/docs/engineering-metrics")}
        />
      </Container>
    </div>
  );
}
