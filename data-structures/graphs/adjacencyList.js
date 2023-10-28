class Graph {
  constructor() {
    // Create new adjacency list
    this.list = new Map()
  }

  // Add new node (vertex)
  addNode(node) {
    // If this node doesn't exists yet, 
    // then we add this new node inside the list with an empty array value
    // (where the neighboring nodes will be stored)
    if (!this.list.has(node)) {
      this.list.set(node, [])
    }
  }

  // Add connection (edge)
  addConnection(node1, node2) {
    // If both nodes exists (for example, 
    // in a disconnected graph where not all nodes are connected, 
    // where there might be nodes on their own), 
    // then we can add a connection from node1 to node2 for example
    if (this.list.has(node1) && this.list.has(node2)) {
      this.list.get(node1).push(node2)
    } else {
       // If node1 exists, then we add node2 inside the node1 array
      if (this.list.has(node1) && !this.list.has(node2)) {
      // Get the array of node1 and add node2 into it
      this.list.get(node1).push(node2)
      } else {
      // If node1 doesn't exists,
      // then we add it to the list and will point to an array containing node2
        this.list.set(node1, [node2])
        return
     }

      // If node2 exists, then we add node1 inside the node2 array
      if (this.list.has(node2) && !this.list.has(node1)) {
      // Get the array of node2 and add node1 into it
      this.list.get(node2).push(node1)
     } else {
      // If node2 doesn't exists, 
      // then we add it to the list and will point to an array containing node1
        this.list.set(node2, [node1])
        return
      }
    }
  }

  // Delete node
  deleteNode(node) {
    if (this.list.has(node)) {
      this.list.delete(node)

      // Delete the connection to the node
      for (let [n, connections] of this.list) {
        const index = connections.indexOf(node)
        
        if (connections.includes(node)) {
          connections.splice(index, 1)
        }
      }
    }
  }

  // Delete connections
  deleteConnection(node1, node2) {
    if (this.list.has(node1) && this.list.has(node2)) {
      const node1Array = this.list.get(node1)
      const node2Array = this.list.get(node2)

      const indexOfNode1 = node2Array.indexOf(node1)
      const indexOfNode2 = node1Array.indexOf(node2)

      if (node1Array.includes(node2)) {
        node1Array.splice(indexOfNode2, 1)
      }

      if (node2Array.includes(node1)) {
        node2Array.splice(indexOfNode1, 1)
      }
    }
  }

  // Check if 2 nodes are connected
  checkConnection(node1, node2) {
    if (this.list.has(node1) && this.list.has(node2)) {
      const node1Array = this.list.get(node1)
      const node2Array = this.list.get(node2)

      if (node1Array.includes(node2) && node2Array.includes(node1)) {
        console.log('true')
        return
      } 
      console.log('false')
    }
  }

  // Print the adjacency list
  printList() {
    for (let [node, connections] of this.list) {
      console.log(node + "->" + connections)
    }
  }
}

// Create a new graph
const graph = new Graph() // {}

// Add nodes
graph.addNode(5) // {5 => []}
graph.addNode(3) // {5 => [], 3 => []}
graph.addNode(9) // {5 => [], 3 => [], 9 => []}

// Add connections
graph.addConnection(5, 3) // {5 => [3], 3 => [], 9 => []}
graph.addConnection(1, 9) // {5 => [3], 3 => [], 9 => [], 1 => [9]}
graph.addConnection(5, 9) // {5 => [3, 9], 3 => [], 9 => [], 1 => [9]}

// Print the list
graph.printList() // {5 => [3, 9], 3 => [], 9 => [], 1 => [9]}

// Delete nodes
graph.deleteNode(9) // {5 => [3], 3 => [], 1 => []}

// Delete connections
graph.addConnection(5, 1)
graph.addConnection(1, 5) // { 5 => [ 3, 1 ], 3 => [], 1 => [ 5 ] }
graph.deleteConnection(5, 1) // { 5 => [ 3 ], 3 => [], 1 => [] }

graph.addConnection(3, 5)
graph.checkConnection(5, 3) // true
graph.checkConnection(5, 1) // false

console.log(graph)