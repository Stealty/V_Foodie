import {
  SubscriptionCard,
  ChefSection,
  Recipes,
  CategoriesSection,
  InstaSection,
} from "@organisms";
import { Section } from "@molecules";
import Highlights from "../components/molecules/highlights/highlights";

const Home = () => {
  return (
    <>
      <Section arialabel="Highlights Section">
        <Highlights />
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
