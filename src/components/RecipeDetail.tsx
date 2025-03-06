import React from "react";
import { X, Copy, Check } from "lucide-react";
import { Recipe } from "../types/Recipe";
import { useState } from "react";
import { SyntaxHighlighterComponent } from "./syntax-highlitghter";

interface RecipeDetailProps {
  recipe: Recipe;
  onClose: () => void;
}

export function RecipeDetail({ recipe, onClose }: RecipeDetailProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(recipe.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            {recipe.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-6">{recipe.description}</p>

          <div className="relative">
            <div className="absolute right-4 top-4">
              <button
                onClick={copyCode}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copiado!" : "Copiar código"}
              </button>
            </div>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
              <code>{recipe.code}</code>
            </pre>
          </div>

          {recipe.preview && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Preview</h3>
              <div className="border rounded-lg p-4">
                <SyntaxHighlighterComponent code={recipe.preview} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
