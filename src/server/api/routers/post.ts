import { z } from "zod";
import { sendEmail } from "~/app/workflows/send-email";
import { start } from "workflow/api";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { posts } from "~/server/db/schema";
export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      await start(sendEmail, ["aecio@example.com", "Welcome!", input.text]);

      return {};
    }),
});
