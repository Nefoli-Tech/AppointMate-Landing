import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features3 from '~/components/widgets/Features3';
import Steps from '~/components/widgets/Steps';
import Testimonial from '~/components/widgets/Testimonial';
import FAQs2 from '~/components/widgets/FAQs2';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import {
  callToActionData,
  faqsData2,
  featuresData,
  heroData,
} from '~/shared/data';
import Contact from '~/components/widgets/Contact';

export default function Page() {
  return (
    <>
      <Hero data={heroData} />
      <Features3 {...featuresData} />
      <Steps />
      <Testimonial />
      <FAQs2 {...faqsData2} />
      <Team />
      <Contact />
    </>
  );
}
