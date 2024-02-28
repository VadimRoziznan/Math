import Character from "../js/class/character.js";


describe('Character', () => {
    let character;

    beforeEach(() => {
        character = new Character('Alice', 'Daemon');
    });

    test('Object properties Character', () => {
        const correct = {
        name: 'Alice',
        type: 'Daemon',
        health: 100,
        isStoned: false,
        level: 1,
        attack: null,
        defence: null,
        spacing: 1,
        }
        expect(character).toEqual(correct);
    });

    test('should throw an error when the name is not correct', () => {
        expect(() => {
        new Character(0, 'Daemon');
        }).toThrow('Предупреждение имя должно быть в формате текста и содержать не менее 2 символов и не более 10.');
    });

    test('should throw an error when the type is not valid', () => {
        expect(() => {
        new Character('Daemon', 'Daemon!!!!!!!!!!!!1');
        }).toThrow('Не верный тип');
    });
});