import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({id: 'home.feature.FES.title', message: 'Fast, Easy, Sleek'}),
    description: (
      <Translate id="home.feature.FES.description">
        SideStore is meant to be a functional application, and in being functional
        is good looking, and not overcomplicated.
      </Translate>
    ),
  },
  {
    title: translate({id: 'home.feature.power.title', message: 'Power is Key'}),
    description: (
      <Translate id="home.feature.power.description">
        The ability to install applications not found on Apple's App Store is not
        common, and SideStore fills a large gap in the sideloading field.
      </Translate>
    ),
  },
  {
    title: translate({id: 'home.feature.openSource.title', message: 'Open Source'}),
    description: (
      <Translate id="home.feature.openSource.description">
        We find open source software very important, as SideStore is itself open source.
        Anyone is welcome to make contributions to any SideStore project on GitHub.
      </Translate>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
