/**
 * Définition Prism pour le langage algo-papier (BetterAlgoPapier).
 * Port de syntaxes/algo-papier.tmLanguage.json de l'extension VSCode.
 * Utilisée via src/theme/prism-include-languages.js
 *
 * Usage Markdown : ```algo
 */
module.exports = function registerAlgoPapier(Prism) {
  Prism.languages.algo = {
    comment: [
      {
        pattern: /(^|[^:]|^\/\/.*)\/\/.*$/m,
        lookbehind: true,
        greedy: true,
      },
      {
        pattern: /\/\*[\s\S]*?\*\//,
        greedy: true,
      },
    ],
    string: [
      {
        pattern: /"(?:\\.|[^"\\\r\n])*"/,
        greedy: true,
      },
      {
        pattern: /'(?:\\.|[^'\\\r\n])*'/,
        greedy: true,
      },
    ],
    keyword: {
      pattern:
        /\b(?:si|sinon_si|sinon|fsi|procedure|fonction|algorithme|tant_que|pour|renvoie|jusqua|repeter|sortie|continue|choix_sur|fchoix|cas|autre|entre|variant_de|a|NON|boucle|fboucle|declarer|vaut|ne_vaut_pas|OU_SINON|ET_ALORS|OU|ET)\b/,
    },
    modifier: {
      pattern: /\b(?:debut|fin|faire|ffaire)\b/,
      alias: 'storage',
    },
    type: {
      pattern:
        /\b(?:caractere|string|tableau_de|booleen|entier_naturel|entier|reel)\b/,
      alias: 'class-name',
    },
    boolean: {
      pattern: /\b(?:vrai|faux)\b/,
      alias: 'constant',
    },
    function: {
      pattern:
        /\b(?:afficher|saisir|ligne_suivante|taille|redimensionner|modulo|rand|rang|succ|prec|toupper|tolower|isdigit|isalpha|isalnum|isspace|ispunct|isupper|islower)\b/,
    },
    parameter: {
      pattern: /\b(?:in_out|in|out)\b/,
      alias: 'variable',
    },
    number: {
      pattern: /\b\d+(?:\.\d+)?\b/,
      alias: 'constant',
    },
    operator: {
      pattern: /<-|==|!=|<=|>=|<|>|=|\+|-|\*|\/|%/,
    },
    punctuation: /[();:,]/,
  };

  // Alias : ```algo-papier fonctionne aussi
  Prism.languages['algo-papier'] = Prism.languages.algo;
};
