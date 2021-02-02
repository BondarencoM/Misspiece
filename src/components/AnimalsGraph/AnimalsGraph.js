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


const layouts = {
    empty: {},
    cose: { name: "cose", nodeDimensionsIncludeLabels: true },
    concentric: {
        name: "concentric", minNodeSpacing: 50, levelWidth: () => 1, concentric: n => {
            if (n.data('id') === 'Human')
                return 100
            else if (n.edgesWith('#Human').isEdge())
                return 70
            else if (n.data('type') === 'Proto')
                return 1
            return 25 - n.degree()
        }
    },
    cola: { name: "cola", componentSpacing: 200 },
    spread: { name: "spread", },
    dreamcatcher: { name: "breadthfirst", circle: true, spacingFactor: 1.25 },
    cellular: { name: "cose-bilkent", edgeElasticity: 0.05, nodeRepulsion: 10000, idealEdgeLength: 250, nodeDimensionsIncludeLabels: true }
}

export function AnimalsGraph({ layout }) {

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
        cy.current.on('mouseover', 'node', function (e) {
            console.log(cy.current.container())
            cy.current.container().style['cursor'] = 'pointer'
        })
        cy.current.on('mouseout', 'node', function (e) {
            cy.current.container().style['cursor'] = 'default'
        })
    })

    return (
        <CytoscapeComponent elements={elements} layout={layouts[layout]} style={{ width: '100%', height: '100%' }}
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
                    selector: 'node:selected',
                    style: styleVars.nodeSelected
                },
                {
                    selector: 'edge.highlighted',
                    style: styleVars.primaryHighlightedEdge
                },
            ]}
        />
    )
}


