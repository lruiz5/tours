const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You will fall in love with seeing the world
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            possimus iure nesciunt hic. Inventore doloremque modi fuga, magni a
            tempore illum ducimus.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventurous like never before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            possimus iure nesciunt hic. Inventore doloremque modi fuga, magni a
            tempore illum ducimus, vel voluptatum unde at dignissimos error
            beatae commodi.
          </p>
          <a href="#" className="btn-text">
            Learn More &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              srcSet="/images/japan-2-small.jpg 600w, /images/japan-2.jpg 2000w"
              src="/images/japan-2.jpg"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              srcSet="/images/golden-gate-small.jpg 600w, /images/golden-gate.jpg 2000w"
              src="/images/golden-gate.jpg"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              srcSet="/images/cinque-terre-small.jpg 600w, /images/cinque-terre.jpg 2000w"
              src="/images/cinque-terre.jpg"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 18.75em"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
