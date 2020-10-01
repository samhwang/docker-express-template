import { getServerAndEndpoint, shutdownServer } from '../Server/testServer';

describe('Error endpoint', () => {
  const { testServer, request } = getServerAndEndpoint();

  afterAll(() => {
    shutdownServer(testServer);
  });

  it('Should return a 404 response', async () => {
    const response = await request.get('/aaaaaa');
    expect(response.status).toEqual(404);
  });
});
