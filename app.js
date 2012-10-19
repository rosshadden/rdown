#!/usr/bin/env node

var	program = require('commander'),
	parse = require('ghm').parse,
	fs = require('fs');

var styles = '<style></style>\n\n';
// var styles = '<style>' + fs.readFileSync('./github.css', 'utf8') + '</style>\n\n';


program
	.version('0.0.1')
	.command('parse <file>')
	.description('Parse a given input <file> into an output .html file.')
	.option('-o, --output [file]', 'Save generated output to given [file].', 'output.html')
	.action(function(file, options){
		console.log('parsing:', file, '->', options.output);

		var contents = fs.readFileSync(file, 'utf8');
		var output = styles + parse(contents);

		fs.writeFileSync(options.output, output, 'utf8');
	});

program.parse(process.argv);
