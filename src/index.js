module.exports = function solveSudoku(matrix) {
  // your solution
  function suggest(horisontal, vertical) {
    var results = [];
    var zone = {
      horisontal: Math.floor(horisontal / 3)*3,
      vertical: Math.floor(vertical / 3)*3,
    };

    for (var i = 0; i < 9; i++) {
        results.push([matrix[horisontal][i], matrix[i][vertical], matrix[zone.horisontal + i % 3][zone.vertical + Math.floor(i / 3)]])
    }

    return results;

  }

  for (var horisontal = 0; horisontal < 9; horisontal++) {
    for (var vertical = 0; vertical < 9; vertical++) {
      if (matrix[horisontal][vertical] === 0) {
        var suggestions = suggest(horisontal, vertical);
          for (var suggestion of suggestions) {
            matrix[horisontal][vertical] = suggestion;
            solveSudoku(matrix);
          }  
      }
    }
  }

return matrix;

}