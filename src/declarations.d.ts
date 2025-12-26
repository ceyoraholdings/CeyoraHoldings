declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}