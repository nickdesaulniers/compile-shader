var test = require('tape');
var shaderCompiler = require('..');

test('bad input', function (t) {
  t.plan(1);
  t.throws(function () {
    shaderCompiler(null, null, null);
  });
});

test('good input', function (t) {
  t.plan(1);
  var gl = document.createElement('canvas').getContext('webgl');
  var type = gl.VERTEX_SHADER;
  var src = "void main () { gl_Position = vec4(0.0, 0.0, 0.0, 1.0); }";
  var shader = shaderCompiler(gl, type, src);
  t.ok(shader instanceof WebGLShader, 'valid shader');
});

window.close();
