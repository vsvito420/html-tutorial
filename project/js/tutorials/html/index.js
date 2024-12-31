// Combine all HTML tutorial modules
import { basicElements } from './basic-elements.js';
import { textFormatting } from './text-formatting.js';
import { lists } from './lists.js';
import { links } from './links.js';
import { images } from './images.js';
import { forms } from './forms.js';
import { tables } from './tables.js';
import { semantic } from './semantic.js';
import { media } from './media.js';
import { meta } from './meta.js';

export const htmlTutorial = {
  title: "HTML Grundlagen",
  modules: [
    basicElements,
    textFormatting,
    lists,
    links,
    images,
    forms,
    tables,
    semantic,
    media,
    meta
  ]
};