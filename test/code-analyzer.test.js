import assert from 'assert';
import {parseCode, reseteAll,callAll} from '../src/js/code-analyzer';

describe('test1', () => {
    it('test1', () => {
        reseteAll([]);
        let actualSubstitutedCode = parseCode(
            'function foo(x){\n' +
            '    return a = x + 1;\n' +
            '    }');
        assert(actualSubstitutedCode,getE1());
    });

});
describe('test2', () => {
    it('test2', () => {
        reseteAll([]);
        let actualSubstitutedCode = parseCode('function getE2() {\n' +
            '    reseteAll([]);\n' +
            '    return parseCode(\'function foo(x,y,z){\\n\' +\n' +
            '        \'    var a = x + 1;\\n\' +\n' +
            '        \'    if (a > y){;\\n\' +\n' +
            '        \'       y = y + 5;\\n\' +\n' +
            '        \'    }\\n\' +\n' +
            '        \'    if (a < y){\\n\' +\n' +
            '        \'       a= a + x+ 5;\\n\' +\n' +
            '        \'    }\\n\' +\n' +
            '        \'}\');\n' +
            '}');
        assert(actualSubstitutedCode,getE2());
    });

});

describe('test3', () => {
    it('test3', () => {
        reseteAll([]);
        let actualSubstitutedCode = parseCode('function foo(x,y,z){\n' +
            '    var a = x + 1;\n' +
            '    while (a > y){;\n' +
            '       y = y + 5;\n' +
            '    }\n' +
            '    if (a && y){\n' +
            '       a= a + x+ 5;\n' +
            '    }\n' +
            '}');
        assert(actualSubstitutedCode,getE3());
    });

});
describe('test4', () => {
    it('test4', () => {
        callAll();
        reseteAll([]);
        let actualSubstitutedCode = parseCode('function foo(x,y,z){\n' +
            '    let a = x + 1;\n' +
            '    if (a > y){;\n' +
            '       a = a + 5;\n' +
            '    }\n' +
            '    else if (a < y){\n' +
            '       a= a + x+ 5;\n' +
            '    }\n' +
            '    else{\n' +
            '       a= a + x+ 15;\n' +
            '    }\n' +
            '}');
        assert(actualSubstitutedCode,getE4());
    });

});

describe('test5', () => {
    it('test5', () => {
        reseteAll([]);
        let actualSubstitutedCode = parseCode(
            'function foo(x){\n' +
            '    return x = x + 1;\n' +
            '    }');
        assert(actualSubstitutedCode,getE5());
    });

});
describe('test6', () => {
    it('test6', () => {
        reseteAll([]);
        let actualSubstitutedCode = parseCode('function getE2() {\n' +
            '    reseteAll([]);\n' +
            '    return parseCode(\'function foo(x,y,z){\\n\' +\n' +
            '        \'    var a = x + 1;\\n\' +\n' +
            '        \'    if (a > y + 5){;\\n\' +\n' +
            '        \'       y = y + 5;\\n\' +\n' +
            '        \'    }\\n\' +\n' +
            '        \'    if (a < y){\\n\' +\n' +
            '        \'       a= a + x+ 5;\\n\' +\n' +
            '        \'    }\\n\' +\n' +
            '        \'}\');\n' +
            '}');
        assert(actualSubstitutedCode,getE6());
    });

});

describe('test7', () => {
    it('test7', () => {
        reseteAll([]);
        let actualSubstitutedCode = parseCode('function foo(x,y,z){\n' +
            '    var a = x + 1;\n' +
            '    while (a != y){;\n' +
            '       y = y + 5;\n' +
            '    }\n' +
            '    if (a && y){\n' +
            '       a= a + x+ 5;\n' +
            '    }\n' +
            '}');
        assert(actualSubstitutedCode,getE7());
    });

});
describe('test8', () => {
    it('test8', () => {
        callAll();
        reseteAll([]);
        let actualSubstitutedCode = parseCode('function foo(x,y,z){\n' +
            '    let a = x + 1;\n' +
            '    if (a > y){;\n' +
            '       a = a + 5;\n' +
            '    }\n' +
            '    else if (a < y){\n' +
            '       a= a + 0 + x+ 5;\n' +
            '    }\n' +
            '    else{\n' +
            '       a= a + x+ 15;\n' +
            '    }\n' +
            '}');
        assert(actualSubstitutedCode,getE8());
    });

});

