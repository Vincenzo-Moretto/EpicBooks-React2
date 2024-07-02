import { FaArrowCircleUp, FaBook } from "react-icons/fa";
import fantasy from "../data/fantasy.json";
import SingleBook from "./SingleBook";
/* import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json"; */

import { Component } from "react";
import { Form, Row } from "react-bootstrap";

class AllTheBooks extends Component {
  state = {
    searchQuaery: "",
  };

  filterBookList = (e) => {
    this.setState({ searchQuaery: e.target.value });
  };

  arrowup = () => {
    window.location.href = "#";
  };

  render() {
    return (
      <>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Carca un libro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Signore degli anelli, Lo Hobbit..."
              value={this.state.searchQuaery}
              onChange={this.filterBookList}
            />
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-center flex-wrap gap-5 my-5 pb-5">
          {[...fantasy /*  ...history, ...horror, ...romance, ...scifi */]
            .filter((libro) => libro.title.toLowerCase().includes(this.state.searchQuaery.toLocaleLowerCase()))
            .map((libro) => (
              <SingleBook key={libro.asin} libro={libro} />
            ))}
        </div>
        <FaArrowCircleUp className="arrowup " onClick={this.arrowup} />
      </>
    );
  }
}

export default AllTheBooks;
