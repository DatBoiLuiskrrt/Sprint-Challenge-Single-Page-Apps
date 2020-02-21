import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Col
} from "reactstrap";


export default function CharacterCard(props) {
  console.log(props.data);
  return (
    
    <Col xs="6" md="4" xl="3">
    <Card>
    <img src={props.data.image} />
    <CardHeader>Name: {props.data.name}</CardHeader>
    <CardText>Species: {props.data.species}</CardText>
    <CardText>Gender: {props.data.gender}</CardText>
    <CardText>Location: {props.data.location.name}</CardText>
    <CardText>Status: {props.data.status}</CardText>
    </Card>
    </Col>
  )
}
