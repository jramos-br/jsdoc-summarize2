'use strict';

var fs = require('fs');
var eol = require('os').EOL;
var readline = require('readline');

var outname = process.argv[2];
var ostream = outname ? fs.createWriteStream(outname) : process.stdout;
var command = 'git';
var args = [
  'log',
  '--pretty=%n%ai | %an <%ae>%n%h%d%n%s',
  '--decorate',
  '--name-status'
];
var options = {
  shell: false,
  windowsHide: false
};

var spawn = require('child_process').spawn;
var child = spawn(command, args, options);

child.stdout.setEncoding('utf8');
child.stderr.pipe(process.stderr);

child.on('close', function(code) {
  if (code !== 0) {
    process.stderr.write('git process exited with code ' + code.toString() + eol);
    process.exitCode = 3;
  }
});

var rl = readline.createInterface({
  input: child.stdout,
  output: null,
  crlfDelay: Infinity,
  terminal: false
});

ostream.write('# Changelog' + eol);
ostream.write(eol);

ostream.write('This file contains a list of the changes committed to the source control.' + eol);
ostream.write('Developers can read the commit history to help them when investigating bugs, conceptual inconsistencies and other issues.' + eol);
ostream.write(eol);
ostream.write('For a high-level summary of the changes in each release, please refer to the file [NEWS](/NEWS.md).' + eol);
ostream.write(eol);

ostream.write('For each commit, the names and status of the changed files are listed. See the following table on what the status letters mean.' + eol);
ostream.write(eol);

ostream.write('| Status | Description  | Status | Description  |' + eol);
ostream.write('|--------|--------------|--------|--------------|' + eol);
ostream.write('| A      | Added        | R      | Renamed      |' + eol);
ostream.write('| C      | Copied       | T      | Type changed |' + eol);
ostream.write('| D      | Deleted      | U      | Unmerged     |' + eol);
ostream.write('| M      | Modified     | X      | Unknown      |' + eol);
ostream.write(eol);

ostream.write('## Commit History' + eol);

rl.on('line', function(input) {
  if (input) {
    var temp = input.replace(/^([A-Z][0-9]*)\t/, '    $1 | ');
    if (temp !== input) {
      ostream.write(temp + eol);
    } else {
      ostream.write(input + '  ' + eol);
    }
  } else {
    ostream.write(eol);
  }
});

rl.on('close', function() {
  if (outname) {
    process.stderr.write(outname + ' generated' + eol);
  }
});
