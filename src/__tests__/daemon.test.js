import Daemon from "../js/class/daemon.js";

describe('Daemon', () => {
    let daemon;
  
    beforeEach(() => {
        daemon = new Daemon('emon', 'Daemon');
    });

    test('Test object properties Daemon', () => {
        const correct = {
          name: 'emon',
          type: 'Daemon',
          health: 100,
          level: 1,
          attack: 100,
          defence: 40,
          isStoned: false,
          spacing: 1,
        }
        expect(daemon).toEqual(correct);
      });

      test('Test attacking from a distance', () => {
        const correct = {
            name: 'emon',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 90,
            defence: 40,
            isStoned: false,
            spacing: 2,
        }
        daemon.distance(2)
        expect(daemon).toEqual(correct);
      });

      test('Test conducting an attack from a distance and with a dope applied', () => {
        const correct = {
            name: 'emon',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 48,
            defence: 40,
            isStoned: true,
            spacing: 5,
        }
        daemon.distance(6)
        daemon.stoned(true)
        expect(daemon).toEqual(correct);
      });

      test('Test conducting an attack from a distance and with a dope applied and withdrawal', () => {
        const correct = {
            name: 'emon',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 60,
            defence: 40,
            isStoned: false,
            spacing: 5,
        }
        daemon.distance(6)
        daemon.stoned(true)
        daemon.stoned(false)
        expect(daemon).toEqual(correct);
      });

  });