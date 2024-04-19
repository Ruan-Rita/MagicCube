import * as THREE from 'three'
import arrowUpBackground from  './assets/arrow_up.png'
import arrowDownBackground from  './assets/arrow_down.png'
import arrowLeftBackground from  './assets/arrow_left.png'
import arrowRightBackground from  './assets/arrow_right.png'


export default class RenderCube {

    options = {
        "Size": 2,
        "Spacing": .4,
        "ActionPurple": false,
        "ActionRed": false,
        "ActionGray": false,
        "ActionBrown": false,
        "ActionYellow": false,
        "ActionGreen": false,
    }
    margem = this.options.Spacing + this.options.Size

    constructor(scene, gui, camera) {
        this.scene = scene
        this.gui = gui
        this.camera = camera
        this.gui.add(this.options,"Size",1, 5)
        this.gui.add(this.options,"Spacing",.2, 1)
        this.textureLoader = new THREE.TextureLoader()

    }

    zBrown = 0 // left
    zRed = 0 // left
    zYellow = 0 // right
    zPurple = 0 // left
    zGray = 0 // right
    zGreen = 0 // right

    zAxisBrown = 0 // left
    zAxisRed = 0 // left
    zAxisYellow = 0 // right
    zAxisPurple = 0 // left
    zAxisGray = 0 // right
    zAxisGreen = 0 // right
    /**
     * [1] [2] [3]
     * [4] [A] [6]
     * [7] [8] [9]
     */
    positionAxes = {
        axesYellow: {
            name: 'Yellow',
            1: {x: 0,y: this.margem, z: - this.margem},
            2: {x: 0,y: this.margem, z: 0},
            3: {x: 0,y: this.margem, z: this.margem},
            4: {x: 0,y: 0, z: -this.margem},
            6: {x: 0,y: 0, z: this.margem},
            7: {x: 0,y: -this.margem, z: -this.margem},
            8: {x: 0,y: -this.margem, z: 0},
            9: {x: 0,y: -this.margem, z: this.margem},
        },
        axesPurple: {
            name: 'Purple',
            1: {x: 0,y: this.margem, z: this.margem},
            2: {x: 0,y: this.margem, z: 0},
            3: {x: 0,y: this.margem, z: -this.margem},
            4: {x: 0,y: 0, z: this.margem},
            6: {x: 0,y: 0, z: -this.margem},
            7: {x: 0,y: -this.margem, z: this.margem},
            8: {x: 0,y: -this.margem, z: 0},
            9: {x: 0,y: -this.margem, z: -this.margem},
        },
        axesGray: {
            name: 'Gray',
            1: {x: this.margem, y: 0, z: this.margem},
            2: {x: this.margem, y: 0, z: 0},
            3: {x: this.margem, y: 0, z: -this.margem},
            4: {x: 0, y: 0, z: this.margem},
            6: {x: 0, y: 0, z: -this.margem},
            7: {x: -this.margem, y: 0, z: this.margem},
            8: {x: -this.margem, y: 0, z: 0},
            9: {x: -this.margem, y: 0, z: -this.margem},
        },
        axesRed: {
            name: 'Red',
            1: {x: -this.margem, y: 0, z: this.margem},
            2: {x: -this.margem, y: 0, z: 0},
            3: {x: -this.margem, y: 0, z: -this.margem},
            4: {x: 0, y: 0, z: this.margem},
            6: {x: 0, y: 0, z: -this.margem},
            7: {x: this.margem, y: 0, z: this.margem},
            8: {x: this.margem, y: 0, z: 0},
            9: {x: this.margem, y: 0, z: -this.margem},
        },
        axesGreen: {
            name: 'Green',
            1: {x: this.margem,y: this.margem,z: 0},
            2: {x: 0,y: this.margem,z: 0},
            3: {x: -this.margem,y: this.margem,z: 0},
            4: {x: this.margem,y: 0,z: 0},
            6: {x: -this.margem,y: 0,z: 0},
            7: {x: this.margem,y: -this.margem,z: 0},
            8: {x: 0,y: -this.margem,z: 0},
            9: {x: -this.margem,y: -this.margem,z: 0},
        },
        axesBrown: {
            name: 'Brown',
            1: {x: -this.margem,y: this.margem,z: 0},
            2: {x: 0,y: this.margem,z: 0},
            3: {x: this.margem,y: this.margem,z: 0},
            4: {x: -this.margem,y: 0,z: 0},
            6: {x: this.margem,y: 0,z: 0},
            7: {x: -this.margem,y: -this.margem,z: 0},
            8: {x: 0,y: -this.margem,z: 0},
            9: {x: this.margem,y: -this.margem,z: 0},
        }
    }

