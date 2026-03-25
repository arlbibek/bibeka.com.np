import { z } from "zod";

export const expirationModeSchema = z.enum(["views", "time"]);

export const createMessageSchema = z
  .object({
    custom_slug: z
      .string()
      .trim()
      .optional()
      .or(z.literal("")),
    content: z.string().trim().min(1, "Message is required").max(5000),
    is_blurred: z.boolean().default(false),
    caution_text: z
      .string()
      .trim()
      .max(240, "Caution text is too long")
      .optional()
      .or(z.literal("")),
    expiration_mode: expirationModeSchema,
    max_views: z.coerce.number().int().min(1).max(50).optional(),
    expires_in: z.enum(["1h", "2h", "6h", "12h", "1d", "2d", "7d"]).optional(),
    author_wants_status: z.boolean().default(false),
  })
  .superRefine((val, ctx) => {
    const slug = val.custom_slug?.trim();
    if (slug) {
      const parsedSlug = slugSchema.safeParse(slug);
      if (!parsedSlug.success) {
        ctx.addIssue({
          code: "custom",
          path: ["custom_slug"],
          message: "Slug must be 6–16 chars, lowercase letters/numbers, - or _",
        });
      } else if (reservedSlugs.has(slug)) {
        ctx.addIssue({
          code: "custom",
          path: ["custom_slug"],
          message: "This slug is reserved",
        });
      }
    }

    if (val.is_blurred && (!val.caution_text || val.caution_text.trim() === "")) {
      ctx.addIssue({
        code: "custom",
        path: ["caution_text"],
        message: "Caution text is required when blur is enabled",
      });
    }

    if (val.expiration_mode === "views") {
      if (!val.max_views) {
        ctx.addIssue({
          code: "custom",
          path: ["max_views"],
          message: "Choose a view limit",
        });
      }
    } else {
      if (!val.expires_in) {
        ctx.addIssue({
          code: "custom",
          path: ["expires_in"],
          message: "Choose a time limit",
        });
      }
    }
  });

export type CreateMessageInput = z.infer<typeof createMessageSchema>;

export const slugSchema = z
  .string()
  .trim()
  .min(6)
  .max(16)
  .regex(/^[a-z0-9_-]+$/);

const reservedSlugs = new Set(["create"]);

export const readerIntentSchema = z.enum(["read", "destroy"]);

export const readerActionSchema = z.object({
  slug: slugSchema,
  intent: readerIntentSchema,
});

export type ReaderActionInput = z.infer<typeof readerActionSchema>;

