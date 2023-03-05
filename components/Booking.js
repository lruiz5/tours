const Booking = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Book your spot today!</h2>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full Name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email Address"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
              </div>
              <div className="form-group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    id="small"
                    name="size"
                    type="radio"
                    className="form__radio-input"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span> Small tour
                    group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    id="large"
                    name="size"
                    type="radio"
                    className="form__radio-input"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span> Large tour
                    group
                  </label>
                </div>
              </div>

              <div className="form__group">
                <button className="btn btn--primary">Next step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
