import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { RichTextDocument, RichTextNode } from "../types/richText.types";

interface RichTextRendererProps {
    data?: RichTextDocument | null;
    className?: string;
}

function renderTextWithMarks(node: RichTextNode, keyPrefix: string): React.ReactNode {
    if (!node.text) return null;
    let textNode: React.ReactNode = node.text;

    if (node.marks && node.marks.length > 0) {
        node.marks.forEach((mark, mIdx) => {
            const markKey = `${keyPrefix}-m${mIdx}`;
            switch (mark.type) {
                case "bold":
                    textNode = (
                        <strong key={markKey} className="font-bold text-slate-900">
                            {textNode}
                        </strong>
                    );
                    break;
                case "italic":
                    textNode = (
                        <em key={markKey} className="italic text-slate-800">
                            {textNode}
                        </em>
                    );
                    break;
                case "strike":
                    textNode = (
                        <s key={markKey} className="line-through text-slate-400">
                            {textNode}
                        </s>
                    );
                    break;
                case "code":
                    textNode = (
                        <code
                            key={markKey}
                            className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-xs text-blue-600 border border-slate-200"
                        >
                            {textNode}
                        </code>
                    );
                    break;
                case "link": {
                    const href = (mark.attrs?.href as string) || "#";
                    const isExternal = href.startsWith("http");
                    textNode = isExternal ? (
                        <a
                            key={markKey}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline font-semibold transition"
                        >
                            {textNode}
                        </a>
                    ) : (
                        <Link
                            key={markKey}
                            href={href}
                            className="text-blue-600 hover:text-blue-800 underline font-semibold transition"
                        >
                            {textNode}
                        </Link>
                    );
                    break;
                }
            }
        });
    }

    return textNode;
}

function renderNode(node: RichTextNode, index: number): React.ReactNode {
    const nodeKey = `node-${index}`;

    if (node.type === "text") {
        return renderTextWithMarks(node, nodeKey);
    }

    const renderedChildren = node.content?.map((child, cIdx) =>
        renderNode(child, cIdx)
    );

    switch (node.type) {
        case "doc":
            return <div key={nodeKey}>{renderedChildren}</div>;

        case "paragraph":
            return (
                <p key={nodeKey} className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                    {renderedChildren}
                </p>
            );

        case "heading": {
            const level = (node.attrs?.level as number) || 2;
            const headingId = (node.attrs?.id as string) || undefined;

            if (level === 1) {
                return (
                    <h1
                        key={nodeKey}
                        id={headingId}
                        className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight pt-5 pb-2 scroll-mt-28"
                    >
                        {renderedChildren}
                    </h1>
                );
            }
            if (level === 2) {
                return (
                    <h2
                        key={nodeKey}
                        id={headingId}
                        className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight pt-4 pb-2 scroll-mt-28"
                    >
                        {renderedChildren}
                    </h2>
                );
            }
            return (
                <h3
                    key={nodeKey}
                    id={headingId}
                    className="text-base sm:text-lg font-bold text-slate-900 pt-3 pb-1 scroll-mt-28"
                >
                    {renderedChildren}
                </h3>
            );
        }

        case "bulletList":
            return (
                <ul key={nodeKey} className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-600 mb-4">
                    {renderedChildren}
                </ul>
            );

        case "orderedList":
            return (
                <ol key={nodeKey} className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-slate-600 mb-4">
                    {renderedChildren}
                </ol>
            );

        case "listItem":
            return (
                <li key={nodeKey} className="leading-relaxed">
                    {renderedChildren}
                </li>
            );

        case "blockquote":
            return (
                <blockquote
                    key={nodeKey}
                    className="p-4 sm:p-5 my-5 bg-blue-50/60 border-l-4 border-blue-600 rounded-r-2xl italic text-slate-800 text-sm sm:text-base leading-relaxed"
                >
                    {renderedChildren}
                </blockquote>
            );

        case "image": {
            const src = (node.attrs?.src as string) || "";
            const alt = (node.attrs?.alt as string) || "Editorial visual";
            const caption = (node.attrs?.title as string) || "";
            if (!src) return null;

            return (
                <figure key={nodeKey} className="my-6 space-y-2">
                    <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-cover"
                        />
                    </div>
                    {caption && (
                        <figcaption className="text-center text-xs text-slate-500 italic">
                            {caption}
                        </figcaption>
                    )}
                </figure>
            );
        }

        case "horizontalRule":
            return <hr key={nodeKey} className="my-6 border-slate-200" />;

        default:
            return <div key={nodeKey}>{renderedChildren}</div>;
    }
}

export default function RichTextRenderer({
    data,
    className = "",
}: RichTextRendererProps) {
    if (!data || !data.content || data.content.length === 0) return null;

    return (
        <div className={`space-y-2 text-slate-700 ${className}`}>
            {data.content.map((child, idx) => renderNode(child, idx))}
        </div>
    );
}