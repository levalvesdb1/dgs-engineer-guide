import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';

export default function Why() {
  const component = 'shift-why';

  return (
    <div className={component}>
      <Container
        componentClass={component}
        size={'small'}
        spacingBottom={'none'}
      >
        <Heading
          componentClass={component}
          title={'O portal do dev DGS'}
          subtitle={
            'Aqui vamos compartilhar com todos os desenvolvedores da DGS nossas recomendações de ferramentas, guias de boas práticas, códigos de condunta, dicas, ferramentas e muito mais. Salva isso no seus favoritos e acompanha seu email que sempre terá coisa nova por aqui.,'
          }
          align={'left'}
          titleSize={'medium'}
        />
      </Container>
      <Container componentClass={component} size={'medium'} spacingTop={'none'}>
        <div className={`${component}__content`}>
          <img
            className={`${component}__image ${component}__image--desktop`}
            src={useBaseUrl('img/img-why-boilerplate@2x.png')}
          />
          <img
            className={`${component}__image ${component}__image--mobile`}
            src={useBaseUrl('img/img-why-boilerplate-mobile@2x.png')}
          />
        </div>
      </Container>
    </div>
  );
}
