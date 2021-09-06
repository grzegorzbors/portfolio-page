import uuid from "react-uuid";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 about-img-col">
            <img src="img/about.jpg" className="img-responsive" alt="author" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>O Mnie</h2>
              <p>{props.data ? props.data.paragraph : "Ładowanie..."}</p>
              <p>{props.data ? props.data.paragraph2 : "Ładowanie..."}</p>
              <h3>Moje umiejętności</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-6">
                  <ul>
                    {props.data
                      ? props.data.Skills.map((skill) => (
                          <li key={uuid()}>
                            {skill.skillIconClass ? (
                              <i className={skill.skillIconClass}></i>
                            ) : null}
                            {skill.skillName}
                          </li>
                        ))
                      : "Ładowanie..."}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-6">
                  <ul>
                    {props.data
                      ? props.data.Skills2.map((skill) => (
                          <li key={uuid()}>
                            {skill.skillIconClass ? (
                              <i className={skill.skillIconClass}></i>
                            ) : null}
                            {skill.skillName}
                          </li>
                        ))
                      : "Ładowanie..."}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
