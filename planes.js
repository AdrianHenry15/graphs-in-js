// represent a graph


const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
];

// either matrix or adjacency list
// adjacency list
// key value pair
// key = name of the airport and value is an array of edges
// edges = the other airports that the initial airport is connected to

// Maps are better than objects because of the api methods implemented
// behaves better like a dictionary or hash map
const adjacencyList = new Map();

// this represents node on graph
const addNode = airport => adjacencyList.set(airport, []);

// origin airport to the destination
// destination to origin
const addEdge = (origin, destination) => {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjacencyList)

module.export = planes;