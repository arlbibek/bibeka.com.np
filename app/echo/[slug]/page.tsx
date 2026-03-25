import type { Metadata } from "next";
import { fetchEchoMessagePublic } from "../../../lib/echo/actions";
import EchoReaderClient from "./EchoReaderClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `echo/${slug} | Bibek Aryal`,
    description: "Anonymous burn-after-reading message.",
  };
}

export default async function EchoReaderPage({ params }: Props) {
  const { slug } = await params;
  const data = await fetchEchoMessagePublic(slug);

  if (!data.ok) {
    return (
      <EchoReaderClient
        slug={slug}
        is_blurred={false}
        caution_text={null}
        unavailableReason="This echo link is invalid or expired."
      />
    );
  }

  const unavailableReason =
    data.expired || data.status !== "active"
      ? "This message has expired or has already been destroyed."
      : null;

  return (
    <EchoReaderClient
      slug={data.slug}
      is_blurred={data.is_blurred}
      caution_text={data.caution_text}
      unavailableReason={unavailableReason}
    />
  );
}

