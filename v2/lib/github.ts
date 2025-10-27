const GITHUB_GRAPHQL = "https://api.github.com/graphql";

if (!process.env.GITHUB_TOKEN) {
  throw new Error("GITHUB_TOKEN missing in .env");
}

export type PinnedRepo = {
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: { name: string; color: string | null } | null;
  topics: string[];
  /** UI'da kullandığın alan: */
  openGraphImageUrl: string | null;
  updatedAt: string;
};

export async function fetchPinnedRepos(username = "AbdullahVC", first = 6): Promise<PinnedRepo[]> {
  const query = `
    query ($login:String!, $first:Int!) {
      user(login:$login) {
        pinnedItems(first:$first, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              homepageUrl
              stargazerCount
              forkCount
              primaryLanguage { name color }
              repositoryTopics(first: 20) { nodes { topic { name } } }
              openGraphImageUrl
              updatedAt
            }
          }
        }
      }
    }
  `;

  const res = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    next: { revalidate: 3600 },
    body: JSON.stringify({ query, variables: { login: username, first } }),
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(`GitHub GraphQL error: ${res.status} ${t}`);
  }

  const json = await res.json();
  const nodes = json?.data?.user?.pinnedItems?.nodes ?? [];

  return nodes.map((n: any) => ({
    name: n.name,
    description: n.description,
    url: n.url,
    homepageUrl: n.homepageUrl,
    stargazerCount: n.stargazerCount,
    forkCount: n.forkCount,
    primaryLanguage: n.primaryLanguage
      ? { name: n.primaryLanguage.name, color: n.primaryLanguage.color }
      : null,
    topics: (n.repositoryTopics?.nodes ?? []).map((x: any) => x.topic?.name).filter(Boolean),
    openGraphImageUrl: n.openGraphImageUrl ?? null, // ← EKLENDİ
    updatedAt: n.updatedAt,
  })) as PinnedRepo[];
}
