import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { z } from 'zod';
import cors from 'cors';

const CORS_URL="http://localhost:5173";

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = Awaited<ReturnType<typeof createContext>>;
const t = initTRPC.context<Context>().create();

const appRouter = t.router({
  getList: t.procedure.input(z.string().optional()).query((opts) => { return ['this', 'list'] }),
  getUser: t.procedure.input(z.string()).query((opts) => {
    opts.input; // string
    return { id: opts.input, name: 'Bilbo' };
  }),
  createUser: t.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (opts) => {
      /* use your ORM of choice
      return await UserModel.create({
        data: opts.input,
      });
      */
      return {};
    }),
});
// export the type for the FE
export type AppRouter = typeof appRouter;


// set up the /trpc endpoints, so we'll have /trpc/getUser as url
const app = express();

// Set up CORS properly
app.use(cors({
  origin: CORS_URL, // Allow Vite dev server
  credentials: true, // optional: if you're sending cookies or auth headers
}));

// Explicitly handle OPTIONS preflight requests
app.options('*', cors({
  origin: CORS_URL,
  credentials: true,
}));

app.options('*', (req, res, next) => {
  console.log('Received preflight OPTIONS request');
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
