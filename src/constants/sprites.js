import { v4 as uuid } from 'uuid'
const birdId = uuid()
const birdId2 = uuid()
const birdId3 = uuid()

export const SPRITE_WIDTH = 85;
export const SPRITE_HEIGHT = 85;
export default [
    {
        id: birdId,
        name: "bird",
        position: { x: 0, y: 0 },
        rotation: 0,
        actions: [],
    },
    {
        id: birdId2,
        name: "bird1",
        position: { x: 140, y: 0 },
        rotation: 0,
        actions: [],
    },
    {
        id: birdId2,
        name: "bird2",
        position: { x: 140, y: 0 },
        rotation: 0,
        actions: [],
    }
]