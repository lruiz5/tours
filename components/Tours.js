import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Popular Tours</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <Tour
            country="america"
            title="Venture Across America"
            length="12 day tour"
            guests="Up to 10 people"
            guides="2 tour guides"
            feature="Cross-country Trek"
            featurette="Immerse in Cultural Diverisity"
            price="2399"
          />
        </div>
        <div className="col-1-of-3">
          <Tour
            country="japan"
            title="Journey to Japan"
            length="14 day tour"
            guests="7 or more people"
            guides="2 tour guides"
            feature="Discover Ancient Traditions"
            featurette="Marvel Modern Wonders"
            price="3499"
          />
        </div>
        <div className="col-1-of-3">
          <Tour
            country="europe"
            title="Discovering Europe"
            length="21 day tour"
            guests="Up to 12 people"
            guides="3 tour guides"
            feature="Explore Europes Hidden Gems"
            featurette="Enjoy World Class Cusine"
            price="4999"
          />
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--primary">
          Discover more
        </a>
      </div>
    </section>
  );
};

export default Tours;
