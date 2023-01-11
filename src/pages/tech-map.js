import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import TechMapGrid from '../theme/sections/techmap-grid/techmap-grid';
import Footer from '../theme/sections/footer/footer';
import Foot from '../theme/sections/foot/foot';

export default function TechMap() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={'Mapa de tecnolgia dos projetos'}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName={'page-showcase'}
    >
      <TechMapGrid />
      <Footer />
      <Foot />
    </Layout>
  );
}
