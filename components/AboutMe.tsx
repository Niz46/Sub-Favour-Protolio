import AboutList from "./AboutList";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full h-full bg-black text-white py-28 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-16">
        <h1 className="text-3xl uppercase font-semibold text-center">
          A Story about me.
        </h1>
        <p className="text-xl md:text-3xl font-medium md:leading-relaxed text-textColor">
          I'm a{" "}
          <span className="font-bold tracking-wider text-white">
            Software Engineer
          </span>{" "}
          and I'm a freelance{" "}
          <span className="font-bold text-white">wed developer</span>. I have been writing code professionally for more than 3 years, 
          with a focus on mobile development and cross-platform using React and Next.js framework. <br />
          In my free time, I contribute to open-source libraries to solve real-world problems, 
          which also helps in my learning path. Additionally, I love playing video games while listening to music.
        </p>
        <div className="w-[700px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <AboutList title="Web design" />
          {/* <AboutList title="Graphic & print" /> */}
          <AboutList title="iOS design" />
          <AboutList title="Front-end development" />
          <AboutList title="User experience" />
          {/* <AboutList title="Branding" /> */}
          <AboutList title="Back-end development" />
          <AboutList title="Responsive" />
          <AboutList title="Wordpress Website" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
