import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import TechMapGrid from '../theme/sections/techmap-grid/techmap-grid';

export default function TechMap() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={'Technology Radar'}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName={'page-showcase'}
    >
      <TechMapGrid />
      {/* <Footer /> */}
      {/* <Foot /> */}
    </Layout>
  );
}
