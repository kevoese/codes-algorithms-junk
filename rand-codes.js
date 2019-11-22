class board {
  constructor(square, spriteNum) {
    this.square = square;
    this.spriteNum = spriteNum;
    this.board = [];
    this.randomSet = new Set();
    this.player;
  }

  addPlayer() {
    let player;
    let row = this.square / 2;
    let column = this.square / 2;
    player = `${row}-${column}`;
    while (this.randomSet.has(player)) {
      Math.floor(Math.random() * 1) === 1 ? row-- : column--;
      player = `${row}-${column}`;
    }
    this.player = player;
    this.board[row][column] = 'play';
  }

  addSprites() {
    while (this.randomSet.size < this.spriteNum) {
      let row = Math.floor(Math.random() * this.square);
      let column = Math.floor(Math.random() * this.square);
      let position = `${row}-${column}`;
      this.randomSet.add(position);
    }
    this.randomSet.forEach(e => {
      const pos = e.split('-');
      const row = Number(pos[0]);
      const column = Number(pos[1]);
      this.board[row][column] = 'spri';
    });
  }

  generate() {
    for (let row = 0; row < this.square; row++) {
      this.board.push([]);
      for (let column = 0; column < this.square; column++) {
        this.board[row][column] = null;
      }
    }
    this.addSprites();
    this.addPlayer();
    return this.board;
  }

  getPos(str) {
    const pos = str.split('-');
    return {
      row: Number(pos[0]),
      column: Number(pos[1]),
    };
  }

  getShortestSprite() {
    const { row: playerRow, column: playerColumn } = this.getPos(this.player);
    let min = this.square + this.square;
    let spritePos;

    this.randomSet.forEach(sprite => {
      const { row, column } = this.getPos(sprite);

      const current =
        Math.abs(row - playerRow) + Math.abs(column - playerColumn);
      if (current < min) {
        min = current;
        spritePos = sprite;
      }
    });
    return spritePos;
  }

  movePlayer() {
    if (this.randomSet.size < 1) {
      return this.board;
    }
    const shortestSprite = this.getShortestSprite();
    console.log(this.player, '++++', shortestSprite);
    const { row: aimRow, column: aimColumn } = this.getPos(shortestSprite);
    let { row: oldRow, column: oldColumn } = this.getPos(this.player);
    const rowDiff = aimRow - oldRow;
    const columnDiff = aimColumn - oldColumn;
    if (rowDiff !== 0) {
      this.player = `${rowDiff > 0 ? oldRow + 1 : oldRow - 1}-${oldColumn}`;
    } else if (columnDiff !== 0) {
      this.player = `${oldRow}-${
        columnDiff > 0 ? oldColumn + 1 : oldColumn - 1
      }`;
    } else {
      return this.board;
    }

    this.board[oldRow][oldColumn] = null;
    const { row, column } = this.getPos(this.player);
    this.board[row][column] = 'play';
    if (this.randomSet.has(this.player)) this.randomSet.delete(this.player);
    return this.board;
  }
}



let strs = 'first/second/next';
let objs = {
  first: {
    second: {
      next: 'ggg',
    },
    cool: 'coolest',
  },
  cool: 'sec',
};
const val = { new: { last: 'do' } };
strs = strs.split('/');
const getPath = (raw, pathList, val) => {
  if (pathList.length < 1) {
    return val;
  } else {
    let newObj = raw[pathList[0]];
    let name = pathList.shift();
    if (!raw[name]) throw new Error('wrong path');
    return { ...raw, [name]: getPath(newObj, pathList, val) };
  }
};

//console.log(getPath(objs, strs, val));

const getPath = (obj, str, val, count = 0, oldobj = null) => {
  if (count >= str.length) {
    return oldobj;
  } else {
    let newObj = obj[str[count]];
    let name = str.shift();
    return { newObj, ...getPath(newObj, str, val, count + 1, obj) };
  }
};

function isPalindrome(str, count = 0) {
  if (count < str.length-1) {
    return isPalindrome(str, count + 1) || false;
  } else {
    return (str.charAt(count) === str.charAt(str.length - count - 1))
  }
}

console.log(isPalindrome('dad'));

