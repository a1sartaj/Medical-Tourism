export interface RichTextMark {
    type: "bold" | "italic" | "strike" | "code" | "link" | string;
    attrs?: Record<string, unknown>;
}

export interface RichTextNode {
    type:
    | "doc"
    | "paragraph"
    | "heading"
    | "bulletList"
    | "orderedList"
    | "listItem"
    | "blockquote"
    | "image"
    | "horizontalRule"
    | "text"
    | string;
    attrs?: Record<string, unknown>;
    text?: string;
    marks?: RichTextMark[];
    content?: RichTextNode[];
}

export interface RichTextDocument {
    type?: string;
    content?: RichTextNode[];
}