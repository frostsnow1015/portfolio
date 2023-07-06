// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
import readingTime from "reading-time";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
var ReadTime = defineNestedType(() => ({
  name: "ReadTime",
  fields: {
    text: { type: "string", required: true },
    minutes: { type: "number", required: true },
    time: { type: "number", required: true },
    words: { type: "number", required: true }
  }
}));
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "posts/*.md",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    cover: { type: "string", required: true },
    thumbnail: { type: "string" },
    description: { type: "string" },
    legacyID: { type: "string" },
    published: { type: "boolean", required: true },
    tags: { type: "list", of: { type: "string" } },
    readTime: {
      type: "nested",
      of: ReadTime
    },
    cover_image: { type: "string" }
  },
  computedFields: {
    readTime: {
      type: "nested",
      of: ReadTime,
      resolve: (post) => readingTime(post.body.raw)
    },
    id: {
      type: "string",
      // eslint-disable-next-line no-underscore-dangle
      resolve: (post) => post._raw.sourceFileName.replace(/\.md$|\.mdx$/, "")
    }
  }
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/*.md",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    published: { type: "boolean" },
    /** will be shown at home */
    highlight: { type: "boolean" },
    /** shown at project list frontpage */
    featured: { type: "boolean" },
    sznmApps: { type: "boolean" },
    stacks: { type: "list", of: { type: "string" } },
    date: { type: "string" },
    projectLink: { type: "string" },
    repoLink: { type: "string" },
    appStoreLink: { type: "string" },
    playStoreLink: { type: "string" },
    icon: { type: "string" },
    thumbnail: { type: "string" },
    thumbnailDark: { type: "string" },
    projectType: { type: "string" }
  },
  computedFields: {
    id: {
      type: "string",
      // eslint-disable-next-line no-underscore-dangle
      resolve: (post) => post._raw.sourceFileName.replace(/\.md$|\.mdx$/, "")
    }
  }
}));
var Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: "snippets/*.md",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    published: { type: "boolean" },
    date: { type: "string" },
    stacks: { type: "list", of: { type: "string" } }
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (snippet) => (
        // eslint-disable-next-line no-underscore-dangle
        snippet._raw.sourceFileName.replace(/\.md$|\.mdx$/, "")
      )
    }
  }
}));
var contentLayerConfig = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Project, Snippet],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeRaw]
  }
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-XIP6PIUS.mjs.map
