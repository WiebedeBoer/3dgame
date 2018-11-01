/**
 * Basic priority queue implementation. If a better priority queue is wanted/needed,
 * this code works with the implementation in google's closure library (https://code.google.com/p/closure-library/).
 * Use goog.require('goog.structs.PriorityQueue'); and new goog.structs.PriorityQueue()
 */
function PriorityQueue () {
  this._nodes = [];

  this.enqueue = function (priority, key) {
    this._nodes.push({key: key, priority: priority });
    this.sort();
  };
  this.dequeue = function () {
    return this._nodes.shift().key;
  };
  this.sort = function () {
    this._nodes.sort(function (a, b) {
      return a.priority - b.priority;
    });
  };
  this.isEmpty = function () {
    return !this._nodes.length;
  };
}

/**
 * Pathfinding starts here
 */
function Graph(){
  var INFINITY = 1/0;
  this.vertices = {};

  this.addVertex = function(name, edges){
    this.vertices[name] = edges;
  };

  this.shortestPath = function (start, finish) {
    var nodes = new PriorityQueue(),
        distances = {},
        previous = {},
        path = [],
        smallest, vertex, neighbor, alt;

    for(vertex in this.vertices) {
      if(vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      }
      else {
        distances[vertex] = INFINITY;
        nodes.enqueue(INFINITY, vertex);
      }

      previous[vertex] = null;
    }

    while(!nodes.isEmpty()) {
      smallest = nodes.dequeue();

      if(smallest === finish) {
        path = [];

        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if(!smallest || distances[smallest] === INFINITY){
        continue;
      }

      for(neighbor in this.vertices[smallest]) {
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        if(alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;

          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return path;
  };
}

var g = new Graph();
/*
g.addVertex('A', {B: 7, C: 8});
g.addVertex('B', {A: 7, F: 2});
g.addVertex('C', {A: 8, F: 6, G: 4});
g.addVertex('D', {F: 8});
g.addVertex('E', {H: 1});
g.addVertex('F', {B: 2, C: 6, D: 8, G: 9, H: 3});
g.addVertex('G', {C: 4, F: 9});
g.addVertex('H', {E: 1, F: 3});
*/

g.addVertex('a', {h: 90,b: 90});
g.addVertex('b', {a: 90,c: 90});
g.addVertex('c', {b: 90,d: 90});
g.addVertex('d', {c: 90,e: 90});
g.addVertex('e', {d: 90,f: 90});
g.addVertex('f', {e: 90,g: 90});
g.addVertex('g', {f: 90,m: 90});
g.addVertex('h', {a: 90,i: 90});
g.addVertex('i', {h: 90,j: 90});
g.addVertex('j', {i: 90,k: 90});
g.addVertex('k', {j: 90,l: 90});
g.addVertex('l', {k: 90,r: 90});
g.addVertex('m', {g: 90,n: 90});
g.addVertex('n', {m: 90,o: 90});
g.addVertex('o', {n: 90,p: 90});
g.addVertex('p', {o: 90,q: 90});
g.addVertex('q', {p: 90,x: 90});
g.addVertex('r', {l: 90,s: 90});
g.addVertex('s', {r: 90,t: 90});
g.addVertex('t', {s: 90,u: 90});
g.addVertex('u', {t: 90,v: 90});
g.addVertex('v', {u: 90,w: 90});
g.addVertex('w', {v: 90,x: 90});
g.addVertex('x', {q: 90,w: 90});

// Log test, with the addition of reversing the path and prepending the first node so it's more readable
console.log(g.shortestPath('A', 'H').concat(['A']).reverse());


/*
//dijkstra solve graph starting at s
function solve(graph, s) {
  var solutions = {};
  solutions[s] = [];
  solutions[s].dist = 0;
  
  while(true) {
    var parent = null;
    var nearest = null;
    var dist = Infinity;
    
    //for each existing solution
    for(var n in solutions) {
      if(!solutions[n])
        continue
      var ndist = solutions[n].dist;
      var adj = graph[n];
      //for each of its adjacent nodes...
      for(var a in adj) {
        //without a solution already...
        if(solutions[a])
          continue;
        //choose nearest node with lowest *total* cost
        var d = adj[a] + ndist;
        if(d < dist) {
          //reference parent
          parent = solutions[n];
          nearest = a;
          dist = d;
        }
      }
    }
    
    //no more solutions
    if(dist === Infinity) {
        break;
    }
    
    //extend parent's solution path
    solutions[nearest] = parent.concat(nearest);
    //extend parent's cost
    solutions[nearest].dist = dist;
  }
  
  return solutions;
}
//create graph
var graph = {};

var layout = {
  'a': ['h','b'],
  'b': ['a','c'],
  'c': ['b','d'],
  'd': ['c','e'],
  'e': ['d','f'],
  'f': ['e','g'],
  'g': ['f','m'],
  'h': ['a','i'],
  'i': ['h','j'],
  'j': ['i','k'],
  'k': ['j','l'],
  'l': ['k','r'],
  'm': ['g','n'],
  'n': ['m','o'],
  'o': ['n','p'],
  'p': ['o','q'],
  'q': ['p','x'],
  'r': ['l','s'],
  's': ['r','t'],
  't': ['s','u'],
  'u': ['t','v'],
  'v': ['u','w'],
  'w': ['v','x'],
  'x': ['q','w']
}

//convert uni-directional to bi-directional graph
// needs to look like: where: { a: { b: cost of a->b }
// var graph = {
//     a: {e:1, b:1, g:3},
//     b: {a:1, c:1},
//     c: {b:1, d:1},
//     d: {c:1, e:1},
//     e: {d:1, a:1},
//     f: {g:1, h:1},
//     g: {a:3, f:1},
//     h: {f:1}
// };

for(var id in layout) {
  if(!graph[id])
    graph[id] = {};
  layout[id].forEach(function(aid) {
    graph[id][aid] = 1;
    if(!graph[aid])
      graph[aid] = {};
    graph[aid][id] = 1;
  });
}

//choose start node
var start = '10';
//get all solutions
var solutions = solve(graph, start);

//console.log("From '"+start+"' to");
//display solutions
for(var s in solutions) {
  if(!solutions[s]) continue;
  //console.log(" -> " + s + ": [" + solutions[s].join(", ") + "]   (dist:" + solutions[s].dist + ")");
}

// From '10' to
//  -> 2: [7, 5, 4, 2]   (dist:4)
//  -> 3: [7, 5, 4, 3]   (dist:4)
//  -> 4: [7, 5, 4]   (dist:3)
//  -> 5: [7, 5]   (dist:2)
//  -> 6: [7, 5, 4, 3, 6]   (dist:5)
//  -> 7: [7]   (dist:1)
//  -> 8: [7, 5, 4, 8]   (dist:4)
//  -> 9: [7, 5, 4, 3, 13, 14, 9]   (dist:7)
//  -> 10: []   (dist:0)
//  -> 11: [7, 5, 11]   (dist:3)
//  -> 12: [7, 5, 11, 12]   (dist:4)
//  -> 13: [7, 5, 4, 3, 13]   (dist:5)
//  -> 14: [7, 5, 4, 3, 13, 14]   (dist:6)
//  -> 15: [7, 5, 4, 3, 6, 15]   (dist:6)
//  -> R: [7, 5, 4, 2, R]   (dist:5)

*/

