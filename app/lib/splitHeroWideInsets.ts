/**
 * Split heroes (copy left, media right): on wide viewports, progressively inset both
 * sides so text and video move toward each other. Applied from `lg` up only.
 */
export const SPLIT_HERO_COPY_ML =
  "lg:ml-4 xl:ml-10 2xl:ml-16 min-[1600px]:ml-24 min-[1920px]:ml-32 min-[2200px]:ml-40";

export const SPLIT_HERO_MEDIA_MR =
  "lg:mr-4 xl:mr-10 2xl:mr-16 min-[1600px]:mr-24 min-[1920px]:mr-32 min-[2200px]:mr-40";

/** Below `lg`: stack badge → title → CTAs above the hero image (desktop split unchanged). */
export const SPLIT_HERO_MOBILE_STACK = "max-lg:flex max-lg:flex-col";

export const SPLIT_HERO_MOBILE_COPY_ORDER = "max-lg:order-1";

export const SPLIT_HERO_MOBILE_MEDIA_ORDER = "max-lg:order-2";
