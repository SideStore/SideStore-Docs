import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fast, Easy, Sleek',
    description: (
      <>
        SideStore is meant to be a functional application, and in being functional
        is good looking, and not overcomplicated.
      </>
    ),
  },
  {
    title: 'Power is Key',
    description: (
      <>
        The ability to install applications not found on Apple's App Store is not
        common, and SideStore fills a large gap in the sideloading field.
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        We find open source software very important, as SideStore is itself open source.
        Anyone is welcome to make contributions to any SideStore project on GitHub.
      </>
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
