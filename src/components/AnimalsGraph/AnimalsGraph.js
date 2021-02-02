import { useEffect, useRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import CytoscapeComponent from 'react-cytoscapejs'
import Cytoscape from 'cytoscape'
import CytoscapeCola from 'cytoscape-cola'
import CytoscapeSpread from 'cytoscape-spread'
import CoseBilkent from 'cytoscape-cose-bilkent'
import './style.css'
import styleVars from './styleVars.json'
import elements from './animalsInfo'

Cytoscape.use(CytoscapeCola)
Cytoscape.use(CytoscapeSpread)
Cytoscape.use(CoseBilkent)

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

    let cy = useRef(null)

    function clearHighlights() {
        for (let node of cy.current.$('.highlighted'))
            node.removeClass('highlighted')
    }

    function onNodeClick(e) {
        clearHighlights()
        for (let element of e.target.neighbourhood()) {
            element.addClass('highlighted')
        }
    }

    function onBackgroundClick() {
        clearHighlights()
    }

    useEffect(() => {
        cy.current.on('click', (e) => {
            if (e.target === cy.current)
                onBackgroundClick(e)
            else if (e.target.isNode())
                onNodeClick(e)
        })
    })


    let layout = {}
    layout = { name: "cose", nodeDimensionsIncludeLabels: true }
    // layout = {
    //     name: "concentric", minNodeSpacing: 50, levelWidth: () => 1, concentric: n => {
    //         if (n.data('id') === 'Human')
    //             return 100
    //         else if (n.edgesWith('#Human').isEdge())
    //             return 70
    //         else if (n.data('type') === 'Proto')
    //             return 1
    //         return 25 - n.degree()
    //     }
    // }
    // layout = { name: "cola", componentSpacing: 200 }
    // layout = { name: "spread", }
    // layout = { name: "breadthfirst", circle: true, spacingFactor: 1.25 }
    layout = { name: "cose-bilkent", edgeElasticity: 0.1, nodeRepulsion: 6000, nodeDimensionsIncludeLabels: true }

    return (
        <Row className="justify-content-center">
            <Col>
                <CytoscapeComponent elements={elements} layout={layout} style={{ width: '100vw', height: '100vh' }}
                    cy={ref => cy.current = ref}
                    stylesheet={[
                        {
                            selector: 'node',
                            style: {
                                label: elem => elem.data('label') || elem.data('id'),
                                ...styleVars.node,
                            },
                        },
                        {
                            selector: 'node[type="Proto"]',
                            style: styleVars.protoNode
                        },
                        {
                            selector: 'node[type="Animal"]',
                            style: styleVars.animalNode
                        },
                        {
                            selector: 'node.highlighted',
                            style: styleVars.primaryHighlightNode
                        },
                        {
                            selector: 'edge.highlighted',
                            style: styleVars.primaryHighlightedEdge
                        }
                    ]}
                />
            </Col>
        </Row>
    )
}


