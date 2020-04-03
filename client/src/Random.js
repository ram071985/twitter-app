import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./index.css";
import Reid from "./images/reid.png";
import ReTweet from "./images/retweet-action.png";
import Like from "./images/like-action.png";
import axios from "axios";

class Random extends Component {
  constructor() {
    super();
    this.state = {
      eckhart: [],
      dalai: []
    };
  }

  getEckhartTolle = () => {
    axios.get("/api/tweet/random")
    .then(res => {
      //update state with the tweet that came back
      console.log(res.data);
    });
  };

  render() {
    return (
      <Container className="container-random">
        <Row>
          <Col>
            <h4 className="text-center mt-3 choose-text">
              Choose from one of my <strong>5</strong> favorite twitter users to
              see <strong>10</strong> of their random tweets.
            </h4>
          </Col>
        </Row>
        <br />
        <Row className="card-row">
          <Col className="col-4">
            <button className="d-block btn btn-warning" onClick={this.getEckhartTolle} size="lg">
              <Image className="d-inline mr-2 reid-random" src={Reid} />
              <h6 className="d-inline real-name-random-one text-left">
                <strong>Reid Muchow</strong>
              </h6>
              <p className="d-block user-name-random ml-5">@ReidMuchow</p>
            </button>
          </Col>
          <Col className="col-4">
            <button className="d-block btn btn-warning" size="lg">
              <Image className="d-inline mr-2 reid-random" src={Reid} />
              <h6 className="d-inline real-name-random-one text-left">
                <strong>Reid Muchow</strong>
              </h6>
              <p className="d-block user-name-random ml-5">@ReidMuchow</p>
            </button>
          </Col>
          <Col className="col-4">
            <button className="d-block btn btn-warning" size="lg">
              <Image className="d-inline mr-2 reid-random" src={Reid} />
              <h6 className="d-inline real-name-random-one text-left">
                <strong>Reid Muchow</strong>
              </h6>
              <p className="d-block user-name-random ml-5">@ReidMuchow</p>
            </button>
          </Col>
          <Col className="col-4">
            <button className="d-block btn btn-warning" size="lg">
              <Image className="d-inline mr-2 reid-random" src={Reid} />
              <h6 className="d-inline real-name-random-one text-left">
                <strong>Reid Muchow</strong>
              </h6>
              <p className="d-block user-name-random ml-5">@ReidMuchow</p>
            </button>
          </Col>
          <Col className="col-4-5">
            <button className="d-block btn btn-warning" size="lg">
              <Image className="d-inline mr-2 reid-random" src={Reid} />
              <h6 className="d-inline real-name-random-one text-left">
                <strong>Reid Muchow</strong>
              </h6>
              <p className="d-block user-name-random ml-5">@ReidMuchow</p>
            </button>
          </Col>
        </Row>
        <br />
        <br />
        <br />

        <Row className="tweet-row">
          <Col className="tweet-col">
            <Image className="d-inline mt-1 mr-1 ml-1" src={Reid} />
            <h6 className="d-inline real-name ml-1 mt-1">
              <strong>Reid Muchow</strong>
            </h6>
            <p className="d-inline ml-2 user-handle">@ReidMuchow</p>
            <p className="d-block tweet-text">
              Hey all, I feel like I've been living under a rock. It's been ages
              since I've been on twitter.
            </p>
            <Image className="d-block retweet-image" src={ReTweet} />
            <p className="retweet-num">20</p>
            <Image className="like-image" src={Like} />
            <p className="like-num">15</p>
          </Col>
        </Row>
        <br />
      </Container>
    );
  }
}

export default Random;
