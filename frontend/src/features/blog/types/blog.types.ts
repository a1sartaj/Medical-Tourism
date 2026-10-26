import type { RichTextDocument } from "@/features/editor/types/richText.types";

export interface BlogPostAuthor {
    name: string;
    role: string;
    bio?: string;
    avatar?: string;
}

export interface BlogPostReviewer {
    name: string;
    credentials: string;
    designation?: string;
    councilRegistration?: string;
}

export interface BlogPostItem {
    id: string; // ya _id MongoDB ke mutabiq
    title: string;
    slug: string;
    excerpt: string;
    category:
    | "Treatment Guides"
    | "Medical Travel Guides"
    | "Hospital & Doctor Info"
    | "Treatment Cost Guides"
    | "International Patient Services"
    | "Recovery & Preparation";
    imageUrl: string;
    imageCaption?: string;
    publishedDate: string;
    readTime: string;
    author: BlogPostAuthor;
    medicalReviewer?: BlogPostReviewer;
    content: RichTextDocument; // <-- Source of truth shared with editor
    relatedSlugs: string[];
}