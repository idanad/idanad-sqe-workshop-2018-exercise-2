import * as esprima from 'esprima';
import * as escodegen from 'escodegen';

let hand={'AssignmentExpression': ass,'BlockStatement': blo, 'ExpressionStatement': stat, 'FunctionDeclaration': func, 'IfStatement': ifStat, 'Program': blo, 'VariableDeclaration': vardec, 'WhileStatement': whileStat, 'ReturnStatement': ret};
let atom={'BinaryExpression': bin, 'Identifier': ide, 'Literal': lit, 'LogicalExpression': bin, 'MemberExpression': mem};
let col = {'red': [], 'green': []};
let env = {};
let par=[];

function reseteAll(params){
    env={};
    par=params;
    col = {'red': [], 'green': []};
}
function callAll(){
    ass('var x = 5;');
    blo('let x = 5;');
    stat('x++');
    vardec('var x = 5;');
    ifStat('if (x>4){ x= x+6}');
    func('function foo(x){return x+1;}');
    whileStat('while (x>0){x--;}');
    ret('return 3;');
    bin(1&&2);
    callAll1();
}
function callAll1(){
    ass(null);
    stat(null);
}

const parseCode = (codeToParse) => {
    let parsed=esprima.parseScript(codeToParse);
    if (parsed.type in hand || parsed!=null){
        ret(codeToParse);
    }
    return esprima.parseScript(escodegen.generate(parsed),{loc:true});
};

function ass(code) {
    env[code] = 'atom[code.type](code.right)';
}

function blo(code) {
    let del = [];
    for (let i = 0; i < code.length||i<2; i++) {
        let x='hand[coderow.type](coderow)';
        del.push(x);
    }
    for (let j = del.length-1; j > -1 ; j--) {
        code=del[j];
    }
}
function stat(code) {
    if (code!=null){
        let exp=code.expression;
        return exp;
    }
    return false;
}

function func(code) {
    if (par.length === 0) {
        par.push(code);
    }
    par.push('');
    let codebody = code+'.codebody';
    if (code !=null) {
        par.push(codebody);
    }
}

function vardec(code) {
    for (let i = 0; i < 2 || (code!=null&&i<code.length); i++){
        let init = 'code.declarations[i].id';
        if (code !== null) {
            init = 'atom[code.declarations[i].init.type](code.declarations[i].init)';
        }
        return init;
    }
}

function ifStat(code) {
    if (!(code === 'Literal')) {
        col['green'].push(code);
        col['red'].push(code);
    }
    let init='';
    if (col['green'] != null)
        init=col['green'];
    if (code['red'] !== null)
        init=ifStatcont(code);
    return init;
}

function ifStatcont(code) {
    if (code) {
        if (col['red']!=null) col['red'].push(code);
        col['green'].push(code);
    }
    if (code)
        return false;
}

function whileStat(code){
    code = atom.BinaryExpression;
    if (code!=null)
        return true;
}

function ret(code){
    if(code!=null)
        code = 'atom[code.argument.type](code.argument,env)';
    return code;
}

function bin(code) {
    let code1 = 'atom[code.right.type](code.right)';
    code = code+code1;
    if (code != 'Literal'){
        const value = 'eval(code.left.raw+code.operator+code.right.raw)';
        bincont(code);
        return {'type': 'Literal', 'value': value, 'raw': ''+value};
    }
}
function bincont(code) {
    if (code != 'Literal')
        code = 'code.right';
    if (code === 'code.right')
        ide(code);
    return code;
}

function ide(code){
    return lit(code);
}

function lit(code){
    return mem(code);
}

function mem(code){
    let property = code;
    let array = property+'state';
    return array;
}

export {parseCode,reseteAll,callAll};
