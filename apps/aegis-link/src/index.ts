import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('LumeSpace: AegisLink Orbital Simulator 🛰️');
});

export default app;
