// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101030303010101010303010103030303010301030103030303010101030101030103010301030101030103010301010301030103010101010301030103010103010301030101010103010303030103030303010303030303030101010301030103010101010101010301010103010301030303030301010103010101030103010101010101010101030101010301030303010303030301010303030303010101030101010103010101010101010203010303030303030101010101010101030101010101010303030301010101010301010101010103010103010101010103030303030303030301030303030101010101010101010103010101010301`, img`
2 2 2 2 . . . 2 2 2 2 . . 2 2 . 
. . . 2 . 2 . 2 . . . . 2 2 2 . 
2 2 . 2 . 2 . 2 . 2 2 . 2 . 2 . 
2 2 . 2 . 2 . 2 2 2 2 . 2 . 2 . 
2 2 . 2 . 2 . 2 2 2 2 . 2 . . . 
2 . . . . 2 . . . . . . 2 2 2 . 
2 . 2 . 2 2 2 2 2 2 2 . 2 2 2 . 
2 . 2 . . . . . 2 2 2 . 2 2 2 . 
2 . 2 2 2 2 2 2 2 2 2 . 2 2 2 . 
2 . . . 2 . . . . 2 2 . . . . . 
2 2 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
. . 2 . . . . . . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 . . . . 2 2 2 2 
2 . 2 2 2 2 2 2 . 2 2 . 2 2 2 2 
2 . . . . . . . . . 2 . . . . 2 
2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 2 
`, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0], TileScale.Sixteen);
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
