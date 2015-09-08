var test = require('tape');
var compile = require('..');

function getGL () {
  return document.createElement('canvas').getContext('webgl');
};

test('bad input', function (t) {
  t.plan(3);
  t.throws(function () {
    compile(null, null, null);
  }, 'all null arguments');
  t.throws(function () {
    compile(null, WebGLRenderingContext.prototype.VERTEX_SHADER, null);
  }, 'correct type, rest null');
  t.throws(function () {
    var gl = getGL();
    var type = gl.VERTEX_SHADER;
    var src = '';
    compile(gl, type, src);
  });
});

test('good input, vertex shader', function (t) {
  t.plan(1);
  var gl = getGL();
  var type = gl.VERTEX_SHADER;
  var src = 'void main () { gl_Position = vec4(0.0, 0.0, 0.0, 1.0); }';
  var shader = compile(gl, type, src);
  t.ok(shader instanceof WebGLShader, 'valid shader');
});

test('good input, fragment shader', function (t) {
  t.plan(1);
  var gl = getGL();
  var type = gl.FRAGMENT_SHADER;
  var src = 'precision mediump float; void main () { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); }';
  var shader = compile(gl, type, src);
  t.ok(shader instanceof WebGLShader, 'valid shader');
});

window.close();
