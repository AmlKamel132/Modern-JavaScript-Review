function * gen(){
    yield 10;
    console.log('aaa');
    yield 8;
    yield  [1,2,3] // here will be printed once
    yield * [1,2,3] // here will go through every one 
    yield 10;
    yield "asd"
    yield * "jjjj"
}