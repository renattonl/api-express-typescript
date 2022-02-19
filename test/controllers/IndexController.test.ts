import request from 'supertest';
import { app } from '../../src/app';

describe('Test IndexController', () => {
  it('Request / ', async () => {
    const result = await request(app).get('/').send();
    expect(result.status).toBe(200);
    expect(result.body.data).toBe('Hello!');
  });
});
