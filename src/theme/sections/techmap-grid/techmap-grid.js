import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '../../components/heading/heading';
import Container from '../../components/container/container';
import Arrow from '../../components/arrow/arrow';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export default function TechmapGrid(props) {
  const { privateType } = props;

  const component = 'techmap-grid';

  const headingTitle = 'Technology Radar';
  const headingSubTitle =
    'It is an opinated guide from the company to the community about that technologies and techniques they have been working on.';
  const ctaTitle = privateType
    ? 'Want to contact us?'
    : 'Want to showcase your project?';
  const ctaSubTitle = privateType
    ? 'If you want to contact us please use our contact form on the <a target="_blank" rel="noopener noreferrer" rel="nofollow" href="https://infinum.com/contact/">Infinum web</a>'
    : 'If you want to show case your project on this list please open an issue on on the <a target="_blank" rel="noopener noreferrer" rel="nofollow" href="https://github.com/infinum/eightshift-docs/issues">Eightshift-Docs github</a>';

  const projects = [
    {
      image: useBaseUrl('img/showcase/tarisio.jpg'),
      label: 'Tariso',
      desc: 'Tarisio is a web-based auction house specializing in stringed instruments and bows. Its online auctions provide a global marketplace for fine violin sales.',
      link: 'https://tarisio.com/',
    },
    {
      image: useBaseUrl('img/showcase/t2.jpg'),
      label: 'T2 auctions',
      desc: 'Auctions for the Violin Trade.',
      link: 'https://t2-auctions.com/',
    },
    {
      image: useBaseUrl('img/showcase/rasco.jpg'),
      label: 'Rasco',
      desc: 'One of the leading manufacturers of municipal equipment in Europe: we produce snow ploughs (snowplow), spreaders, crane mowers and vehicle upgrades.',
      link: 'https://rasco.hr/',
    },
  ];

  const itemsData = [...projects];

  // https://reactjs.org/docs/react-dom.html#hydrate
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const items = shuffleArray(itemsData).map((item, index) => {
    const { image, label, link, desc } = item;

    const icons = ['yellow', 'blue', 'green', 'red', 'purple'];

    const random = Math.floor(Math.random() * icons.length);

    return (
      <div className={`${component}__item`} key={index}>
        <a
          className={`${component}__link`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`${component}__icon`}>
            <img
              className={`${component}__img`}
              src={image}
              alt={label}
              title={label}
            />
          </div>
          <div
            className={`${component}__label ${component}__label--${icons[random]}`}
          >
            {label}
          </div>
          <div className={`${component}__desc`}>{desc}</div>
          <Arrow componentClass={component} />
        </a>
      </div>
    );
  });

  /* key={isClient ? 1 : 2} will trigger a rerender of the whole subtree and the images will be aligned with text */
  return (
    <div className={component} key={isClient ? 1 : 2}>
      <iframe
        style={{ width: '100vw', height: '100vh' }}
        src="http://localhost:3001/"
      ></iframe>
      {/* <Heading
        componentClass={component}
        title={headingTitle}
        subtitle={headingSubTitle}
      /> */}
      {/* <Container componentClass={component}>
        <div className={`${component}__content`}>{items}</div>
      </Container>
      <Container
        componentClass={component}
        size={'smaller'}
        spacingBottom={'small'}
      >
        <Heading
          componentClass={component}
          title={ctaTitle}
          subtitle={ctaSubTitle}
        />
      </Container> */}
    </div>
  );
}
