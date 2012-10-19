#!/usr/bin/env node

var	program = require('commander'),
	md = require('ghm').parse;

program
	.version('0.0.1')
	.command('parse <file>')
	.description('Parse a given input file <file> into an output .html file.')
	.option('-o, --output <file>', 'Save generated output to given file [file].', 'file.html')
	.action(function(file){
		console.log('parse', arguments);
	});

program.parse(process.argv);
