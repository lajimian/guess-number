// Write your cade below:
function main(inputs) {
    var xstr = '1234';
    var result = ['0','A','0','B'];
    for(var i=0;i<xstr.length;i++){   
        var index = inputs.indexOf(xstr[i]);  
        if(index===i)
            result[0]=(++result[0]).toString();
        else if(index==-1);
        else 
            result[2]=(++result[2]).toString();
    }
    result=result.join("");

    return result;
}

module.exports = main;
