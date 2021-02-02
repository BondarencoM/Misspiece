import { Container, Row, Col } from 'react-bootstrap'
import { AnimalsGraph } from '../../components/AnimalsGraph/AnimalsGraph'

export function HomePage() {
    return (
        <Container fluid className="contain-all">
            <Row className="justify-content-center">
                <h1> Misspiece </h1>
            </Row>
            <Row className="flex-grow-1" >
                <Col>
                    <AnimalsGraph></AnimalsGraph>
                </Col>
            </Row>
        </Container >
    )
}

