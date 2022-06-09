// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101030303010101010303010105040303010301030c03030303010101030801030103010301030101030103010307060301030c0301070606030103010301010301030103010101010301030303010303030301030303030303010101030103010301010101010101030c090103010301030303030301010103010a0103010301010101010101010103010a01030103030301030303030c0c030303030301010103010101010301010801010103020301030303030303010108010b0c0301030101010801010303030301080101010301010108010103010103010801010103030303030303030301030303030101010101010101010103010101010301`, img`
2 2 2 2 . . . 2 2 2 2 . . 2 2 . 
. . . 2 . 2 . . . . . . 2 2 2 . 
. 2 . 2 . 2 . 2 . 2 2 . 2 . 2 . 
. . . 2 . . . 2 . . . . 2 . 2 . 
2 2 . 2 . 2 . 2 2 2 2 . 2 . . . 
2 . . . . 2 . . . . . . 2 2 2 . 
2 . 2 . 2 2 2 2 2 2 2 . . . 2 . 
2 . 2 . . . . . 2 2 2 . 2 . 2 . 
2 . 2 2 2 2 2 2 2 2 2 . 2 . 2 . 
2 . . . 2 . . . . . . . . . . . 
2 2 2 . 2 2 2 2 . 2 2 . 2 2 2 . 
. . 2 . . . . . . 2 2 . 2 . . . 
2 . 2 2 2 . 2 2 . . . . 2 . 2 2 
2 . 2 2 2 . 2 2 . 2 2 . 2 . 2 2 
2 . . . . . . . . . 2 . . . . 2 
2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 2 
`, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.dungeon.doorOpenWest,sprites.dungeon.doorOpenNorth,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
