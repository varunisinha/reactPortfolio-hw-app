//importing required files
import React, { Component } from "react";
import { Col, Jumbotron, Container, Row } from 'react-bootstrap'

class Portfolio extends Component {
  state = {
    projects: [
      {
        "title": " Live Chat App ",
        "image": "https://github.com/varunisinha/reactPortfolio-hw-app/blob/main/public/images/1.png?raw=true",
        "url": "  https://birds-of-a-feather-chat.herokuapp.com"
      },
      {
        "title": "Weather API",
        "image": "https://github.com/varunisinha/reactPortfolio-hw-app/blob/main/public/images/2.png?raw=true",
        "url": "https://varunisinha.github.io/weather-api-app/"
      },
      {
        "title": " Game Time",
        "image": "https://github.com/varunisinha/reactPortfolio-hw-app/blob/main/public/images/3.png?raw=true",
        "url": " https://varunisinha.github.io/game-time/"
      },
      {
        "title": "Password Generator",
        "image": "https://github.com/varunisinha/reactPortfolio-hw-app/blob/main/public/images/4.png?raw=true",
        "url": "https://varunisinha.github.io/passwordgenerator/"
      },
      {
        "title": "Coding Quiz",
        "image": "https://github.com/varunisinha/reactPortfolio-hw-app/blob/main/public/images/5.png?raw=true",
        "url": "https://varunisinha.github.io/coding-quiz/"
      },
      {
        "title": "Work Day Scheduler",
        "image": "https://github.com/varunisinha/reactPortfolio-hw-app/blob/main/public/images/6.png?raw=true",
        "url": "https://varunisinha.github.io/work-day-scheduler/"
      }
    ],
  };

  componentDidMount() {
    this.setState(this.projects);
  }


  render() {
    console.log(this.state.projects)
    if (this.state.projects) {
      var projects = this.state.projects.map(function (projects) {
        var projectImage = projects.image;

        return (
          <div key={projects.title} className="columns portfolio-item">
            <Row className="text-center">
              <Col size="col-lg-6 text-center" style={{ marginTop: 10, padding: 10 }}>
                <div className="col  mb-6" key={projects.title}>
                  <div className="card">
                    <img
                      src={projectImage}
                      className="card-img-top"
                      alt="IMG"
                      width="200"
                      height="250"
                    ></img>
                    <div className="card-body justify-content-center">
                      <a className="nav-link" href={projects.url}>
                        <h5 className="card-title btn-primary text-white text-center p-2" style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }} >
                          {projects.title}
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )
      })
    }

    return (
      <div id="portfolio" style={{ backgroundColor: "black", textAlign: 'center' }}>
        <Jumbotron
          style={{ backgroundColor: "grey" }}
        >
          <h1 >Portfolio</h1>
        </Jumbotron>
        <Container style={{ marginTop: 50, padding: 50 }}>
          {projects}
        </Container>
      </div>
    );
  }
}
//exporting for use elsewhere
export default Portfolio;

