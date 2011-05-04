if (module == require.main) {
  var spawn = require('child_process').spawn,
      path = require('path');
    
  var tests = ['test-genres.js', 'test-deunsync.js', 'test-metadataleak.js',
               'test-id3v1.1.js', 'test-id3v2.2.js', 'test-id3v2.3.js', 
               'test-id3v2.4.js', 'test-id4.js', 'test-ogg.js',
               'test-unknownencoding.js', 'test-nonasciichars.js',
               'test-flac.js'];
               
  for (var i=0; i < tests.length; i++) {
    var fullPath = path.join(__dirname, tests[i]);
    var test = spawn(process.execPath, [fullPath]);
    test.stdout.pipe(process.stdout);
    test.stderr.pipe(process.stderr);
  }
}