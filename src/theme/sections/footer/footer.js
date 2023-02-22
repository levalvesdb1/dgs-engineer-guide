import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';
import Arrow from './../../components/arrow/arrow';

export default function Footer() {
  const component = 'shift-footer';

  const itemsData = [
    {
      icon: useBaseUrl('img/ic-frontend-libs.svg'),
      label: 'Dicas de arquitetura',
      link: `/docs/best-practices/architecture-drawing`,
    },
    {
      icon: useBaseUrl('img/ic-libs.svg'),
      label: 'SOLID',
      link: `/docs/best-practices/SOLID`,
    },
    {
      icon: useBaseUrl('img/ic-frontend-libs.svg'),
      label: 'Technology Radar',
      link: `https://techradar.db1.com.br`,
    },
    {
      icon: useBaseUrl('img/ic-libs.svg'),
      label: 'Code Style',
      link: `/docs/best-practices/code-style`,
    },
  ];

  const items = itemsData.map((item, index) => {
    const { icon, label, link } = item;

    return (
      <div className={`${component}__item`} key={index}>
        <a
          className={`${component}__link`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`${component}__icon`}>
            <img src={icon} />
          </div>
          <div
            className={`${component}__label`}
            dangerouslySetInnerHTML={{ __html: label }}
          ></div>
          <Arrow componentClass={component} />
        </a>
      </div>
    );
  });

  return (
    <div className={component}>
      <Container componentClass={component} size={'medium'} bgColor={'light'}>
        <Heading componentClass={component} title={'Comece explorando	'} />
        <div className={`${component}__content`}>{items}</div>
      </Container>
    </div>
  );
}
