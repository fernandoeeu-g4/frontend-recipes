import { BookOpen, Search } from "lucide-react";
import { useState } from "react";
import { Monitoring } from "react-scan/monitoring";
import { RecipeCard } from "./components/RecipeCard";
import { RecipeDetail } from "./components/RecipeDetail";
import { recipes } from "./data/recipes";
import { Recipe, RecipeCategory } from "./types/Recipe";
import { categoryLabels } from "./utils/categories";

function Container() {
  const pathname = window.location.pathname;
  return (
    <>
      <Monitoring
        apiKey="Ur3f8KiqJH28d6oFzPpyVZ_eoLGHiojx" // Safe to expose publically
        url="https://monitoring.react-scan.com/api/v1/ingest"
        commit={import.meta.env.REACT_APP_VERCEL_GIT_COMMIT_SHA} // optional but recommended
        branch={import.meta.env.REACT_APP_VERCEL_GIT_COMMIT_REF} // optional but recommended
        path={pathname}
      />
      <App />
    </>
  );
}

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<RecipeCategory | null>(null);

  const categories = Object.keys(categoryLabels) as RecipeCategory[];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      !selectedCategory || recipe.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <BookOpen className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">
              Receitas Frontend
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Buscar receitas..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-lg text-sm ${
                !selectedCategory
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm ${
                  selectedCategory === category
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={setSelectedRecipe}
            />
          ))}
        </div>

        {/* Recipe Detail Modal */}
        {selectedRecipe && (
          <RecipeDetail
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        )}
      </main>
    </div>
  );
}

export default Container;
