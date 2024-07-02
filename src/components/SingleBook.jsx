import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        className="libri"
        style={{
          width: "18rem",
          transform: this.state.selected ? "scale(1.1)" : "",
          borderColor: this.state.selected ? "red" : "",
        }}
      >
        <Card.Img
          style={{ height: "400px" }}
          variant="top"
          src={this.props.libro.img}
          onClick={() => this.setState({ selected: !this.state.selected })}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{this.props.libro.title}</Card.Title>
          <Button variant="primary">{this.props.libro.price} € </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
