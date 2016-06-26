# json-model-viewer

A 3d model viewer for minecraft json models. Requires [three.js](https://github.com/mrdoob/three.js/) and [OrbitControls](https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js).

## Basic usage

```javascript

var viewer = new ModelViewer(document.body)

window.addEventListener('resize', viewer.resize)

// "json", "textureName" and "dataURL" must be provided from somewhere else
var model = new JsonModel('myModel', json, [{name: textureName, texture: dataURL}])

viewer.load(model)
```

### ModelViewer(element)

Use `new ModelViewer(element)` to create a new viewer. `element` must be a DOM element and will be used to hold the viewer. The size of the element will determine the size of the viewer.

#### Methods

Method          | Description
--------------- | ---------------------------------------------------------------------------------------------------------------------------------------------
`.load(model)`  | Loads a model in the viewer. `model` must be a `JsonModel` object.
`.get(name)`    | Retrieves the model with the name `name`.
`.remove(name)` | Removes the model with the name `name`.
`.hide(name)`   | Sets the `visible` property to `false` for the model with the name `name`.
`.show(name)`   | Sets the `visible` property to `true` for the model with the name `name`.
`.resize()`     | Updates the size and the aspect ratio of the viewer. Usualy bound to the `resize` event of the `window` when the viewer takes the whole page.

### JsonModel(name, json, textures)

Use `new JsonModel(name, json, textures)` to create a group of [three.js meshs](http://threejs.org/docs/index.html#Reference/Objects/Mesh) from any minecraft json model. `name` must be a unique identifier and `json` a JSON string that contains a minecraft json model. `textures` must be an Array formatted as followed:

```javascript
[{name: 'texture1', texture: dataURL1}, {name: 'texture2', texture: dataURL2}, ...]
```

All textures referenced in the json model must be passed in parameter with the correct name.

For instance, if the `textures` property of a model looks like this:

```json
{
    "textures": {
        "0": "blocks/dirt",
        "1": "blocks/stone"
    },
    "elements": [
        ...
    ]
}
```

The `textures` Array will contain two textures, the `dirt` texture and the `stone` texture:

```javascript
var textures = [
  {name: 'dirt', texture: dirtTextureDataURL},
  {name: 'stone', texture: stoneTextureDataURL}
]
var model = new JsonModel('myModel', json, textures)
```

The `name` must match the file name, regardless of the folder in which it is. This means that `folderA/myTexture` and `folderB/myTexture` will both use the texture named `myTexture`, even if the original textures are not the same.

The `texture` property must be the image dataURL of the corresponding texture.

#### Methods

`JsonModel` objects inherit from `THREE.Object3D`, see the [three.js documentation](http://threejs.org/docs/index.html#Reference/Core/Object3D) for more information.
