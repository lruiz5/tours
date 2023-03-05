const PopUp = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img
            src="/images/nat-8.jpg"
            alt="Tour Photo"
            className="popup__img"
          />
          <img
            src="/images/nat-9.jpg"
            alt="Tour Photo"
            className="popup__img"
          />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            soluta aliquam quod! Dolore aspernatur, quos ducimus officia omnis
            reprehenderit consectetur aliquid error perspiciatis minus
            voluptatibus. Similique porro laudantium possimus reprehenderit
            natus aliquid inventore impedit obcaecati explicabo temporibus
            nostrum accusantium iusto tempore animi sed voluptatum maiores odio
            itaque quos, nesciunt corporis. Aperiam quam corporis vel laudantium
            quo non reiciendis assumenda recusandae voluptates placeat ex
            repellat quis porro fugit ducimus, deserunt expedita iste neque
            soluta libero sit temporibus quas nam! Explicabo beatae animi
            repudiandae. Id recusandae, consequuntur obcaecati, molestiae
            accusantium tenetur blanditiis mollitia, fuga explicabo eos ad vel
            in voluptates ipsam sunt?
          </p>
          <a href="#" className="btn btn--primary">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
