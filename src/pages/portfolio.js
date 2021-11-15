//importing required files
import React, { Component } from "react";
import { Col, Jumbotron, Container, Row } from 'react-bootstrap'

class Portfolio extends Component {
  state = {
    projects: [
      {
        "title": " Live Chat App ",
        "image": "1.png",
        "url": "  https://birds-of-a-feather-chat.herokuapp.com"
      },
      {
        "title": "Weather API",
        "image": "2.png",
        "url": "https://varunisinha.github.io/weather-api-app/"
      },
      {
        "title": " Game Time",
        "image": "3.png",
        "url": " https://varunisinha.github.io/game-time/"
      },
      {
        "title": "Password Generator",
        "image": "4.png",
        "url": "https://varunisinha.github.io/passwordgenerator/"
      },
      {
        "title": "Coding Quiz",
        "image": "5.png",
        "url": "https://varunisinha.github.io/coding-quiz/"
      },
      {
        "title": "Work Day Scheduler",
        "image": "6.png",
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
        var projectImage = '../images/' + projects.image;

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
      <div style={{ backgroundColor: "black", textAlign: 'center' }}>
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

