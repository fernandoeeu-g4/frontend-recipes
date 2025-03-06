export type RecipeCategory =
  | "styling"
  | "icons"
  | "animations"
  | "components"
  | "dates"
  | "forms"
  | "validation"
  | "client-state"
  | "server-state"
  | "async"
  | "cookies"
  | "feature-flags"
  | "complex-features"
  | "utils"
  | "performance"
  | "external-services"
  | "data-fetching";

export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: RecipeCategory;
  code: string;
  preview?: string;
  tags: string[];
  author: string;
  createdAt: string;
}
