const { averageExams, isStudentPassExam } = require('../gradeCalculations');

describe('grade calculations', () => {
    test('it should return exact average', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });

    test('it should handle non-number ', () => {
        const listValueOfExams = [80, 'a', '100', 80];
        expect(() => averageExams(listValueOfExams)).toThrow();
        // expect(() => averageExams(listValueOfExams)).toThrow(Error);
        // expect(() => averageExams(listValueOfExams)).toThrow('please input number');
    });

    /**
     * Integration testing
     * 
     * Integration test dapat dijalankan ataupun ditulis bersamaan dengan unit test. Sehingga kita dapat melakukan grouping dari contoh kode diatas menjadi sebagai berikut:
     */
    test('it should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
    });

    test('it should return exam failed status', () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, 'Dodo')).toEqual(false);
    });
});