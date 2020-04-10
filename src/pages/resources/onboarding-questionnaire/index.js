import React from "react";
import { first } from "lodash";

import Layout from "./../../../components/Layout";
import SEO from "./../../../components/SEO";
import { Heading1 } from "../../../components/PageElements";
import RetrieveSiteMetadata from "./../../../components/SiteMetadata";

import styles from "./index.module.scss";

const OnboardingQuestionnairePage = () => {
  const {
    navigation: { resources }
  } = RetrieveSiteMetadata();
  const onboardingPageMetadata = first(
    resources.filter(r => r.key === "onboarding-questionnaire")
  );
  return (
    <Layout>
      <SEO
        title={onboardingPageMetadata.title}
        description={onboardingPageMetadata.description}
        pathname={onboardingPageMetadata.slug}
        image={onboardingPageMetadata.ogImage}
      />
      <header className={styles.head}>
        <Heading1>{onboardingPageMetadata.title}</Heading1>
        <p>Please be sure to scroll down on the form to complete everything.</p>
      </header>
      <iframe
        title="Onboarding Questionnaire"
        className={styles.iframe}
        src="https://docs.google.com/forms/d/e/1FAIpQLSc0E93Ufx9_kVkNt29NRN5a1RFAU-GA7wIfKhdVo1YYA24kuA/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Layout>
  );
};

export default OnboardingQuestionnairePage;
