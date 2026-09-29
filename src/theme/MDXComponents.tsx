/**
 * MDXComponents swizzlé (wrap) — expose les composants interactifs globalement.
 *
 * Les pages .mdx peuvent utiliser <Quiz /> et <FillInBlank /> sans import.
 * Les composants par défaut de Docusaurus sont préservés.
 */
import MDXComponents from '@theme-original/MDXComponents';
import Quiz from '@site/src/components/Exercises/Quiz';
import FillInBlank from '@site/src/components/Exercises/FillInBlank';

export default {
  ...MDXComponents,
  Quiz,
  FillInBlank,
};
