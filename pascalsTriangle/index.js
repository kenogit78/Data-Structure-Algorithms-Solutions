var generate = function(numRows) {
    var result = [];
    for(var i=0; i<numRows; i++){
        result[i] = [];
        
    }
    for(i=0; i<numRows; i++){
        result[i][0] = result[i][i] = 1;
        console.log(result)
    }
    for(i=2; i<numRows; i++){
        for(var j=1; j<i; j++){
            result[i][j] = result[i-1][j-1] + result[i-1][j];
            console.log(result)
        }
    }
    return result;
};