const unord = [
  1,
  3,
  4,
  6,
  8,
  6,
  78,
  0,
  89,
  3,
  4,
  6,
  8,
  6,
  78,
  0,
  89,
  8,
  4,
  6,
  9,
  65,
  8,
  4,
  6,
  9,
  65,
  2,
  5,
  3,
  4,
  6,
  8,
  6,
  78,
  0,
  89,
  8,
  4,
  6,
  9,
  65,
  4,
  65,
  76,
  3,
  4,
  6,
  8,
  6,
  78,
  0,
  89,
  8,
  4,
  6,
  9,
  65,
  76,
  3,
  4,
  6,
  8,
  6,
  3,
  4,
  6,
  8,
  6,
  78,
  0,
  89,
  8,
  4,
  6,
  9,
  65,
  78,
  0,
  89,
  8,
  4,
  6,
  9,
];

// bubble sort
function bSort(arr) {
  let unsorted = true;
  while (unsorted) {
    // aslong as array is unsorted keep swapping
    unsorted = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        // it is unsorted
        unsorted = true;
        // swap positions
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

// quick sort divide and conquer
function qSort(arr) {
  if (arr.length < 2) return arr;
  const pivotPos = Math.floor(arr.length / 2);
  const pivot = arr[pivotPos];
  const leftSortArr = [];
  const rightSortArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotPos) continue;
    arr[i] < pivot
      ? leftSortArr.push(arr[i]) //push smaller content to left arr
      : rightSortArr.push(arr[i]); // push smaller ones to right arr
  }
  return [...qSort(leftSortArr), pivot, ...qSort(rightSortArr)];
}

//insertion sort
function iSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      // check from first down till the element compare order
      if (arr[j] > arr[i]) {
        const [e] = arr.splice(i, 1); // put smaller element behind greater element
        arr.splice(j, 0, e);
      }
    }
  }
  return arr;
}

function mSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const center = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, center);
  const rightArr = arr.slice(center);

  return merge(mSort(leftArr), mSort(rightArr));
}

function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

function sSort(raw) {
  const arr = [...raw];
  const sorted = [];
  let minIndex;
  while (arr.length) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    arr.splice(minIndex, 1);
    sorted.push(min);
  }
  return sorted;
}

// console.log(sSort(unord), 'selection sort');
// console.log(iSort(unord), 'insertion sort');
// console.log(bSort(unord), 'bubble sort');
//console.log(mSort(unord), 'merge sort');
// console.log(qSort(unord), 'quick sort');

const arrs = [1, 1, 1, 2, 2, 2, 3, 3, 3, 7, 7, 7, 8, 8, 8, 9, 9, 9, 11, 11];

function getArr(arr) {
  let result = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] !== arr[i] || i <= 1) {
      result++;
      arr.push(arr[i]);
    }
  }
  return {result, arr: arr.reverse()};
}

console.log(getArr(arrs));

const testarr = [-1, 0, 1, 2, -2, 3];

function getRes(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        let soln = arr[i] + arr[j] + arr[k];
        if (
          arr[i] !== arr[j] &&
          arr[j] !== arr[k] &&
          arr[i] !== arr[k] &&
          soln === 0
        ) {
          let ans = [arr[i], arr[j], arr[k]].sort();
          if (!res.find(e => JSON.stringify(e) === JSON.stringify(ans)))
            res.push(ans);
        }
      }
    }
    //arr.shift();
  }

  return res;
}

// function getRes1(arr) {
//   let res = [];
//   let strings = '';
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       for (let k = 0; k < arr.length; k++) {
//         let soln = arr[i] + arr[j] + arr[k];
//         if (
//           arr[i] !== arr[j] &&
//           arr[j] !== arr[k] &&
//           arr[i] !== arr[k] &&
//           soln === 0
//         ) {
//           strings += arr[i];
//           strings += arr[j];
//           strings += arr[k];

//           if (strings.length < 1) {
//             res.push(ans);
//           }

//           if (strings.includes(`${arr[i]}${arr[j]}${arr[k]}`)) {
//             console.log(`${arr[i]}${arr[j]}${arr[k]}`, 'include');
//           } else {
//             console.log(`${arr[i]}${arr[j]}${arr[k]}`, 'not include');
//           }

//           // let ans = [arr[i], arr[j], arr[k]].sort();
//           // if (!res.find(e => JSON.stringify(e) === JSON.stringify(ans))) res.push(ans);
//         }
//       }
//     }
//     //arr.shift();
//   }

//   return res;
// }

console.log(JSON.stringify([-1, 0, 1]) == JSON.stringify([-1, 0, 1]));

function getRes3(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        let soln = arr[i] + arr[j] + arr[k];
        if (
          j > i &&
          k > i &&
          k > j &&
          soln === 0
        ) {
          let ans = [arr[i], arr[j], arr[k]];
          res.push(ans);
        }
      }
    }
  }

  return res;
}

console.log(getRes3(testarr));
