import React from 'react';
import { Tag, User, Calendar } from 'lucide-react';
import { Recipe } from '../types/Recipe';
import { categoryLabels } from '../utils/categories';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick(recipe)}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{recipe.title}</h3>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {categoryLabels[recipe.category]}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{recipe.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {recipe.tags.map((tag) => (
          <span 
            key={tag}
            className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
          >
            <Tag size={14} />
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <User size={16} />
          {recipe.author}
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          {new Date(recipe.createdAt).toLocaleDateString('pt-BR')}
        </div>
      </div>
    </div>
  );
}