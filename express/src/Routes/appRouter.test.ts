import { getServerAndEndpoint, shutdownServer } from '../Server/testServer';

describe('App endpoint', () => {
  const { testServer, request } = getServerAndEndpoint();

  afterAll(() => {
    shutdownServer(testServer);
  });

  it('Should return hello world', async () => {
    const result = await request.get('/');
    expect(result.text).toEqual('Hello World!');
    expect(result.status).toEqual(200);
  });
});
