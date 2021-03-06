/*
*
* Note: Keys use hyphens in order to effectively match custom HTML data attributes
*
* id {String}: Data safe name, matches overall object name including image names
* category {String}: Optional grouping to categorize items. Used to hide items in settings
* counter {Int}: If item needs to be countable, like heart pieces or leaves
* list {Array}: Strings of sprite file names to iterate over per item
* command {Array}: Strings of commands Twitch chat can use to trigger iteration
* state {Int}: Starting state. Certain items are immediately available like green tunic and level 1 shield
*
*/

export default [
    {
        id: 'goat_mode',
        category: 'goat',
        counter: null,
        list: ['goat_mode'],
        commands: ['goat', 'goatmode'],
        listPosition: 0,
    },
    {
        id: 'tunic',
        category: null,
        counter: null,
        permanent: true,
        list: ['green_tunic', 'red_tunic', 'blue_tunic'],
        commands: ['tunic'],
        listPosition: 1,
    },
    {
        id: 'shield',
        category: null,
        counter: null,
        list: ['shield_original', 'shield_l2_original'],
        commands: ['shield'],
        listPosition: 1,
    },
    {
        id: 'sword',
        category: null,
        counter: null,
        list: ['sword', 'sword_l2'],
        commands: ['sword', 'knife'],
        listPosition: 0,
    },
    {
        id: 'bomb',
        category: null,
        counter: null,
        list: ['bomb'],
        commands: ['bombs', 'bomb', 'boomboom', 'boombooms'],
        listPosition: 0,
    },
    {
        id: 'bow',
        category: null,
        counter: null,
        list: ['bow'],
        commands: ['bow', 'D', 'rottenwatermelon'],
        listPosition: 0,
    },
    {
        id: 'shovel',
        category: null,
        counter: null,
        list: ['shovel'],
        commands: ['shovel'],
        listPosition: 0,
    },
    {
        id: 'mushroom',
        category: null,
        counter: null,
        list: ['mushroom'],
        commands: ['mushroom', 'shroom', 'toadstool'],
        listPosition: 0,
    },
    {
        id: 'magic_powder',
        category: null,
        counter: null,
        list: ['magic_powder'],
        commands: ['magicpowder', 'powder'],
        listPosition: 0,
    },
    {
        id: 'trade',
        category: 'extended',
        counter: null,
        list: [
            'yoshi_doll',
            'ribbon',
            'dog_food',
            'bananas',
            'stick',
            'honeycomb',
            'pineapple',
            'hibiscus',
            'letter',
            'broomstick',
            'fishing_hook',
            'necklace',
            'mermaid_scale',
            'magnifying_lens',
            // 'boomerang',
        ],
        commands: ['trade', 'tradeitem'],
        listPosition: 0,
    },
    {
        id: 'sea_shell',
        category: 'extended',
        counter: 20,
        list: ['sea_shell'],
        commands: ['seashell', 'shell'],
        listPosition: 0,
        currentCounter: 0,
    },
    {
        id: 'golden_leaf',
        category: 'extended',
        counter: 5,
        list: ['golden_leaf'],
        commands: ['goldenleaf', 'leaf', 'goldenleaves', 'goldenleaf'],
        listPosition: 0,
        currentCounter: 0,
    },
    {
        id: 'tail_key',
        category: 'extended',
        counter: null,
        list: ['tail_key'],
        commands: ['tailkey', 'key1'],
        listPosition: 0,
    },
    {
        id: 'slime_key',
        category: 'extended',
        counter: null,
        list: ['slime_key'],
        commands: ['slimekey', 'key2'],
        listPosition: 0,
    },
    {
        id: 'face_key',
        category: 'extended',
        counter: null,
        list: ['face_key'],
        commands: ['facekey', 'key3'],
        listPosition: 0,
    },
    {
        id: 'angler_key',
        category: 'extended',
        counter: null,
        list: ['angler_key'],
        commands: ['anglerkey', 'key4'],
        listPosition: 0,
    },
    {
        id: 'eagle_key',
        category: 'extended',
        counter: null,
        list: ['eagle_key'],
        commands: ['eaglekey', 'key5'],
        listPosition: 0,
    },
    {
        id: 'piece_of_heart',
        category: 'super-extended',
        counter: 12,
        list: ['piece_of_heart'],
        commands: ['hp', 'heartpiece', 'pieceofheart', 'pizzaheart', 'heart'],
        listPosition: 0,
        currentCounter: 0,
    },
    {
        id: 'marin',
        category: 'super-extended',
        counter: null,
        list: ['marin'],
        commands: ['marin', 'balladofthewindfish', 'botwf', 'windfishsong'],
        listPosition: 0,
    },
    {
        id: 'manbo',
        category: 'super-extended',
        counter: null,
        list: ['manbo'],
        commands: ['manbo', 'manbosmambo', 'basssong', 'bestsong'],
        listPosition: 0,
    },
    {
        id: 'mamu',
        category: 'super-extended',
        counter: null,
        list: ['mamu'],
        commands: ['mamu', 'songofsoul', 'frogsong', 'worstsong'],
        listPosition: 0,
    },
    {
        id: 'bowwow',
        category: 'super-extended',
        counter: null,
        list: ['bowwow'],
        commands: ['bowwow', 'dog', 'cheesedog'],
        listPosition: 0,
    },
    {
        id: 'walrus',
        category: 'super-extended',
        counter: null,
        list: ['walrus'],
        commands: ['walrus'],
        listPosition: 0,
    },
    {
        id: 'flying_cucco',
        category: 'super-extended',
        counter: null,
        list: ['flying_cucco'],
        commands: ['cucco', 'rooster', 'flyingcucco', 'spicychicken'],
        listPosition: 0,
    },
    {
        id: 'go_mode',
        category: 'super-extended',
        counter: null,
        list: ['go_mode'],
        commands: ['go', 'gomode'],
        listPosition: 0,
    },
    {
        id: 'rocs_feather',
        category: null,
        counter: null,
        list: ['rocs_feather'],
        commands: ['rocsfeather', 'feather', 'jumpyleaf'],
        listPosition: 0,
    },
    {
        id: 'power_bracelet',
        category: null,
        counter: null,
        list: ['power_bracelet', 'power_bracelet_l2'],
        commands: ['powerbracelet', 'bracelet', 'pb'],
        listPosition: 0,
    },
    {
        id: 'pegasus_boots',
        category: null,
        counter: null,
        list: ['pegasus_boots'],
        commands: ['pegasusboots', 'boots'],
        listPosition: 0,
    },
    {
        id: 'zoras_flippers',
        category: null,
        counter: null,
        list: ['zoras_flippers'],
        commands: ['zorasflippers', 'flippers', 'swimshoes'],
        listPosition: 0,
    },
    {
        id: 'hookshot',
        category: null,
        counter: null,
        list: ['hookshot'],
        commands: ['hookshot', 'ninjastar'],
        listPosition: 0,
    },
    // {
    //     id: 'power_bracelet_l2',
    //     category: null,
    //     counter: null,
    //     list: ['power_bracelet_l2'],
    //     commands: ['powerbracelet2', 'bracelet2', 'pb2'],
    //     listPosition: 0,
    // },
    // {
    //     id: 'mirror_shield',
    //     category: null,
    //     counter: null,
    //     list: ['shield_l2_original'],
    //     commands: ['mirrorshield', 'shield2'],
    //     listPosition: 0,
    // },
    {
        id: 'magic_rod',
        category: null,
        counter: null,
        list: ['magic_rod'],
        commands: ['magicrod', 'rod', 'wang'],
        listPosition: 0,
    },
    {
        id: 'ocarina',
        category: null,
        counter: null,
        list: ['ocarina'],
        commands: ['ocarina', 'flute', 'floot', 'doot', 'dootdoot'],
        listPosition: 0,
    },
    {
        id: 'boomerang',
        category: null,
        counter: null,
        list: ['boomerang'],
        commands: ['boomerang', 'rang', 'redmerang'],
        listPosition: 0,
    },
    {
        id: 'dungeon_1',
        category: 'dungeon',
        counter: null,
        list: ['dungeon_1'],
        commands: ['dungeon1', 'd1'],
        text: '1',
        listPosition: 0,
    },
    {
        id: 'dungeon_2',
        category: 'dungeon',
        counter: null,
        list: ['dungeon_2'],
        commands: ['dungeon2', 'd2'],
        text: '2',
        listPosition: 0,
    },
    {
        id: 'dungeon_3',
        category: 'dungeon',
        counter: null,
        list: ['dungeon_3'],
        commands: ['dungeon3', 'd3'],
        text: '3',
        listPosition: 0,
    },
    {
        id: 'dungeon_4',
        category: 'dungeon',
        counter: null,
        list: ['dungeon_4'],
        commands: ['dungeon4', 'd4'],
        text: '4',
        listPosition: 0,
    },
    {
        id: 'dungeon_5',
        category: 'dungeon',
        counter: null,
        list: ['dungeon_5'],
        commands: ['dungeon5', 'd5'],
        text: '5',
        listPosition: 0,
    },
    {
        id: 'dungeon_6',
        category: 'dungeon',
        counter: null,
        list: ['dungeon_6'],
        commands: ['dungeon6', 'd6'],
        text: '6',
        listPosition: 0,
    },
    {
        id: 'dungeon_7',
        category: 'dungeon',
        counter: null,
        list: ['dungeon_7'],
        commands: ['dungeon7', 'd7'],
        text: '7',
        listPosition: 0,
    },
    {
        id: 'dungeon_8',
        category: 'dungeon',
        counter: null,
        list: ['dungeon_8'],
        commands: ['dungeon8', 'd8'],
        text: '8',
        listPosition: 0,
    },
    {
        id: 'dungeon1-chests',
        category: 'chest',
        counter: 3,
        list: ['chest'],
        commands: ['dungeon1chest', 'd1chest', 'chestd1', 'chest-d1'],
        listPosition: 1,
        currentCounter: 3,
    },
    {
        id: 'dungeon2-chests',
        category: 'chest',
        counter: 3,
        list: ['chest'],
        commands: ['dungeon2chest', 'd2chest', 'chestd2', 'chest-d2'],
        listPosition: 1,
        currentCounter: 3,
    },
    {
        id: 'dungeon3-chests',
        category: 'chest',
        counter: 4,
        list: ['chest'],
        commands: ['dungeon3chest', 'd3chest', 'chestd3', 'chest-d3'],
        listPosition: 1,
        currentCounter: 4,
    },
    {
        id: 'dungeon4-chests',
        category: 'chest',
        counter: 4,
        list: ['chest'],
        commands: ['dungeon4chest', 'd4chest', 'chestd4', 'chest-d4'],
        listPosition: 1,
        currentCounter: 4,
    },
    {
        id: 'dungeon5-chests',
        category: 'chest',
        counter: 4,
        list: ['chest'],
        commands: ['dungeon5chest', 'd5chest', 'chestd5', 'chest-d5'],
        listPosition: 1,
        currentCounter: 4,
    },
    {
        id: 'dungeon6-chests',
        category: 'chest',
        counter: 6,
        list: ['chest'],
        commands: ['dungeon6chest', 'd6chest', 'chestd6', 'chest-d6'],
        listPosition: 1,
        currentCounter: 6,
    },
    {
        id: 'dungeon7-chests',
        category: 'chest',
        counter: 4,
        list: ['chest'],
        commands: ['dungeon7chest', 'd7chest', 'chestd7', 'chest-d7'],
        listPosition: 1,
        currentCounter: 4,
    },
    {
        id: 'dungeon8-chests',
        category: 'chest',
        counter: 6,
        list: ['chest'],
        commands: ['dungeon8chest', 'd8chest', 'chestd8', 'chest-d8'],
        listPosition: 1,
        currentCounter: 6,
    },
];
