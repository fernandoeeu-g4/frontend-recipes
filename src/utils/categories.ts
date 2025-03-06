import { RecipeCategory } from "../types/Recipe";

export const categoryLabels: Record<RecipeCategory, string> = {
  styling: "Estilização",
  icons: "Ícones",
  animations: "Animações",
  components: "Componentes",
  dates: "Datas",
  forms: "Formulários",
  validation: "Validação",
  "client-state": "Estado Client-side",
  "server-state": "Estado Server-side",
  async: "Requisições Async",
  cookies: "Cookies",
  "feature-flags": "Feature Flags",
  "complex-features": "Funcionalidades Complexas",
  utils: "Utilidades",
  performance: "Performance",
  "external-services": "Serviços Externos",
  "data-fetching": "Fetching de Dados",
};
