export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projekty</h2>
          <p>Projekty ukończone i te, nad którymi nadal pracuję.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="https://objective-jang-570820.netlify.app"
                    title="Sunnyside Landing Page"
                  >
                    <div className="hover-text">
                      <h4>Sunnyside Landing Page</h4>
                    </div>
                    <img
                      src="img/portfolio/sunnyside-project.png"
                      className="img-responsive"
                      alt="Sunnyside Landing Page"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="https://jovial-mclean-c7b204.netlify.app"
                    title="Countdown"
                  >
                    <div className="hover-text">
                      <h4>Countdown</h4>
                    </div>
                    <img
                      src="img/portfolio/countdown.png"
                      className="img-responsive"
                      alt="Countdown"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="https://musing-snyder-8ce5b3.netlify.app"
                    title="Simple Card Component"
                  >
                    <div className="hover-text">
                      <h4>Simple Card Component</h4>
                    </div>
                    <img
                      src="img/portfolio/card-component.png"
                      className="img-responsive"
                      alt="Simple Card Component"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="portfolio-item">
                <div className="hover-bg">
                  <a
                    href="https://amazing-pasteur-4c1568.netlify.app"
                    title="Beauty Clinic"
                  >
                    <div className="hover-text">
                      <h4>Beauty Clinic</h4>
                    </div>
                    <img
                      src="img/portfolio/hospital.png"
                      className="img-responsive"
                      alt="Beauty Clinic"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
