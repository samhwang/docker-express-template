import supertest from 'supertest';
import type { Server } from 'http';
import server from '.';

function getServerAndEndpoint() {
  const testServer = server.listen();
  const request = supertest(testServer);
  return { testServer, request };
}

function shutdownServer(testServer: Server) {
  testServer.close();
}

export { getServerAndEndpoint, shutdownServer };
