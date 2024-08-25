import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    APP_ENV: z.enum(["development", "production", "test"]),
    ...(process.env.APP_ENV === "production" && {
      CRON_SECRET: z.string().min(1),
    }),
  },
  experimental__runtimeEnv: {},
});
