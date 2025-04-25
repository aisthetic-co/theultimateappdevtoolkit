import { z } from "zod";

// Body Schema
const helloBodySchema = z.object({
  name: z.string().optional(),
});

// Say Hello
const sayHelloSchema = z.object({
  body: helloBodySchema,
});

export default {
  sayHelloSchema,
};