    render() {
        this.mainCube = this.createBox(false, 'black');
        this.mainCube.box.material.wireframe = true;
        this.scene.add(this.mainCube.box);

        // const box2MultiMaterial = [
        //     new THREE.MeshStandardMaterial({color: 'black'}),
        //     // new THREE.MeshStandardMaterial({color: 'black'}),
        //     new THREE.MeshStandardMaterial({color: 'black'}),
        //     new THREE.MeshStandardMaterial({color: 'black'}),
        //     // new THREE.MeshStandardMaterial({color: 'black'}),
        //     new THREE.MeshStandardMaterial({color: 'black'}),
        // ]
        // const material = new THREE.MultiMaterial(box2MultiMaterial);

        this.axesRed = this.createBox(this.mainCube.box, 'red',{x: 0, y: this.margem, z: 0}, true);
        this.axesPurple = this.createBox(this.mainCube.box, 'purple',{x: this.margem, y: 0, z: 0}, true);
        this.axesGray = this.createBox(this.mainCube.box, 'gray',{x: 0, y: -this.margem, z: 0}, true);
        this.axesBrown = this.createBox(this.mainCube.box, 'brown',{x: 0, y: 0, z: this.margem}, true);
        this.axesYellow = this.createBox(this.mainCube.box, 'yellow',{x: -this.margem, y: 0, z: 0}, true);
        this.axesGreen = this.createBox(this.mainCube.box, 'green',{x: 0, y: 0, z: -this.margem}, true);

        this.axesRed.box.material.setValues({
            map: this.textureLoader.load(arrowLeftBackground)
        })
        this.axesPurple.box.material.setValues({
            map: this.textureLoader.load(arrowUpBackground)
        })
        this.axesGray.box.material.setValues({
            map: this.textureLoader.load(arrowRightBackground)
        })
        this.axesBrown.box.material.setValues({
            map: this.textureLoader.load(arrowUpBackground)
        })
        this.axesYellow.box.material.setValues({
            map: this.textureLoader.load(arrowUpBackground)
        })
        this.axesGreen.box.material.setValues({
            map: this.textureLoader.load(arrowUpBackground)
        })

        // names
        this.axesRed.axes.name = this.positionAxes.axesRed.name;
        this.axesPurple.axes.name = this.positionAxes.axesPurple.name;
        this.axesGray.axes.name = this.positionAxes.axesGray.name;
        this.axesBrown.axes.name = this.positionAxes.axesBrown.name;
        this.axesYellow.axes.name = this.positionAxes.axesYellow.name;
        this.axesGreen.axes.name = this.positionAxes.axesGreen.name;

        // AxesPurple
        this.box1 = this.createBox(this.axesPurple.axes, 'purple',this.positionAxes.axesPurple[1]);
        this.box2 = this.createBox(this.axesPurple.axes, 'purple',this.positionAxes.axesPurple[2]); // #eb43eb
        this.box3 = this.createBox(this.axesPurple.axes, 'purple',this.positionAxes.axesPurple[3]);
        this.box4 = this.createBox(this.axesPurple.axes, 'purple',this.positionAxes.axesPurple[4]);
        this.box6 = this.createBox(this.axesPurple.axes, 'purple',this.positionAxes.axesPurple[6]);
        this.box7 = this.createBox(this.axesPurple.axes, 'purple',this.positionAxes.axesPurple[7]);
        this.box8 = this.createBox(this.axesPurple.axes, 'purple',this.positionAxes.axesPurple[8]);
        this.box9 = this.createBox(this.axesPurple.axes, 'purple',this.positionAxes.axesPurple[9]);

        // AxesYellow
        this.boxYellow1 = this.createBox(this.axesYellow.axes, 'yellow',this.positionAxes.axesYellow[1]);
        this.boxYellow2 = this.createBox(this.axesYellow.axes, 'yellow',this.positionAxes.axesYellow[2]); //#b9b908
        this.boxYellow3 = this.createBox(this.axesYellow.axes, 'yellow',this.positionAxes.axesYellow[3]);
        this.boxYellow4 = this.createBox(this.axesYellow.axes, 'yellow',this.positionAxes.axesYellow[4]);
        this.boxYellow6 = this.createBox(this.axesYellow.axes, 'yellow',this.positionAxes.axesYellow[6]);
        this.boxYellow7 = this.createBox(this.axesYellow.axes, 'yellow',this.positionAxes.axesYellow[7]);
        this.boxYellow8 = this.createBox(this.axesYellow.axes, 'yellow',this.positionAxes.axesYellow[8]);
        this.boxYellow9 = this.createBox(this.axesYellow.axes, 'yellow',this.positionAxes.axesYellow[9]);

        // AxesGreen
        this.boxGreen2 = this.createBox(this.axesGreen.axes, 'green',this.positionAxes.axesGreen[2]); //#06ab06
        this.boxGreen8 = this.createBox(this.axesGreen.axes, 'green',this.positionAxes.axesGreen[8]);

        // AxesBrown
        this.boxBrown2 = this.createBox(this.axesBrown.axes, '#773838',this.positionAxes.axesBrown[2]);
        this.boxBrown8 = this.createBox(this.axesBrown.axes, 'brown',this.positionAxes.axesBrown[8]);

        // test

        this.guiAxesAction()

        setInterval(() => {
            let colorName = [
                'Red',
                'Gray',
                'Green',
                'Yellow',
                'Purple',
                'Brown'
            ]
            this.renderAction(this[`axes${colorName[Math.floor(Math.random() * colorName.length)]}`])
        },800)

        return this;
    }
    guiAxesAction() {
        let degree = 90;

        this.gui.add(this.options,'ActionPurple').onChange(value => {
            this.renderAction(this.axesPurple);
        });
        this.gui.add(this.options,'ActionRed').onChange(value => {
            this.renderAction(this.axesRed);
            console.log("AFTER ROTATE Red: "+this.determineNorthDirection(this.zRed));
            console.log("AFTER ROTATE Red: "+this.getNumberCubeByAngle(3,this.axesRed));
            console.log("AFTER ROTATE Degree: "+ THREE.MathUtils.radToDeg(this.axesRed.axes.rotation.y));
        });
        this.gui.add(this.options,'ActionGray').onChange(value => {
            this.renderAction(this.axesGray);
        });
        this.gui.add(this.options,'ActionBrown').onChange(value => {
            this.renderAction(this.axesBrown);
            console.log("AFTER ROTATE Brown: "+this.determineNorthDirection(this.zBrown));
            console.log("AFTER ROTATE Brown: "+this.getNumberCubeByAngle(3,this.axesBrown));
            console.log("AFTER ROTATE Degree: "+ THREE.MathUtils.radToDeg(this.axesBrown.axes.rotation.z));
        });
        this.gui.add(this.options,'ActionYellow').onChange(value => {
            this.renderAction(this.axesYellow);
        });
        this.gui.add(this.options,'ActionGreen').onChange(value => {
            this.renderAction(this.axesGreen);
        });
    }
    renderAction(axesColor, direction = 'right') {
        this.moveImproved(axesColor.axes.name);
        // console.log('O que está Direction: ' + this.determineNorthDirection(this.zBrown));
        let degree = 90;
        let degreeCurrent = this[`z${axesColor.axes.name}`]
        console.log('dedegreeCurrent: ' + degreeCurrent);
        // rule to degree
        this[`z${axesColor.axes.name}`] += THREE.MathUtils.degToRad(degree);
        if (Math.abs(THREE.MathUtils.radToDeg(this[`z${axesColor.axes.name}`])) === 360 ) {
            this[`z${axesColor.axes.name}`] = 0;
        }

        // rule to invert degree
        const invertSignalRule = [this.axesRed.axes.name, this.axesBrown.axes.name, this.axesPurple.axes.name]
        if (invertSignalRule.indexOf(axesColor.axes.name) !== -1) {
            degree = -(degree)
        }

        this[`zAxis${axesColor.axes.name}`] = (this[`zAxis${axesColor.axes.name}`] + degree)
        if (Math.abs(this[`zAxis${axesColor.axes.name}`]) === 360 ) {
            this[`zAxis${axesColor.axes.name}`] = 0;
        }
        console.log('this[`zAxis${axesColor.axes.name}`] = (this[`zAxis${axesColor.axes.name}`] + degree): '+this[`zAxis${axesColor.axes.name}`]);
        console.log('this[`zAxis${axesColor.axes.name}`] = (this[`zAxis${axesColor.axes.name}`] + degree): '+THREE.MathUtils.radToDeg(this[`z${axesColor.axes.name}`]));
        // decide which axis i will rotate
        let x = 0, y = 0 , z = 0;
        if ([this.axesYellow.axes.name, this.axesPurple.axes.name].indexOf(axesColor.axes.name) !== -1) {
            // x = degreeCurrent + (THREE.MathUtils.degToRad(degree))
            x = THREE.MathUtils.degToRad(this[`zAxis${axesColor.axes.name}`])
        }
        if ([this.axesRed.axes.name, this.axesGray.axes.name].indexOf(axesColor.axes.name) !== -1) {
            // y = degreeCurrent + (THREE.MathUtils.degToRad(degree))
            y = THREE.MathUtils.degToRad(this[`zAxis${axesColor.axes.name}`])
        }
        if ([this.axesGreen.axes.name, this.axesBrown.axes.name].indexOf(axesColor.axes.name) !== -1) {
            // z = degreeCurrent + (THREE.MathUtils.degToRad(degree))
            z = THREE.MathUtils.degToRad(this[`zAxis${axesColor.axes.name}`])
        }

        const euler = new THREE.Euler(x,y,z, "XYZ")
        axesColor.axes.setRotationFromEuler(euler)
    }

