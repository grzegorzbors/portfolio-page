export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Ładowanie..."}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Ładowanie..."}</p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll btn-learn-more"
                >
                  Dowiedz się więcej
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
