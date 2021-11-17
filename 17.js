// false: 0, -0, '', null, undefined, Nan
// true: -1, 'hello', [], {}

if ('k') {
    console.log('true');
} else {
    console.log('false');
}

let num;
num = 4;
num && console.log(num);
const testFolder = './';
const fs = ('fs');

fs.readdir(testFolder, (error, filelist)=>{
    console.log(filelist);
});

