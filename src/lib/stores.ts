/*
 * Where Sakhi can be downloaded, and whether it can be yet.
 *
 * The one place the site decides this. Every download button, the site-wide band, the
 * homepage, the download modal, the closing CTA, the Resources card and the structured
 * data all read from here, so launch day is flipping one of the two flags below and
 * redeploying. Nothing else.
 *
 * Karan's rule is that a flag stays false until that app is actually live. Checked on
 * 2026-09-24: Apple's lookup API (itunes.apple.com/lookup?id=6747256551&country=in)
 * answers with Sakhi: Menstrual Companion at version 2.0.3, released 2026-09-22, free,
 * with the Stay With Me listing copy. So the App Store flag is on. The Play package
 * com.rachna.mysakhi still returns 404 the same day, so that flag stays off.
 * The old App Store id 6742219623 was a 404; 6747256551 is the real one.
 */

export const appStoreLive = true;
export const playStoreLive = false;

export const appStoreUrl = "https://apps.apple.com/app/id6747256551";

// com.rachna.mysakhi is the Android package. The site used to link
// com.galgotiasuniversity.rachnasakhi, which is the iOS bundle id and not an Android app.
export const playStoreUrl = "https://play.google.com/store/apps/details?id=com.rachna.mysakhi";

/** True when at least one store can actually be downloaded from. */
export const anyStoreLive = appStoreLive || playStoreLive;
