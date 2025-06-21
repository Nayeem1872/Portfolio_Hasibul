import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Md. Hasibul Islam</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software engineer from Dhaka, Bangladesh. I
              primarily work with JavaScript / TypeScript and the React
              ecosystem.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with React and Next.js
              but you&apos;ll also find me working with Node.js, MongoDB and
              Express while building the backend for my personal projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently a Mid-Level Software Engineer at{" "}
              <span className={styles.highlight}>Alo IT Consultants</span>,
              where I lead the development of modern web applications utilizing
              React, Next.js, and TypeScript.
            </p>
            <p className={styles.paragraph}>
              Previously, I worked as a Junior Software Engineer at{" "}
              <span className={styles.highlight}>Valkyrie IT Limited</span>,
              focusing on the development and maintenance of various client
              websites and web applications.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing for some amazing
              publications like{" "}
              <span className={styles.highlight}>100ms Blog</span>,{" "}
              <span className={styles.highlight}>LogRocket Blog</span>,{" "}
              <span className={styles.highlight}>DEV.to</span> and more as a
              freelance technical author.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              When I’m not at the keyboard, I like to unwind with competitive
              games like Valorant and Counter-Strike. To balance out the screen
              time, I also love getting outside for a game of football.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