    /**
     * Function: Determine the number relative to its angle based on the base form where numberCube 2 represents the north, or starting point
     * of the representation of how the cube was developed
     *
     * Params:
     * - numberCube: The number of the cube on the X axis that will find its position based on the angle on the same axis
     * - angle: The angle of the axis
     *
     * Represetation
     *     0º          90º         180º          270º
     * [1][N][3]    [7][4][1]    [9][8][7]    [3][6][9]
     * [4][C][6] -> [8][C][N] -> [6][C][4] -> [N][C][8] -> 0º
     * [7][8][9]    [9][6][3]    [3][N][1]    [1][4][7]
     *
     *         -90º         -180º         -270º           0º
     *       [1][N][3]    [7][4][1]    [9][8][7]    [3][6][9]
     * 0º <- [4][C][6] <- [8][C][N] <- [6][C][4] <- [N][C][8]
     *       [7][8][9]    [9][6][3]    [3][N][1]    [1][4][7]
     */
    getNumberCubeByAngleFixColorInverted(numberCube, axesColor, invert = false) {

    }
    getNumberCubeByAngle(numberCube, axesColor, invert = false) {
        // rule to invert degree
        let invertInvertedAngle = false
        const invertSignalRule = [this.axesRed.axes.name, this.axesBrown.axes.name, this.axesPurple.axes.name]
        if (invertSignalRule.indexOf(axesColor.axes.name) !== -1) {
            invertInvertedAngle = true
        }

        let direction = this.determineNorthDirection(this[`z${axesColor.axes.name}`]);
        // if (invertInvertedAngle && direction === 'right') direction = 'left'
        // if (invertInvertedAngle && direction === 'left') direction = 'right'

        console.log('DIRECTION #X#: ' + direction);
        if (direction === 'top') return numberCube;
        if (direction === 'right') {
            if (invert) {
                switch (numberCube) {
                    case 1: return 3;
                    case 2: return 6;
                    case 3: return 9;
                    case 4: return 2;
                    case 6: return 8;
                    case 7: return 1;
                    case 8: return 4;
                    case 9: return 7;
                    default: return numberCube;
                }
            }
            switch (numberCube) {
                case 1: return 7;
                case 2: return 4;
                case 3: return 1;
                case 4: return 8;
                case 6: return 2;
                case 7: return 9;
                case 8: return 6;
                case 9: return 3;
                default: return numberCube;
            }
        }
        if (direction === 'bottom') {
            if (invert) {
                switch (numberCube) {
                    case 1: return 9;
                    case 2: return 8;
                    case 3: return 7;
                    case 4: return 6;
                    case 6: return 4;
                    case 7: return 3;
                    case 8: return 2;
                    case 9: return 1;
                    default: return numberCube;
                }
            }
            switch (numberCube) {
                case 1: return 9;
                case 2: return 8;
                case 3: return 7;
                case 4: return 6;
                case 6: return 4;
                case 7: return 3;
                case 8: return 2;
                case 9: return 1;
                default: return numberCube;
            }
        }
        if (direction === 'left') {
            if (invert) {
                switch (numberCube) {
                    case 1: return 7;
                    case 2: return 4;
                    case 3: return 1;
                    case 4: return 8;
                    case 6: return 2;
                    case 7: return 9;
                    case 8: return 6;
                    case 9: return 3;
                    default: return numberCube;
                }
            }
            switch (numberCube) {
                case 1: return 3;
                case 2: return 6;
                case 3: return 9;
                case 4: return 2;
                case 6: return 8;
                case 7: return 1;
                case 8: return 4;
                case 9: return 7;
                default: return numberCube;
            }
        }
    }

