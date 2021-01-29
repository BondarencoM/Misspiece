import { useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './style.css'

const animals = {
    Griffon: {},
    Sphinx: {},
    Harpy: {},
    Minotaur: {},
    Lamssu: {},
}

const protos = {
    Human: {
        name: 'Human',
        animals: [animals.Sphinx, animals.Harpy, animals.Minotaur, animals.Lamssu]
    },
    Bird: {
        name: 'Bird',
        animals: [animals.Harpy, animals.Lamssu],
    },
    Bull: {
        name: 'Bull',
        animals: [animals.Lamssu, animals.Minotaur],
    },
    Lion: {
        name: 'Lion',
        animals: [animals.Griffon, animals.Sphinx]
    },
    Some: {
        name: 'Some',
    },
}


export function AnimalsGraph() {

    useEffect(() => {
        const main = document.querySelector('#animals-graph')
        const protos = main.querySelectorAll('.proto')
        const center = {
            x: main.clientWidth / 2,
            y: main.clientHeight / 2
        }

        const radius = main.clientHeight / 2 - 100
        for (let i = 0; i < protos.length; i++) {
            const x = center.x + (radius * Math.sin(2 * Math.PI * i / protos.length)) + 'px'
            const y = center.y - radius * (1 - Math.cos(2 * Math.PI * i / protos.length)) + 'px'
            console.log({ x, y })
            protos[i].style.left = x
            protos[i].style.bottom = y
        }
    })

    return (
        <Container>
            <br />
            <br />
            <Row className="justify-content-center">
                <Col>
                    <div id="animals-graph" >
                        {Object.values(protos).map(p => (<div className='proto' key={p.name}> {p.name} </div>))}
                    </div>
                </Col>
            </Row>
        </Container >
    )
}


