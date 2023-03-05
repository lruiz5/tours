import {
  BsGlobeAmericas,
  BsCompass,
  BsRocketTakeoff,
  BsPalette,
} from "react-icons/bs";

const Features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <BsGlobeAmericas className="feature-box__icon" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dignissimos
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <BsPalette className="feature-box__icon lbi-basic-compass" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Immurse in culture
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dignissimos
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <BsCompass className="feature-box__icon" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Find your way
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dignissimos
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <BsRocketTakeoff className="feature-box__icon" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Expanding horizons
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dignissimos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
