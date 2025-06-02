import type { Tag } from "./Tag";
import type { WorkImage } from "./WorkImage";

export interface Work {
  title: string;
  description: string;
  thumbnailImgUrl: string;
  imagesUrl?: WorkImage[]
  link?: string;
  sourceCodeUrl?: string;
  tags?: Tag[];
  company?: string
  detailDescription?: string
  mainResponsibility?: string[]
}

