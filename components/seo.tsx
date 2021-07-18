import { NextSeo } from "next-seo";

export default function Seo({ description }: { description: string }) {
  return (
    <NextSeo
      title="Task Checklist"
      description={description}
      // canonical={pageUrl}
      openGraph={{
        // url: pageUrl,
        title: "Task Checklist",
        description: description,
        // images: [pageImage],
        site_name: "Task Checklist",
      }}
      twitter={{
        // handle: twitter,
        site: "Task Checklist",
        // cardType: "summary_large_image",
      }}
      // noindex={disallowRobot}
      // nofollow={disallowRobot}
    />
  );
}
