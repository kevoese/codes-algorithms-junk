const input = [
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let firstBlock = null;
  let lastBlock = null;
  let started = false;
  let found = false;
  let isLands = 0;
  let checkedBlocks = {};
  let myBlocks = [];
  let oldBlock = ['90'];
  let position;

  const testBlock = (pos, blocks, row) => {
    blocks = new Set(blocks);
    blocks = [...blocks];
    const res = blocks.some(e => {
      return !(pos >= Number(e.split("")[0]) && pos <= Number(e.split("")[1]));
    });
    console.log("response>",  res, 'pos, blocks', pos, blocks);
    return res;
  };

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      position = column;
    //   if (!found && grid[row][column] == "1") {
    //     isLands = 1;
    //     found = true;
    //   }
      // logic to store first and last block
      
      if (!started) {
        if (grid[row][column] == "1" && firstBlock === null) {
          firstBlock = position;
        }
        // if (firstBlock === grid[row].length - 1 && lastBlock === null) {
        //   lastBlock = firstBlock;
        //   started = true;
        //   myBlocks.push(`${firstBlock}${lastBlock}`);
        //   console.log("last1");
        // }
        if (
          position == grid[row].length - 1 &&
          grid[row][column] == "1" &&
          firstBlock !== null &&
          lastBlock === null
        ) {
          lastBlock = position;
          started = true;
          myBlocks.push(`${firstBlock}${lastBlock}`);
          console.log("last2");
        }
        if (
          grid[row][column] == "0" &&
          firstBlock !== null &&
          lastBlock === null
        ) {
          lastBlock = position - 1;
          started = true;
          myBlocks.push(`${firstBlock}${lastBlock}`);
          console.log("last3", position);
        }
      }
      console.log(position, 'pos<<<', firstBlock, lastBlock, 'alll <<<<< >>>>>started', started, row, 'rows', 'element', grid[row][column])
      if (
        grid[row][column] == "1" &&
        started &&
        testBlock(position, oldBlock, row)
      ) {
        isLands += 1;
        started = false;
        firstBlock = position;
        console.log(`${row}${column}`, '<<<<< rowcolumn', {isLands} )
        lastBlock = null;
      }
    }
    oldBlock = JSON.parse(JSON.stringify(myBlocks));
    //myBlocks = [];
  }
  //console.log("the isLands", isLands);
  return isLands;
};

console.log(numIslands(input));

// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
// var numIslands = function(grid) {
//   let firstBlock = null;
//   let lastBlock = null;
//   let started = false;
//   let isLands = 0;
//   let checkedBlocks = {};
//   let position;

//   for (let row = 0; row < grid.length; row++) {
//     for (let column = 0; column < grid[row].length; column++) {
//       position = column;
//       // logic to store first and last block
//       if (!started) {
//         if (grid[row][column] == "1" && firstBlock === null) {
//           firstBlock = position;
//         }
//         if (firstBlock === grid[row].length - 1) {
//           lastBlock = firstBlock;
//           started = true;
//         }
//         if (
//           grid[row][column] == "0" &&
//           firstBlock !== null &&
//           lastBlock === null
//         ) {
//           lastBlock = position - 1;
//           started = true;
//         }
//         console.log('firstBlock lastBlock', firstBlock, lastBlock);
//       }

//       if (
//         grid[row][column] == "0" &&
//         !(position >= firstBlock && position <= lastBlock) &&
//         started
//       ) {
//         isLands += 1;

//         started = false;
//         firstBlock = null;
//         lastBlock = null;
//       }
//     }
//   }
//   //console.log("the isLands", isLands);
//   return isLands;
// };


