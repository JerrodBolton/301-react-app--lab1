import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class selectedHorned extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedHorned.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Card bg="dark" text="light" onClick={this.displayAsModal}>
              <Card.Img
                variant="top"
                alt={this.props.selectedHorned.title}
                src={this.props.selectedHorned.image_url}
              />
              <Card.Body>
                <Card.Title>{this.props.selectedHorned.title}</Card.Title>
                <Card.Text>{this.props.selectedHorned.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.handleClose} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}
