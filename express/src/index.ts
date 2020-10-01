import './Util/dotenv';
import server from './Server';

const port = 80;

const app = server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
