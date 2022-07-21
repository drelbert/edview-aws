import { useParams } from 'react-router-dom';

const content = {
  sped:
    "Content to be updated to meet user stories around special education workflows: IEP, Testing, Behavior, and ...",
  rti:
    'Future RTI data and views.',
  ell:
    'Future Ell data and views',

  students:
    "Joe, Mike, Tor, Lea, Maria.",
  office:
    "Keep it lean cadence. Deep dive i need to pee and then go to another meeting and focus on the customer journey yet performance review. Thought shower I just wanted to give you a heads-up tiger team. Ensure to follow requirements when developing solutions pulling teeth, so deep dive single wringable neck or on-brand but completeley fresh yet we need to harvest synergy effects. Let's unpack that later what's the status on the deliverables for eow?, yet in an ideal world and on this journey yet churning anomalies we want to see more charts or target rich environment",
};

export const Page = () => {
  const { id } = useParams();
  return <p>{content[id]}</p>;
};
