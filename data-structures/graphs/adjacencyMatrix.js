class Graph {
  constructor(numOfNodes) {
    this.numOfNodes = numOfNodes;
    this.matrix = []

    for (let i = 0; i < numOfNodes; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < numOfNodes; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  // Add connections (edges)
  addConnections(node1, node2) {
    if (node1 >= 0 && node1 < this.numOfNodes && node2 >= 0 && node2 < this.numOfNodes) {
      this.matrix[node1][node2] = 1
    }
  }

  // Delete connections
  deleteConnections(node1, node2) {
    if (node1 >= 0 && node1 < this.numOfNodes && node2 >= 0 && node2 < this.numOfNodes) {
      this.matrix[node1][node2] = 0
    }
  }

  // Delete nodes
  deleteNode(node) {
    if (node >= 0 && node < this.numOfNodes) {
      this.matrix.splice(node, 1);
      this.numOfNodes--;

      for (let i = 0; i < this.numOfNodes; i++) {
        this.matrix[i].splice(node, 1)
      }
    }
  }

  // Check if two nodes are connected
  checkConnection(node1, node2) {
    
        if (this.matrix[node1][node2] === 1) {
          console.log('true')
          return
        }
    console.log('false')
  }

  // Print matrix
  printMatrix() {
    for (let i = 0; i < this.numOfNodes; i++) {
      const row = this.matrix[i].join(' ')
      console.log(row)
    }
  }
}

// Create a new graph
const graph = new Graph(5)
/*  
numOfNodes: 5,
matrix: [
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]
]
*/

// Add connections
graph.addConnections(1, 3)
graph.addConnections(0, 2)
graph.addConnections(3, 1)
/*
 [ 0, 0, 1, 0, 0 ],
 [ 0, 0, 0, 1, 0 ],
 [ 0, 0, 0, 0, 0 ],
 [ 0, 1, 0, 0, 0 ],
 [ 0, 0, 0, 0, 0 ]
*/

// Delete connections
graph.deleteConnections(0, 2)
/*
 [ 0, 0, 0, 0, 0 ],
 [ 0, 0, 0, 1, 0 ],
 [ 0, 0, 0, 0, 0 ],
 [ 0, 1, 0, 0, 0 ],
 [ 0, 0, 0, 0, 0 ]
*/

// Delete nodes
graph.deleteNode(2)
/*
numOfNodes: 4,
matrix: [ 
  [ 0, 0, 0, 0 ], 
  [ 0, 0, 1, 0 ], 
  [ 0, 1, 0, 0 ], 
  [ 0, 0, 0, 0 ] 
]
*/

graph.checkConnection(2, 1) // true
graph.checkConnection(2, 0) // false

// Print matrix
graph.printMatrix() 
/*
0 0 0 0 0
0 0 0 1 0
0 1 0 0 0
0 0 0 0 0
*/

console.log(graph)