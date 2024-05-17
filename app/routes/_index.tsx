import type { MetaFunction } from "@remix-run/cloudflare";

import Link from "@/components/element/Link";

export const meta: MetaFunction = () => {
  return [
    { title: "Resas View" },
    {
      content:
        "A simple web app to view population data in Japan, powered by RESAS API.",
      name: "description",
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix (with Vite and Cloudflare)</h1>
      <ul>
        <li>
          <a
            href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
            rel="noreferrer"
            target="_blank"
          >
            Cloudflare Pages Docs - Remix guide
          </a>
        </li>
        <li>
          <Link to="https://remix.run/docs">Remix Docs</Link>
        </li>
        <li>hogehoge hugahuga</li>
      </ul>
    </div>
  );
}
