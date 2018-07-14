// get the graph of nodes for a tour
function TourVizGraph(tour, containerId){
    let g = {
        nodes: [],
        edges: []
    }, s = {graph: g,
        container: containerId,
        settings: {
            mouseWheelEnabled: false
        }};
    for (var i = 0; i < tour.length; i++) {
        g.nodes.push({
            id: 'c' + i,
            label: tour[i].label,
            x: tour[i].x,
            y: tour[i].y,
            size: 1,
            color: '#555'
        });
    }

    //do edges
    for (var i = 0; i < tour.length; i++) {
        if (i < (tour.length - 1)) {
            g.edges.push({
                id: 'e' + i,
                source: 'c' + i,
                target: 'c' + (i + 1),
                size: tour[i].distanceTo(tour[i + 1]),
                color: '#555'
            });
        } else {
            g.edges.push({
                id: 'e' + i,
                source: 'c' + i,
                target: 'c' + 0,
                size: tour[i].distanceTo(tour[0]),
                color: '#ccc'
            });
        }
    }
    return {g:g, s:s};
}