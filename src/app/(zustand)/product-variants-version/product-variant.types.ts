import { z } from "zod";

// Define variant schema with color and size
export const VariantSchema = z.object({
    id: z.string().optional(),
    color: z.string().min(1, "Color is required"),
    size: z.string().min(1, "Size is required"),    
});

// Define product schema which must include at least one variant
export const ProductSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, "Product name is required"),
    variants: z.array(VariantSchema).nonempty("Product must have at least one variant"),
});

export type Product = z.infer<typeof ProductSchema>;
export type Variant = z.infer<typeof VariantSchema>;
