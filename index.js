//var addLineNumbers = require('add-line-numbers');

module.exports = function (gl, type, shaderStr) {
  if (type !== WebGLRenderingContext.prototype.VERTEX_SHADER &&
      type !== WebGLRenderingContext.prototype.FRAGMENT_SHADER) {
    throw Error('Bad shader type');
  }

  var shader = gl.createShader(type);
  if (shader === null) {
    throw Error('Failed to create shader');
  }

  gl.shaderSource(shader, shaderStr);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    var shaderLog = gl.getShaderInfoLog(shader);
    throw Error('Failed to compile shader: ' + shaderLog);
  }

  return shader;
};

