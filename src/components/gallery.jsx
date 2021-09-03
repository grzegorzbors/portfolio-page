export const Gallery = ({ data }) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Projekty</h2>
          <p>Projekty ukończone i te, nad którymi nadal pracuję:</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data
              ? data.map(({ url, title, img }) => (
                  <div className="col-sm-12 col-md-6 col-lg-6" key={url}>
                    <div className="portfolio-item">
                      <div className="hover-bg">
                        <a href={url} title={title}>
                          <div className="hover-text">
                            <h4>{title}</h4>
                          </div>
                          <img
                            src={img}
                            className="img-responsive"
                            alt={title}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
