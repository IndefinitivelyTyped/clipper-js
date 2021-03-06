export interface Bounds {
    left: number
    right: number
    top: number
    bottom: number
    width: number
    height: number
    size: number
}

export interface Point {
    X: number
    Y: number
}

export interface PointLower {
    x: number
    y: number
}

export default class Shape {
    constructor(paths: Point[][])
    constructor(paths: Point[][], closed: boolean)
    constructor(paths: (Point | PointLower)[][], closed: boolean, capitalConversion: boolean, integerConversion?: boolean)

    union(clipShape: Shape): Shape
    difference(clipShape: Shape): Shape
    intersect(clipShape: Shape): Shape
    xor(clipShape: Shape): Shape

    offset(offset: number, options?: any): Shape
    scaleUp(factor: number): this
    scaleDown(factor: number): this

    firstPoint(): PointLower
    lastPoint(): PointLower

    areas(): number[]
    area(index: number): number
    totalArea(): number
    perimeter(index: number): number
    perimeters(): number[]
    totalPerimeter(): number
    reverse(): this
    tresholdArea(minArea: number): void // spelling included

    join(shape: Shape): this
    clone(): Shape

    shapeBounds(): Bounds
    pathBounds(index: number): Bounds

    clean(cleanDelta: number): Shape

    orientation(index: number): boolean
    pointInShape(point: Point, round?: boolean): boolean
    pointInPath(index: number, point: Point, round?: boolean): boolean

    fixOrientation(): this
    removeOverlap(): Shape | this
    separateShapes(): Shape[]
    mapToLower(): PointLower[][]
}
