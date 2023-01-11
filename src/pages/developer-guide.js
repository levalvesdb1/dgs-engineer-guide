import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import GetStarted from '../theme/sections/developer-guide/developer-guide-page';
import Footer from '../theme/sections/footer/footer';
import Foot from '../theme/sections/foot/foot';

export default function DeveloperGuide() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={'Developer Guide'}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName={'page-get-started'}
    >
      <GetStarted />
      <Footer />
      <Foot />
    </Layout>
  );
}
