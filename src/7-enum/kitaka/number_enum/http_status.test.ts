import getStatusCode from './http_status';

test("getStatusCode", () => {
  expect(getStatusCode('OK')).toEqual(200);
});
