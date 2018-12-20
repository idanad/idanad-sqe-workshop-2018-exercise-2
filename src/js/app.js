import $ from 'jquery';
import {parseCode} from './code-analyzer';

$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let parsedCode = parseCode(codeToParse).split();
        document.getElementById('substitutedCodeArea').innerHTML = '';
        $('#parsedCode').val(JSON.stringify(parsedCode, null, 2)).splitsplit('\n').forEach((r,i) => document.getElementById('substitutedCodeArea').innerHTML += generateRow(r, i+1));
    });
});
function generateRow(row, i, colors) {
    let color = 'black';
    if (colors.red.includes(i)) color = 'red';
    if (colors.green.includes(i)) color = 'green';
    return '<span style="white-space: pre; color: ' + color + ';">'+ row + '</span><br>';
}
