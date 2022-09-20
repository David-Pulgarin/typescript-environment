import greeter from '../src/greeter';

describe('greeter', () => {
    it('Should greet', () => {
        const logSpy = jest.spyOn(console, 'log');
        greeter();
        expect(logSpy).toHaveBeenLastCalledWith('Hello there, this is a ready to use TypeScript environment');
    });
});
