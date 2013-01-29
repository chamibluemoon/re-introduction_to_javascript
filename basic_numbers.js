console.log('--------------------');
console.log(' type of number');
console.log('--------------------');

var aa = new Number(0.1);
var bb = new Number(0.2);
var cc = new Number(0.30000000000000004);
var dd = new Number(0.3);

if (( aa + bb ) == cc ){
    console.log(' aa + bb == cc');
} else{
    console.log(' aa + bb != cc');
}

if (( aa + bb ) == dd ){
    console.log(' aa + bb == dd');
} else{
    console.log(' aa + bb != dd');
}

console.log('--------------------');

console.log('Number MAX_VALUE ' + Number.MAX_VALUE);
console.log('Number MIN_VALUE ' + Number.MIN_VALUE);

console.log('--------------------');

var hh = parseInt('123', 10);
var ii = parseInt('010', 10);
var jj = parseInt('010');
var kk = parseInt('010', 2);
console.log('hh = ' + hh.toString());
console.log('ii = ' + ii.toString());
console.log('jj = ' + jj.toString());
console.log('kk = ' + kk.toString());

console.log('--------------------');

var oo = parseInt('hello', 10);
console.log('oo = ' + oo.toString());
var pp = oo + 5;
console.log('pp = ' + pp.toString());
if ( isNaN(oo) ) {
    console.log('oo is NaN=Not a Number');
}

console.log('--------------------');

var ss = 1 / 0
console.log('ss = ' + ss.toString());
var tt = -1 / 0
console.log('tt = ' + tt.toString());
if ( !isFinite(ss) ){
    console.log('ss is Infinity');
}
