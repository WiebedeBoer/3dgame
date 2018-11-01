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
function Dijkstra(){
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

var g = new Dijkstra();
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