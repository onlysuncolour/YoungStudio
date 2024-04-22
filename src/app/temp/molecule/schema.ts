const schemaDefinitions = {
  mol: {
    type: 'object',
    properties: {
      timestamp: {
        type: 'string',
      },
      version: {
        type: 'string'
      },
      current: {
        type: 'string'
      },
      playback: {
        type: '__playback',
        required: false,
      },
      entries: {
        type: 'array',
        required: true,
        items: {
          type: '__entry'
        }
      }
    }
  },
  playback: {
    type: 'object',
    properties: {
      isPlaying: { type: 'boolean' },
      nextSnapshotDelayInMs: { type: 'string' }
    }
  },
  entry: {
    type: 'object',
    properties: {
      timestamp: { type: 'string' },
      snapshot: { type: '__snapshot' }
    }
  },
  snapshot: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
    // data: snapshotData,
  },
  // snapshotData: {
  //   tree: dataTree
  // }
  // dataTree: {
  //   transforms: treeTransform[]
  // }
  // treeTransform: {
  //   parent
  //   transformer
  //   params: transformParams
  //   ref
  //   version
  // }
  // transformParams: {
  //   url
  //   label
  //   isBinary
  // }
  // animation: {

  // },
  // camera: {

  // },
  // canvas3dContext: {

  // },
  // canvas3d: {

  // },
  // interactivity: {

  // },
  // structureFocus: {

  // },
  // structureComponentManager: {

  // },
  // durationInMs: {

  // },

}

const BasicTypes = [
  'string', 'boolean', 'number'
]

function validRequired(data: any, def: any) {
  if (def.required && data === undefined) {
    return false
  } 
  return true
}

function validBasic(data: any, type: string) {
  if (type === 'string' && !validString(data)) {
    return false
  } else if (type === 'boolean' && !validBoolean(data)) {
    return false
  } else if (type === 'number' && !validNumber(data)) {
    return false
  }
  return true
}

function validString(data:any) {
  if (data === undefined) {
    return true
  }
  return typeof data === 'string'
}

function validBoolean(data:any) {
  if (data === undefined) {
    return true
  }
  return typeof data === "boolean"
}
function validNumber(data:any) {
  if (data === undefined) {
    return true
  }
  return typeof data === "number"
}

function validArray(data: any, prop: any) {
  if (data !== undefined && Array.isArray(data)) {
    return false
  }
  for (let i = 0; i < data.length; i++) {
    const _data = data[i];
    if (BasicTypes.includes(prop.type)) {
      if (!validBasic(_data, prop.type)) {
        return false
      }
    } else if (prop.type === 'array') {
      if (!validArray(data, prop.items)) {
        return false
      }
    } else if (prop.type.startsWith('__')) {
      if (!validateSchema(data, prop.type.substring(2, prop.type.length))) {
        return false
      }
    }
    return true
  }
}

export default function validateSchema(data: any, def = 'mol') {
  // @ts-ignore
  const curDef = schemaDefinitions[def]

  console.log({data})
  const props = Object.keys(curDef.properties);
  for (let i = 0; i < props.length; i++) {
    const propName = props[i],
      prop = curDef.properties[propName],
      propValue = data[propName];
    if (!validRequired(propValue, prop)) {
      return false
    }
    if (BasicTypes.includes(prop.type)) {
      if (!validBasic(propValue, prop.type)) {
        return false
      }
    } else if (prop.type === 'array') {
      if (!validArray(propValue, prop.items)) {
        return false
      }
      return true
    } else if (prop.type.startsWith('__')) {
      if (!validateSchema(data[propName], prop.type.substring(2, prop.type.length))) {
        return false
      }
    }
  }
  return true
}