import { useState } from 'react'
import { Container, Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { AnimalsGraph } from '../../components/AnimalsGraph/AnimalsGraph'

export function HomePage() {

    let [graphLayout, setGraphLayout] = useState('cellular')
    console.log(graphLayout)
    return (
        <Container fluid className="contain-all">
            <Row className="justify-content-center m-4">
                <Col xs={3}>
                    <ToggleButtonGroup value={graphLayout} onChange={setGraphLayout} name="graphLayoutButtons" >
                        <ToggleButton variant="outline-primary" value="dreamcatcher"> Dreamcatcher </ToggleButton>
                        <ToggleButton variant="outline-primary" value="cellular"> Ceullular </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
                <Col className="text-center">
                    <h1> Misspiece </h1>
                </Col>
                <Col xs={3}>

                </Col>
            </Row>
            <Row className="flex-grow-1" >
                <Col>
                    <AnimalsGraph layout={graphLayout}></AnimalsGraph>
                </Col>
            </Row>
        </Container >
    )
}

