import {
  SubscriptionCard,
  ChefSection,
  Recipes,
  CategoriesSection,
  InstaSection,
} from "@organisms";
import { HighlightCard, Section } from "@molecules";

const Home = () => {
  return (
    <>
      <Section arialabel="Highlights Section">
        <HighlightCard />
      </Section>
      <Section arialabel="Categories">
        <CategoriesSection />
      </Section>
      <Section arialabel="Chef Section">
        <ChefSection />
      </Section>
      <Section>
        <InstaSection />
      </Section>
      <Section arialabel="Recipes">
        <Recipes />
      </Section>
      <Section arialabel="Subscription Card">
        <SubscriptionCard />
      </Section>
    </>
  );
};

export default Home;