    /**
     *  Function: indicates where north is on an axis
     *
     *  Params:
     *  - angle: euler.x or euler.y or euler.z
     *
     *  return 'top'|'right'|'bottom'|'left'
     */
    determineNorthDirection(eulerAxis) {
        const angle = THREE.MathUtils.radToDeg(eulerAxis)
        if (angle === 0 || angle === -0) return 'top';
        if (angle === 90 || angle === -270) return 'right';
        if (angle === 180 || angle === -180) return 'bottom';
        if (angle === 270 || angle === -90) return 'left';
    }

    searchCube(related, arrayAxes, numberPosition) {
        let foundCube = false
        for (let i = 0; i < arrayAxes.length; i++) {
            let relationName = `${related}${arrayAxes[i].axes.name}`;

            let nameRelated = this.positionRelation[related].filter(searchRelated => searchRelated === arrayAxes[i].axes.name)
            /**
             * Default is when 2 is at top
             */
            const convertNumberRelatedToDefault = this.getNumberCubeByAngle(numberPosition,this[`axes${related}`], true)
            console.log('Related: ' + related+' numero desejado desse eixo: '+numberPosition);
            console.log('Convertido: '+convertNumberRelatedToDefault);
            console.log('Estou na procura de quem?: ' + arrayAxes[i].axes.name);
            console.log('Name Related: '+nameRelated);
            let currentPositionAxes = this.positionAxes[`axes${nameRelated}`];

            let relation = this.positionRelation[relationName];

            console.log('relation', relation);
            let numberCubeThisCurrentAxes = relation[convertNumberRelatedToDefault];
            console.log('Numero pego da relacao: ' + numberCubeThisCurrentAxes);

            if (numberCubeThisCurrentAxes) {
                for (let iterate = 0; iterate < arrayAxes[i].axes.children.length; iterate++) {
                    const searchCube = arrayAxes[i].axes.children[iterate];
                    let correctNumber = this.getNumberCubeByAngle(numberCubeThisCurrentAxes,arrayAxes[i]);
                    console.log('correctNumber', correctNumber);
                    console.log(arrayAxes[i].axes);
                    // console.log('currentPositionAxes[correctNumber]');
                    // console.log(currentPositionAxes[correctNumber]);

                    let {x,y,z} = currentPositionAxes[correctNumber];
                    console.log({x,y,z});
                    console.log({x: searchCube.position.x,y: searchCube.position.y,z: searchCube.position.z});
                    if (searchCube.position.x == x && searchCube.position.y == y && searchCube.position.z == z  ) {
                        foundCube = searchCube;
                        arrayAxes[i].axes.remove(foundCube)
                        break;
                    }
                }
            }
            if (foundCube) {
                break;
            }
        }
        if (!foundCube) {
            throw {
                error: 'Cube not found',
                related,
                arrayAxes,
                numberPosition
            }
        }

        return foundCube;
    }
    /**
     *             red
     *              |
     * green  <-  yellow  ->  Brown
     *              |
     *             gray
     */
    positionRelation = {
        Red:         ['Purple', 'Green', 'Brown', 'Yellow'],
        Gray:        ['Purple', 'Green', 'Brown', 'Yellow'],

        Brown:       ['Yellow', 'Red', 'Purple', 'Gray'],
        Green:       ['Yellow', 'Red', 'Purple', 'Gray'],

        Purple:      ['Red', 'Green', 'Brown', 'Gray'],
        Yellow:      ['Red', 'Green', 'Brown', 'Gray'],

        BrownRed:    { 1: 1, 2: 4, 3: 7 },
        BrownYellow: { 1: 3, 4: 6, 7: 9 },
        BrownPurple: { 3: 1, 6: 4, 9: 7 },
        BrownGray:   { 7: 7, 8: 4, 9: 1 },

        YellowRed:   { 1: 3, 2: 2, 3: 1 },
        YellowBrown: { 3: 1, 6: 4, 9: 7 },
        YellowGreen: { 1: 3, 4: 6, 7: 9 },
        YellowGray:  { 7: 9, 8: 8, 9: 7 },

        GreenRed:    { 1: 9, 2: 6, 3: 3 },
        GreenYellow: { 3: 1, 6: 4, 9: 7 },
        GreenPurple: { 1: 3, 4: 6, 7: 9 },
        GreenGray:   { 7: 3, 8: 6, 9: 9 },

        GrayYellow:  { 7: 9, 8: 8, 9: 7 },
        GrayBrown:   { 1: 9, 4: 8, 7: 7 },
        GrayGreen:   { 3: 7, 6: 8, 9: 9 },
        GrayPurple:  { 1: 7, 2: 8, 3: 9 },

        RedYellow:   { 1: 3, 2: 2, 3: 1 },
        RedBrown:    { 1: 1, 4: 2, 7: 3 },
        RedGreen:    { 3: 3, 6: 2, 9: 1 },
        RedPurple:   { 7: 1, 8: 2, 9: 3 },

        PurpleRed:   { 1: 7, 2: 8, 3: 9 },
        PurpleBrown: { 1: 3, 4: 6, 7: 9 },
        PurpleGreen: { 3: 1, 6: 4, 9: 7 },
        PurpleGray:  { 7: 1, 8: 2, 9: 3 },
    }
    moveImproved(axesName) {
        const cubes = {}
        const ajustPosition = []

        for (let iterate = 0; iterate < this[`axes${axesName}`].axes.children.length; iterate++) {
            const cube = this[`axes${axesName}`].axes.children[iterate];
            Object.keys(this.positionAxes[`axes${axesName}`]).forEach(numberCube => {
                let {x,y,z} = this.positionAxes[`axes${axesName}`][numberCube]
                if (cube.position.x == x && cube.position.y == y && cube.position.z == z  ) {
                    // cubes[numberCube] = cube;
                    cubes[this.getNumberCubeByAngle(numberCube, this[`axes${axesName}`])] = cube;
                }
            })
        }
        console.log('Find current cubes in axes '+axesName, cubes)
        if (Object.keys(this.positionAxes[`axes${axesName}`]).length !== 8) {
            // which cubes are they missing?
            for (let i = 1; i <= 9; i++) {
                // axes
                if (i==5) continue;
                // found cube
                if (cubes[i]) continue;
                const axesColorRelated = this.positionRelation[axesName].map(item => {
                    return this[`axes${item}`]
                })
                cubes[i] = this.searchCube(axesName,axesColorRelated, i);
                console.log('Found Cube', cubes[i])
                ajustPosition[i] = this.positionAxes[`axes${axesName}`][i]
                // console.log('After search: cubes[i]', cubes[i])
            }
        }
        console.log('LOGG final quanto cubos foram achados', cubes);
        for (let i = 1; i <= 9; i++) {
            // axes
            if (i==5) continue;
            this[`axes${axesName}`].axes.add(cubes[i]);
            if (ajustPosition[i]) {
                this.help(cubes[i], ajustPosition[i])
            }
        }
    }

    help(element, position) {
        element.position.x = position.x
        element.position.y = position.y
        element.position.z = position.z
    }


    createBox(boxMain = false, color, position = false, axesEnabled = false) {
        const geometric = new THREE.BoxGeometry(this.options.Size,this.options.Size,this.options.Size,this.options.Size);
        const texture = new THREE.MeshStandardMaterial({color})
        const box = new THREE.Mesh(geometric, texture)


        if (position && !axesEnabled) {
            box.position.x = position.x
            box.position.y = position.y
            box.position.z = position.z
        }
        let axes = null
        if (axesEnabled) {
            axes = new THREE.Object3D();
            axes.add(box)
            axes.position.x = position.x
            axes.position.y = position.y
            axes.position.z = position.z
        }
        if (boxMain) {
            if (axesEnabled) boxMain.add(axes)
            else boxMain.add(box)
        }

        return {box, axes}
    }
}
