import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Intro from '../theme/sections/intro/intro';
import Why from '../theme/sections/why/why';
import Panels from '../theme/sections/panels/panels';
import DeveloperGuide from '../theme/sections/developer-guide/developer-guide-page';
import Features from '../theme/sections/features/features';
import Footer from '../theme/sections/footer/footer';
import Foot from '../theme/sections/foot/foot';

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      keywords={siteConfig.customFields.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
      wrapperClassName={'page-home'}
    >
      <Intro />
      <Why />
      {/* <DeveloperGuide />
      <Features />
      <Panels /> */}
      <Footer />
      <Foot />
    </Layout>
  );
}
