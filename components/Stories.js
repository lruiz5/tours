const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" muted autoPlay loop>
          <source src="/images/video.mp4" type="video/mp4" />
          <source src="/images/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">What People are Saying</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              srcSet="/images/nat-8.jpg 600w, /images/nat-8-large.jpg 2000w"
              src="/images/nat-8-large.jpg"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 37.5em"
              alt="tourist"
              className="story__img"
            />
            <figcaption className="story__caption">Jane Doe</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              I recently went on a tour with this company and I have to say it
              was absolutely amazing! The tour guides really went above and
              beyond to make sure we had a great time. Overall, I would highly
              recommend this tour company to anyone looking for an unforgettable
              travel experience.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              srcSet="/images/nat-9.jpg 600w, /images/nat-9-large.jpg 2000w"
              src="/images/nat-9-large.jpg"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 37.5em"
              alt="tourist"
              className="story__img"
            />
            <figcaption className="story__caption">Jack Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Wow! My life is completely different now!
            </h3>
            <p>
              I recently booked a tour with this company, and it was an amazing
              experience! The tour guides were knowledgeable, friendly, and made
              sure that everyone had a great time. I would highly recommend this
              tour company to anyone looking for a hassle-free and enjoyable
              travel experience.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
