// /components/about/types.ts

export interface AboutContent {
  hero: {
    title: string;
  };
  identity: {
    title: string;
    description: string;
  };
  process: {
    steps: string[];
  };
  proof: {
    statement: string;
  };
}
