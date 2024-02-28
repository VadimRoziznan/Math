import Magician from "../js/class/magician.js";

describe('Magician', () => {
    let magician;
  
    beforeEach(() => {
        magician = new Magician('Gendalf', 'Magician');
    });

    test('Test object properties Magician', () => {
        const correct = {
          name: 'Gendalf',
          type: 'Magician',
          health: 100,
          level: 1,
          attack: 100,
          defence: 40,
          isStoned: false,
          spacing: 1,
        }
        expect(magician).toEqual(correct);
      });

      test('Test attacking from a distance', () => {
        const correct = {
          name: 'Gendalf',
          type: 'Magician',
          health: 100,
          level: 1,
          attack: 90,
          defence: 40,
          isStoned: false,
          spacing: 2,
        }
        magician.distance(2)
        expect(magician).toEqual(correct);
      });

      test('Test conducting an attack from a distance and with a dope applied', () => {
        const correct = {
            name: 'Gendalf',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 48,
            defence: 40,
            isStoned: true,
            spacing: 5,
        }
        magician.distance(6)
        magician.stoned(true)
        expect(magician).toEqual(correct);
      });

      test('Test conducting an attack from a distance and with a dope applied and withdrawal', () => {
        const correct = {
            name: 'Gendalf',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 60,
            defence: 40,
            isStoned: false,
            spacing: 5,
        }
        magician.distance(6)
        magician.stoned(true)
        magician.stoned(false)
        expect(magician).toEqual(correct);
      });

  });