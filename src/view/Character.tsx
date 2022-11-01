import { Container, Card, ListGroup, Button } from "react-bootstrap";
import Charlist from '../data/characterList.json';
import {useState, useEffect} from 'react';
import { character } from "../data/interface";


function Main() {

    let [ charList, charListChg ] = useState(Charlist.charlist);

    return (
        <Container>
            <div className="common_div">
                <div>
                    캐릭터선택창
                </div>
            </div>
        </Container>
    )
}


function CharacterComponent(prop:character) {
    return (
        <Card className="character_card">
            <Card.Header>{prop.name}</Card.Header>
            <Card.Img variant="top" src={prop.images} alt={prop.name} />
            <Card.Body>
                <Card.Text>{prop.explation}</Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <div>
                            <span>{prop.status_hitPoint.name}</span>
                            <span> :: </span>
                            <span>{prop.status_hitPoint.value}</span>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div>
                            <span>{prop.status_mental.name}</span>
                            <span> :: </span>
                            <span>{prop.status_mental.value}</span>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div>
                            <span>{prop.status_wisdom.name}</span>
                            <span> :: </span>
                            <span>{prop.status_wisdom.value}</span>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div>
                            <span>{prop.status_agility.name}</span>
                            <span> :: </span>
                            <span>{prop.status_agility.value}</span>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div>
                            <span>{prop.status_charisma.name}</span>
                            <span> :: </span>
                            <span>{prop.status_charisma.value}</span>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                <Button variant="primary">선택</Button>
            </Card.Body>
        </Card>
    )
}

export default Main;