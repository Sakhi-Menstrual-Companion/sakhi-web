/*
 * Where Sakhi can be downloaded, and whether it can be yet.
 *
 * The one place the site decides this. Every download button, the site-wide band, the
 * homepage, the download modal, the closing CTA and the Resources card all read from here,
 * so launch day is flipping one of the two flags below and redeploying. Nothing else.
 *
 * Both are false because neither listing is public. Checked on 2026-09-18: Apple's lookup
 * API returns zero results for id6742219623 in India and in the US, and Play returns 404 for
 * the app's package. Before this file existed the site had five separate copies of these
 * links, all live-looking, all going to a not-found page.
 */

export const appStoreLive = false;
export const playStoreLive = false;

export const appStoreUrl = "https://apps.apple.com/app/id6742219623";

// com.rachna.mysakhi is the Android package. The site used to link
// com.galgotiasuniversity.rachnasakhi, which is the iOS bundle id and not an Android app.
export const playStoreUrl = "https://play.google.com/store/apps/details?id=com.rachna.mysakhi";

/** True when at least one store can actually be downloaded from. */
export const anyStoreLive = appStoreLive || playStoreLive;
