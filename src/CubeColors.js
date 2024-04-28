import * as THREE from 'three'

export const gapColor = 'black'
// const yellow = 'white'
// const green = 'white'
// const brown = 'white'
// const gray = 'white'
// const purple = 'white'
// const red = 'white'

const yellow = 'yellow'
const green = '#0fbc0f'
const brown = '#3fc7cc'
const gray = 'gray'
const purple = 'purple'
const red = 'red'

const colorPosition = {
    yellow: {
        1: {mainSide: 1, nextSide:5, verticalSide:2         }, // mainSide // nextSide // verticalSide => GRAY OR RED
        2: {mainSide: 1, nextSide: null, verticalSide:2     },
        3: {mainSide: 1, nextSide:4, verticalSide:2         },
        4: {mainSide: 1, nextSide:5, verticalSide: null     },
        5: {mainSide: 1, nextSide:null, verticalSide: null  },
        6: {mainSide: 1, nextSide:4, verticalSide: null     },
        7: {mainSide: 1, nextSide:5, verticalSide:3         },
        8: {mainSide: 1, nextSide: null, verticalSide:3     },
        9: {mainSide: 1, nextSide:4, verticalSide:3         }
    },
    brown: {
        1: {mainSide: 4, nextSide:1, verticalSide:2         }, // mainSide // nextSide // verticalSide => GRAY OR RED
        2: {mainSide: 4, nextSide: null, verticalSide:2     },
        3: {mainSide: 4, nextSide:0, verticalSide:2         },
        4: {mainSide: 4, nextSide:1, verticalSide: null     },
        5: {mainSide: 4, nextSide:null, verticalSide: null     },
        6: {mainSide: 4, nextSide:0, verticalSide: null     },
        7: {mainSide: 4, nextSide:1, verticalSide:3         },
        8: {mainSide: 4, nextSide: null, verticalSide:3     },
        9: {mainSide: 4, nextSide:0, verticalSide:3         }
    },
    purple: {
        1: {mainSide: 0, nextSide:4, verticalSide:2         }, // mainSide // nextSide // verticalSide => GRAY OR RED
        2: {mainSide: 0, nextSide: null, verticalSide:2     },
        3: {mainSide: 0, nextSide:5, verticalSide:2         },
        4: {mainSide: 0, nextSide:4, verticalSide: null     },
        5: {mainSide: 0, nextSide:null, verticalSide: null     },
        6: {mainSide: 0, nextSide:5, verticalSide: null     },
        7: {mainSide: 0, nextSide:4, verticalSide:3         },
        8: {mainSide: 0, nextSide: null, verticalSide:3     },
        9: {mainSide: 0, nextSide:5, verticalSide:3         }
    },
    green: {
        1: {mainSide: 5, nextSide:0, verticalSide:2      }, // mainSide // nextSide // verticalSide => GRAY OR RED
        2: {mainSide: 5, nextSide: null, verticalSide:2  },
        3: {mainSide: 5, nextSide:1, verticalSide:2      },
        4: {mainSide: 5, nextSide:0, verticalSide: null  },
        5: {mainSide: 5, nextSide:null, verticalSide: null  },
        6: {mainSide: 5, nextSide:1, verticalSide: null  },
        7: {mainSide: 5, nextSide:0, verticalSide:3      },
        8: {mainSide: 5, nextSide: null, verticalSide:3  },
        9: {mainSide: 5, nextSide:1, verticalSide:3      }
    },
    gray: {
        1: {mainSide: 3, nextSide:4, verticalSide:0},
        2: {mainSide: 3, nextSide:null, verticalSide:0},
        3: {mainSide: 3, nextSide:5, verticalSide:0},
        4: {mainSide: 3, nextSide:4, verticalSide: null},
        5: {mainSide: 3, nextSide:null, verticalSide: null},
        6: {mainSide: 3, nextSide:5, verticalSide: null},
        7: {mainSide: 3, nextSide:4, verticalSide:1 },
        8: {mainSide: 3, nextSide:null, verticalSide:1 },
        9: {mainSide: 3, nextSide:5, verticalSide:1 }
    },
    red: {
        1: {mainSide: 2, nextSide:4, verticalSide:1},
        2: {mainSide: 2, nextSide:null, verticalSide:1},
        3: {mainSide: 2, nextSide:5, verticalSide:1},
        4: {mainSide: 2, nextSide:4, verticalSide: null},
        5: {mainSide: 2, nextSide:null, verticalSide: null},
        6: {mainSide: 2, nextSide:5, verticalSide: null},
        7: {mainSide: 2, nextSide:4, verticalSide:0 },
        8: {mainSide: 2, nextSide:null, verticalSide:0 },
        9: {mainSide: 2, nextSide:5, verticalSide:0 }
    },
}

