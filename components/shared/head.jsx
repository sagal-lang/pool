import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { BASE_URI } from "../constants";

export default function View() {
  const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter } = useConfig();
  const url =
    BASE_URI + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={frontMatter.title || "Sagal"} />
      <meta property="og:url" content={url} />
      <meta
        property="og:description"
        content={
          frontMatter.description ||
          "The grammar of code: a framework for semantics-driven programming"
        }
      />
    </>
  );
}
