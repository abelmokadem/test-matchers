import matchers from './index';

describe('index', () => {
   it('should contain jasmine matchers', () => {
       expect(typeof matchers.jasmine).toBe('object');
   });
});
