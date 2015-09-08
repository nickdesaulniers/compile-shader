# Compile-Shader
Used to compile a shader in WebGL.

## Usage
`npm i shader-compiler`

```js
var shaderCompiler = require('shader-compiler');

var gl = document.createElement('canvas').getContext('webgl');
var type = gl.VERTEX_SHADER; // or gl.FRAGMENT_SHADER
var src = 'void main () { gl_Position = vec4(0.0, 0.0, 0.0, 1.0); }';
var shader = shaderCompiler(gl, type, src);
```

This module is meant to be incorporated via [browserify](http://browserify.org/).

## Testing
`npm t`