// TODO: replace all pink by
const arrayPositionColorByPositionCube = {
    yellow: {
        1: [ yellow, green,  red],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        2: [ yellow, 'none',   red],      // mainSide -> verticalSide                 index = 0,1,2
        3: [ yellow, brown,  red],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        4: [ yellow, green,   'none'],      // mainSide -> nextSide                     index = 0,1,2
        5: [ yellow, 'none',   'none'],      // mainSide -> nextSide                     index = 0,1,2
        6: [ yellow, brown,   'none'],      // mainSide -> nextSide                     index = 0,1,2
        7: [ yellow, green,  gray],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        8: [ yellow, 'none',   gray],      // mainSide -> verticalSide                 index = 0,1,2
        9: [ yellow, brown,  gray],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
    },
    brown: {
        1: [ brown, yellow,  red],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        2: [ brown, 'none',   red],      // mainSide -> verticalSide                 index = 0,1,2
        3: [ brown, purple,  red],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        4: [ brown, yellow,   'none'],      // mainSide -> nextSide                     index = 0,1,2
        5: [ brown, 'none',   'none'],      // mainSide -> nextSide                     index = 0,1,2
        6: [ brown, purple,   'none'],      // mainSide -> nextSide                     index = 0,1,2
        7: [ brown, yellow,  gray],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        8: [ brown, 'none',   gray],      // mainSide -> verticalSide                 index = 0,1,2
        9: [ brown, purple,  gray],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
    },
    purple: {
        1: [ purple, brown,  red],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        2: [ purple, 'none',   red],      // mainSide -> verticalSide                 index = 0,1,2
        3: [ purple, green,  red],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        4: [ purple, brown,   'none'],      // mainSide -> nextSide                     index = 0,1,2
        5: [ purple, 'none',   'none'],      // mainSide -> nextSide                     index = 0,1,2
        6: [ purple, green,   'none'],      // mainSide -> nextSide                     index = 0,1,2
        7: [ purple, brown,  gray],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        8: [ purple, 'none',   gray],      // mainSide -> verticalSide                 index = 0,1,2
        9: [ purple, green,  gray],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
    },
    green: {
        1: [ green, purple,  red],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        2: [ green, 'none',   red],      // mainSide -> verticalSide                 index = 0,1,2
        3: [ green, yellow,  red],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        4: [ green, purple,   'none'],      // mainSide -> nextSide                     index = 0,1,2
        5: [ green, 'none',   'none'],      // mainSide -> nextSide                     index = 0,1,2
        6: [ green, yellow,   'none'],      // mainSide -> nextSide                     index = 0,1,2
        7: [ green, purple,  gray],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        8: [ green, 'none',   gray],      // mainSide -> verticalSide                 index = 0,1,2
        9: [ green, yellow,  gray],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
    },
    red: {
        1: [ red, brown,  yellow],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        2: [ red, 'none',   yellow],      // mainSide -> verticalSide                 index = 0,1,2
        3: [ red, green,  yellow],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        4: [ red, brown,   'none'],      // mainSide -> nextSide                     index = 0,1,2
        5: [ red, 'none',   'none'],      // mainSide -> nextSide                     index = 0,1,2
        6: [ red, green,   'none'],      // mainSide -> nextSide                     index = 0,1,2
        7: [ red, brown,  purple],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        8: [ red, 'none',   purple],      // mainSide -> verticalSide                 index = 0,1,2
        9: [ red, green,  purple],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
    },
    gray: {
        1: [ gray, brown,  purple],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        2: [ gray, 'none',   purple],      // mainSide -> verticalSide                 index = 0,1,2
        3: [ gray, green,  purple],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        4: [ gray, brown,   'none'],      // mainSide -> nextSide                     index = 0,1,2
        5: [ gray, 'none',   'none'],      // mainSide -> nextSide                     index = 0,1,2
        6: [ gray, green,   'none'],      // mainSide -> nextSide                     index = 0,1,2
        7: [ gray, brown,  yellow],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
        8: [ gray, 'none',   yellow],      // mainSide -> verticalSide                 index = 0,1,2
        9: [ gray, green,  yellow],      // mainSide -> nextSide -> verticalSide     index = 0,1,2
    },
}

export const renderMaterialByNumberCube = (numberCube, mainColor) => {
    let cubeMaterialColors = [];
    const mainSide = arrayPositionColorByPositionCube[mainColor][numberCube][0];
    const nextSide = arrayPositionColorByPositionCube[mainColor][numberCube][1];
    const verticalSide = arrayPositionColorByPositionCube[mainColor][numberCube][2];

    for (let iterator = 0; iterator < 6; iterator++){
        let position = colorPosition[mainColor][numberCube];

        const material = new THREE.MeshStandardMaterial({...additionalSettings, color: gapColor});

        if (position.mainSide === iterator) material.setValues({color: mainSide})

        if ([4,6].indexOf(numberCube) !== -1) {
            if ((position.nextSide || position.nextSide === 0)  && position.nextSide === iterator) material.setValues({color: nextSide})
        } else if ([2,8].indexOf(numberCube) !== -1) {
            if ((position.verticalSide || position.verticalSide === 0)  && position.verticalSide === iterator) material.setValues({color: verticalSide})
        } else {
            if ((position.nextSide || position.nextSide === 0)  && position.nextSide === iterator) {
                material.setValues({color: nextSide})
            }
            if ((position.verticalSide || position.verticalSide === 0)  && position.verticalSide === iterator) {
                material.setValues({color: verticalSide})
            }
        }
        cubeMaterialColors.push(material)
    }

    if (cubeMaterialColors.length !== 6) {
        throw new Error('Failed to render Material Colors to the cube, rendered just ' + cubeMaterialColors.length)
    }

    return cubeMaterialColors;
}
let additionalSettings = {
    // metalness: .6,
}
