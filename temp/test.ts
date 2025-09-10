/*
Problem Set
We are looking for a program that manages “intensity” by segments. Segments are intervals from -infinity to
infinity, we’d like you to implement functions that updates intensity by an integer amount for a given range.
All intensity starts with 0. 
// Here is an example sequence:
const segments= new IntensitySegments();
console.log(segments.toString()); // Should be "[]"
segments.add(10, 30, 1);
console.log(segments.toString()); // Should be: "[[10,1],[30,0]]"
segments.add(20, 40, 1);
console.log(segments.toString()); // Should be: "[[10,1],[20,2],[30,1],[40,0]]"
segments.add(10, 40, -2);
console.log(segments.toString()); // Should be: "[[10,-1],[20,0],[30,-1],[40,0]]"
1
// Another example sequence:
const segments= new IntensitySegments();
console.log(segments.toString()); // Should be "[]"
segments.add(10, 30, 1);
console.log(segments.toString()); // Should be "[[10,1],[30,0]]"
segments.add(20, 40, 1);
console.log(segments.toString()); // Should be "[[10,1],[20,2],[30,1],[40,0]]"
segments.add(10, 40, -1);
console.log(segments.toString()); // Should be "[[20,1],[30,0]]"
segments.add(10, 40, -1);
console.log(segments.toString()); // Should be "[[10,-1],[20,0],[30,-1],[40,0]]"
*/

type TSegmentNode =  undefined | {
  from: number;
  to: number;
  amount: number;
  prev: TSegmentNode | undefined;
  next: TSegmentNode | undefined;
};

type TActionType = 'add' | 'set'

class IntensitySegments {
  add(from: number, to: number, amount: number) {
    this.updateSegmentNodes(from, to, amount, 'add')
  }
  set(from: number, to: number, amount: number) {
    this.updateSegmentNodes(from, to, amount, 'set')
  }
  toString() {
    if (!this.segmentNodes) return "[]"
    let currentNode:TSegmentNode = this.segmentNodes, end = 0;
    const result:[number, number][] = [];
    while (!!currentNode) {
      result.push([currentNode.from, currentNode.amount])
      end = currentNode.to;
      currentNode = currentNode.next;
    }
    result.push([end, 0])
    return JSON.stringify(result)
  }
  private segmentNodes:TSegmentNode = undefined;
  private updateSegmentNodes(from: number, to: number, amount: number, type: TActionType) {
    if (from >= to || (amount === 0 && type === 'add')) return;
    if (!this.segmentNodes || from < this.segmentNodes.from) {
      this.addStartNode(from, to, amount, type);
      return;
    }

    let currentNode = this.segmentNodes, prevNode = undefined;

    while(true) {
      if (from >= currentNode.to) {
        if (!!currentNode.next) {
          currentNode = currentNode.next;
          continue;
        } else if (amount === 0) {
          break;
        } else {
          const nextNode = {
            from,
            to,
            amount,
            prev: currentNode,
            next: undefined
          }
          currentNode.next = nextNode;
          this.addInsertionNode(currentNode);
          break;
        } 
      }
      this.splitNode(currentNode, from, to);
      currentNode.amount = type === 'set' ? amount : currentNode.amount + amount;
      this.mergeNode(currentNode.prev);

      if (to > currentNode.to) {
        if (!!currentNode.next) {
          from = currentNode.to;
          currentNode = currentNode.next;
          continue;
        } else if (amount !== 0) {
          const nextNode = {
            from: currentNode.to,
            to,
            amount,
            prev: currentNode,
            next: undefined
          };
          currentNode.next = nextNode;
          this.mergeNode(currentNode);
        }
        this.handleEndNode(currentNode?.next || currentNode)
        break
      }
      this.handleEndNode(currentNode);
      break
    }
  }
  private addStartNode(from: number, to: number, amount: number, type: TActionType) {
    let _to = (!!this.segmentNodes && to > this.segmentNodes.from) ? this.segmentNodes.from : to
    if (amount !== 0) {
      this.segmentNodes = {
        from,
        to: _to,
        amount,
        prev: undefined,
        next: this.segmentNodes
      }
      this.addInsertionNode(this.segmentNodes)
    }
    if (_to !== to) {
      this.updateSegmentNodes(_to, to, amount, type)
    }
  }
  private addInsertionNode(node: TSegmentNode) {
    if (!node || !node?.next || node.to === node.next.from) {
      return;
    }
    const nextNode = node.next
    const insertionNode: TSegmentNode = {
      from: node.to,
      to: node.next.from,
      prev: node,
      amount: 0,
      next: nextNode
    }
    node.next = insertionNode;
    nextNode.prev = insertionNode
  }
  private splitNode(node: TSegmentNode, from: number, to: number) {
    if (!node) return;
    const prevNode = node.prev, nextNode = node.next;
    if (node.from < from) {
      const newPrevNode:TSegmentNode = {
        from: node.from,
        to: from,
        amount: node.amount,
        prev: prevNode,
        next: node
      }
      node.from = from
      node.prev = newPrevNode;
      if (!!prevNode) {
        prevNode.next = newPrevNode
      } else {
        this.segmentNodes = newPrevNode
      }
    }
    if (node.to > to) {
      const newNextNode:TSegmentNode = {
        from: to,
        to: node.to,
        amount: node.amount,
        prev: node,
        next: nextNode
      };
      if (!!nextNode) nextNode.prev = newNextNode;
      node.to = to
    }
  }
  private mergeNode(node: TSegmentNode) {
    if (!node) {
      if (this.segmentNodes?.amount === 0)  {
        this.segmentNodes = this.segmentNodes.next;
      }
    } else {
      if (node.amount === node.next?.amount) {
        node.to = node.next.to;
        node.next = node.next.next;
        if (!!node.next) node.next.prev = node;
      }
      // if (!node.prev && node.amount === 0) {
      //   this.segmentNodes = node.next;
      //   if (!!this.segmentNodes) this.segmentNodes.prev = undefined;
      // }
    }
  }
  private handleEndNode(node: TSegmentNode) {
    if (!node || !!node.next) return;
    if (node.amount === 0) {
      let prevNode = node.prev;
      if (!!prevNode) {
        prevNode.next = undefined
      } else {
        this.segmentNodes = undefined
      }
    }
  }
}


const segments= new IntensitySegments();
console.log(segments.toString()); // Should be "[]"
segments.add(10, 30, 1);
console.log(segments.toString()); // Should be: "[[10,1],[30,0]]"
segments.add(20, 40, 1);
console.log(segments.toString()); // Should be: "[[10,1],[20,2],[30,1],[40,0]]"
segments.add(10, 40, -2);
console.log(segments.toString()); // Should be: "[[10,-1],[20,0],[30,-1],[40,0]]"

const segments2= new IntensitySegments();
console.log(segments2.toString()); // Should be "[]"
segments2.add(10, 30, 1);
console.log(segments2.toString()); // Should be "[[10,1],[30,0]]"
segments2.add(20, 40, 1);
console.log(segments2.toString()); // Should be "[[10,1],[20,2],[30,1],[40,0]]"
segments2.add(10, 40, -1);
console.log(segments2.toString()); // Should be "[[20,1],[30,0]]"
segments2.add(10, 40, -1);
console.log(segments2.toString()); // Should be "[[10,-1],[20,0],[30,-1],[40,0]]"
segments2.set(10, 30, 0)
console.log(segments2.toString()); // Should be "[[30,-1],[40,0]]"
segments2.set(10, 40, 0)
console.log(segments2.toString()); // Should be "[]"