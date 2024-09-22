import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number().default(4321),
    TOKEN: z.string({ message: "Requires a TOKEN secret" }),
});

export const env = envSchema.parse(process.env);
