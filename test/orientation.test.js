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
test('Determine the number relative to its angle based on the base form', () => {


});