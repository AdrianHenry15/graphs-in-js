import planes from './planes';

// BFS Breadth First Search
const bfs = (start) => {

    const queue = [start]

    while (queue.length > 0) {
        const airport = queue.shift(); // mutates the queue

        const destinations = adjacencyList.get(airport);

        for (const destination of destinations) {
            queue.push(destination);

            if (destination === 'BKK') {
                console.log('found it!')
            }
        }
    }
}