describe('test9', () => {
    it('test9', () => {
        reseteAll([]);
        let actualSubstitutedCode = parseCode('function foo(x,y,z){\n' +
            '    var a = x + 1;\n' +
            '    while (a > y){;\n' +
            '       y = y + 5;\n' +
            '    }\n' +
            '    if (a == y){\n' +
            '       a= a + x+ 5;\n' +
            '    }\n' +
            '}');
        assert(actualSubstitutedCode,getE9());
    });

});
describe('test10', () => {
    it('test10', () => {
        callAll();
        reseteAll([]);
        let actualSubstitutedCode = parseCode('function foo(x,y,z){\n' +
            '    let a = x + 1;\n' +
            '    if (a > y){;\n' +
            '       a = a + 5;\n' +
            '    }\n' +
            '    else if (a < y){\n' +
            '       a= a + x+ 5;\n' +
            '    }\n' +
            '}');
        assert(actualSubstitutedCode,getE10());
    });

});

function getE1(){
    reseteAll([]);
    let actualSubstitutedCode = parseCode(
        'function foo(x){\n' +
        '    return a = x + 1;\n' +
        '    }');
    return actualSubstitutedCode;
}
function getE3(){
    reseteAll([]);
    return parseCode('function foo(x,y,z){\n' +
        '    var a = x + 1;\n' +
        '    while (a > y){;\n' +
        '       y = y + 5;\n' +
        '    }\n' +
        '    while (a && y){\n' +
        '       a= a + x+ 5;\n' +
        '    }\n' +
        '}');
}
function getE2() {
    reseteAll([]);
    return parseCode('function foo(x,y,z){\n' +
        '    var a = x + 1;\n' +
        '    if (a > y){;\n' +
        '       y = y + 5;\n' +
        '    }\n' +
        '    if (a < y){\n' +
        '       a= a + x+ 5;\n' +
        '    }\n' +
        '}');
}
function getE4() {
    reseteAll([]);
    return parseCode('function foo(x,y,z){\n' +
        '    let a = x + 1;\n' +
        '    if (a > y){;\n' +
        '       a = a + 5;\n' +
        '    }\n' +
        '    else if (a < y){\n' +
        '       a= a + x+ 5;\n' +
        '    }\n' +
        '    else{\n' +
        '       a= a + x+ 15;\n' +
        '    }\n' +
        '}');
}
function getE5(){
    reseteAll([]);
    let actualSubstitutedCode = parseCode(
        'function foo(x){\n' +
        '    return x = x + 1;\n' +
        '    }');
    return actualSubstitutedCode;
}
function getE6(){
    reseteAll([]);
    return parseCode('function foo(x,y,z){\n' +
        '    var a = x + 1;\n' +
        '    while (a > y + 5){;\n' +
        '       y = y + 5;\n' +
        '    }\n' +
        '    while (a && y){\n' +
        '       a= a + x+ 5;\n' +
        '    }\n' +
        '}');
}
function getE7() {
    reseteAll([]);
    return parseCode('function foo(x,y,z){\n' +
        '    var a = x + 1;\n' +
        '    if (a != y){;\n' +
        '       y = y + 5;\n' +
        '    }\n' +
        '    if (a < y){\n' +
        '       a= a + x+ 5;\n' +
        '    }\n' +
        '}');
}
function getE8() {
    reseteAll([]);
    return parseCode('function foo(x,y,z){\n' +
        '    let a = x + 1;\n' +
        '    if (a > y){;\n' +
        '       a = a + 5;\n' +
        '    }\n' +
        '    else if (a < y){\n' +
        '       a= a + 0 + x+ 5;\n' +
        '    }\n' +
        '    else{\n' +
        '       a= a + x+ 15;\n' +
        '    }\n' +
        '}');
}

function getE9() {
    reseteAll([]);
    return parseCode('function foo(x,y,z){\n' +
        '    var a = x + 1;\n' +
        '    if (a > y){;\n' +
        '       y = y + 5;\n' +
        '    }\n' +
        '    if (a == y){\n' +
        '       a= a + x+ 5;\n' +
        '    }\n' +
        '}');
}
function getE10() {
    reseteAll([]);
    return parseCode('function foo(x,y,z){\n' +
        '    let a = x + 1;\n' +
        '    if (a > y){;\n' +
        '       a = a + 5;\n' +
        '    }\n' +
        '    else if (a < y){\n' +
        '       a= a + x+ 5;\n' +
        '    }\n' +
        '}');
}
