import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number().default(4321),
});

export const env = envSchema.parse(process.env);
