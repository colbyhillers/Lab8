const formatVolumeIconPath = require("../assets/scripts/main")

describe('volume icon', () => {
    test('vol above 66', () => {
        expect(formatVolumeIconPath(67)).toContain('3');
    });

    test('vol above 33', () => {
        expect(formatVolumeIconPath(34)).toContain('2');
    });

    test('vol above 0', () => {
        expect(formatVolumeIconPath(33)).toContain('1');
    });

    test('vol 0', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });

});