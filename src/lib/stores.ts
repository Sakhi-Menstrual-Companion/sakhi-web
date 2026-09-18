/*
 * Where Sakhi can be downloaded, and whether it can be yet.
 *
 * The one place the site decides this. Every download button, the site-wide band, the
 * homepage, the download modal, the closing CTA, the Resources card and the structured
 * data all read from here, so launch day is flipping one of the two flags below and
 * redeploying. Nothing else.
 *
 * Both are false on purpose. Karan's rule is that they stay false until the apps are
 * live, so flipping them is his call, not a code fix. Checked on 2026-09-18: the Play
 * package returns 404. On the Apple side the App Store id used to be 6742219623, which
 * Apple's lookup API answers with zero results in India and the US and which is a 404
 * page. The real id is 6747256551 (Sakhi: Menstrual Companion, currently the 2025
 * version 1.0.5, with 2.0.1 not yet approved), so the url below now points at that.
 */

export const appStoreLive = false;
export const playStoreLive = false;

export const appStoreUrl = "https://apps.apple.com/app/id6747256551";

// com.rachna.mysakhi is the Android package. The site used to link
// com.galgotiasuniversity.rachnasakhi, which is the iOS bundle id and not an Android app.
export const playStoreUrl = "https://play.google.com/store/apps/details?id=com.rachna.mysakhi";

/** True when at least one store can actually be downloaded from. */
export const anyStoreLive = appStoreLive || playStoreLive;
