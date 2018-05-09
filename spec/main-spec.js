const main = require('../main/main');

describe('main()', () => {
    it('should generate string when 用户猜对', function () {
        let inputs = '1234';
        let result = main(inputs);
        let expected = '4A0B';
        expect(result).toEqual(expected);
    });
    it('should generate string when 用户猜错', function () {
        let inputs = '4321';
        let result = main(inputs);
        let expected = '0A4B';
        expect(result).toEqual(expected);
    });

});