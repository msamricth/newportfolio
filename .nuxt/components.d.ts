
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'Contact': typeof import("../src/components/Contact.vue")['default']
    'FeaturedWork': typeof import("../src/components/FeaturedWork.vue")['default']
    'Footer': typeof import("../src/components/Footer.vue")['default']
    'Links': typeof import("../src/components/Links.vue")['default']
    'LogoGarden': typeof import("../src/components/LogoGarden.vue")['default']
    'Preloader': typeof import("../src/components/Preloader.vue")['default']
    'Testimonials': typeof import("../src/components/Testimonials.vue")['default']
    'AnimatedCTA': typeof import("../src/components/animatedCTA.vue")['default']
    'ButtonsClose': typeof import("../src/components/buttons/Close.vue")['default']
    'ButtonsGithub': typeof import("../src/components/buttons/Github.vue")['default']
    'ButtonsLinkedIn': typeof import("../src/components/buttons/LinkedIn.vue")['default']
    'ButtonsMainButton': typeof import("../src/components/buttons/MainButton.vue")['default']
    'ButtonsTooltips': typeof import("../src/components/buttons/Tooltips.vue")['default']
    'CarouselsFeaturedWork': typeof import("../src/components/carousels/FeaturedWork.vue")['default']
    'CarouselsTestimonials': typeof import("../src/components/carousels/Testimonials.vue")['default']
    'CaseStudiesChallenge': typeof import("../src/components/case-studies/Challenge.vue")['default']
    'CaseStudiesFullImage': typeof import("../src/components/case-studies/FullImage.vue")['default']
    'CaseStudiesIntro': typeof import("../src/components/case-studies/Intro.vue")['default']
    'CaseStudiesOverview': typeof import("../src/components/case-studies/Overview.vue")['default']
    'CaseStudiesSections': typeof import("../src/components/case-studies/Sections.vue")['default']
    'CaseStudiesSectionsBasic': typeof import("../src/components/case-studies/sections/Basic.vue")['default']
    'CaseStudiesSectionsBasicImage': typeof import("../src/components/case-studies/sections/BasicImage.vue")['default']
    'CaseStudiesSectionsIconGist': typeof import("../src/components/case-studies/sections/IconGist.vue")['default']
    'CaseStudiesSectionsImage': typeof import("../src/components/case-studies/sections/Image.vue")['default']
    'CaseStudiesSectionsImageGist': typeof import("../src/components/case-studies/sections/ImageGist.vue")['default']
    'CaseStudiesSectionsSlideShow': typeof import("../src/components/case-studies/sections/SlideShow.vue")['default']
    'ContextsAbout': typeof import("../src/components/contexts/About.vue")['default']
    'ContextsArtisan': typeof import("../src/components/contexts/Artisan.vue")['default']
    'ContextsGist': typeof import("../src/components/contexts/Gist.vue")['default']
    'ContextsHomeHero': typeof import("../src/components/contexts/HomeHero.vue")['default']
    'ContextsIntro': typeof import("../src/components/contexts/Intro.vue")['default']
    'ContextsLyric': typeof import("../src/components/contexts/Lyric.vue")['default']
    'ContextsModal': typeof import("../src/components/contexts/Modal.vue")['default']
    'ContextsOfferings': typeof import("../src/components/contexts/Offerings.vue")['default']
    'ContextsReturningUser': typeof import("../src/components/contexts/ReturningUser.vue")['default']
    'ContextsTestimonial': typeof import("../src/components/contexts/Testimonial.vue")['default']
    'ContextsWorkItem': typeof import("../src/components/contexts/WorkItem.vue")['default']
    'ContextsHeroSceneLoader': typeof import("../src/components/contexts/hero/SceneLoader.vue")['default']
    'ContextsHeroSceneTetris': typeof import("../src/components/contexts/hero/SceneTetris.vue")['default']
    'ContextsHeroSceneUX': typeof import("../src/components/contexts/hero/SceneUX.vue")['default']
    'ContextsHeroSceneVideo': typeof import("../src/components/contexts/hero/SceneVideo.vue")['default']
    'IconsAPI': typeof import("../src/components/icons/API.vue")['default']
    'IconsActionNetwork': typeof import("../src/components/icons/ActionNetwork.vue")['default']
    'IconsAirtable': typeof import("../src/components/icons/Airtable.vue")['default']
    'IconsBMX': typeof import("../src/components/icons/BMX.vue")['default']
    'IconsCode': typeof import("../src/components/icons/Code.vue")['default']
    'IconsFire': typeof import("../src/components/icons/Fire.vue")['default']
    'IconsFlower2': typeof import("../src/components/icons/Flower2.vue")['default']
    'IconsFlower4': typeof import("../src/components/icons/Flower4.vue")['default']
    'IconsFlower5': typeof import("../src/components/icons/Flower5.vue")['default']
    'IconsFrontend': typeof import("../src/components/icons/Frontend.vue")['default']
    'IconsGLT': typeof import("../src/components/icons/GLT.vue")['default']
    'IconsHeadphones': typeof import("../src/components/icons/Headphones.vue")['default']
    'IconsHeart': typeof import("../src/components/icons/Heart.vue")['default']
    'IconsIconMap': typeof import("../src/components/icons/IconMap.vue")['default']
    'IconsMixer': typeof import("../src/components/icons/Mixer.vue")['default']
    'IconsMotion': typeof import("../src/components/icons/Motion.vue")['default']
    'IconsProblemSolving': typeof import("../src/components/icons/ProblemSolving.vue")['default']
    'IconsSyntax': typeof import("../src/components/icons/Syntax.vue")['default']
    'IconsUX': typeof import("../src/components/icons/UX.vue")['default']
    'IconsWordpress': typeof import("../src/components/icons/Wordpress.vue")['default']
    'NavigationHamburger': typeof import("../src/components/navigation/Hamburger.vue")['default']
    'NavigationIcons': typeof import("../src/components/navigation/Icons.vue")['default']
    'NavigationInnerNav': typeof import("../src/components/navigation/InnerNav.vue")['default']
    'NavigationInnerSecondaryNav': typeof import("../src/components/navigation/InnerSecondaryNav.vue")['default']
    'NavigationMode': typeof import("../src/components/navigation/Mode.vue")['default']
    'NavigationNav': typeof import("../src/components/navigation/Nav.vue")['default']
    'NavigationSecondaryNav': typeof import("../src/components/navigation/SecondaryNav.vue")['default']
    'SidebarsWork': typeof import("../src/components/sidebars/Work.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyContact': LazyComponent<typeof import("../src/components/Contact.vue")['default']>
    'LazyFeaturedWork': LazyComponent<typeof import("../src/components/FeaturedWork.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../src/components/Footer.vue")['default']>
    'LazyLinks': LazyComponent<typeof import("../src/components/Links.vue")['default']>
    'LazyLogoGarden': LazyComponent<typeof import("../src/components/LogoGarden.vue")['default']>
    'LazyPreloader': LazyComponent<typeof import("../src/components/Preloader.vue")['default']>
    'LazyTestimonials': LazyComponent<typeof import("../src/components/Testimonials.vue")['default']>
    'LazyAnimatedCTA': LazyComponent<typeof import("../src/components/animatedCTA.vue")['default']>
    'LazyButtonsClose': LazyComponent<typeof import("../src/components/buttons/Close.vue")['default']>
    'LazyButtonsGithub': LazyComponent<typeof import("../src/components/buttons/Github.vue")['default']>
    'LazyButtonsLinkedIn': LazyComponent<typeof import("../src/components/buttons/LinkedIn.vue")['default']>
    'LazyButtonsMainButton': LazyComponent<typeof import("../src/components/buttons/MainButton.vue")['default']>
    'LazyButtonsTooltips': LazyComponent<typeof import("../src/components/buttons/Tooltips.vue")['default']>
    'LazyCarouselsFeaturedWork': LazyComponent<typeof import("../src/components/carousels/FeaturedWork.vue")['default']>
    'LazyCarouselsTestimonials': LazyComponent<typeof import("../src/components/carousels/Testimonials.vue")['default']>
    'LazyCaseStudiesChallenge': LazyComponent<typeof import("../src/components/case-studies/Challenge.vue")['default']>
    'LazyCaseStudiesFullImage': LazyComponent<typeof import("../src/components/case-studies/FullImage.vue")['default']>
    'LazyCaseStudiesIntro': LazyComponent<typeof import("../src/components/case-studies/Intro.vue")['default']>
    'LazyCaseStudiesOverview': LazyComponent<typeof import("../src/components/case-studies/Overview.vue")['default']>
    'LazyCaseStudiesSections': LazyComponent<typeof import("../src/components/case-studies/Sections.vue")['default']>
    'LazyCaseStudiesSectionsBasic': LazyComponent<typeof import("../src/components/case-studies/sections/Basic.vue")['default']>
    'LazyCaseStudiesSectionsBasicImage': LazyComponent<typeof import("../src/components/case-studies/sections/BasicImage.vue")['default']>
    'LazyCaseStudiesSectionsIconGist': LazyComponent<typeof import("../src/components/case-studies/sections/IconGist.vue")['default']>
    'LazyCaseStudiesSectionsImage': LazyComponent<typeof import("../src/components/case-studies/sections/Image.vue")['default']>
    'LazyCaseStudiesSectionsImageGist': LazyComponent<typeof import("../src/components/case-studies/sections/ImageGist.vue")['default']>
    'LazyCaseStudiesSectionsSlideShow': LazyComponent<typeof import("../src/components/case-studies/sections/SlideShow.vue")['default']>
    'LazyContextsAbout': LazyComponent<typeof import("../src/components/contexts/About.vue")['default']>
    'LazyContextsArtisan': LazyComponent<typeof import("../src/components/contexts/Artisan.vue")['default']>
    'LazyContextsGist': LazyComponent<typeof import("../src/components/contexts/Gist.vue")['default']>
    'LazyContextsHomeHero': LazyComponent<typeof import("../src/components/contexts/HomeHero.vue")['default']>
    'LazyContextsIntro': LazyComponent<typeof import("../src/components/contexts/Intro.vue")['default']>
    'LazyContextsLyric': LazyComponent<typeof import("../src/components/contexts/Lyric.vue")['default']>
    'LazyContextsModal': LazyComponent<typeof import("../src/components/contexts/Modal.vue")['default']>
    'LazyContextsOfferings': LazyComponent<typeof import("../src/components/contexts/Offerings.vue")['default']>
    'LazyContextsReturningUser': LazyComponent<typeof import("../src/components/contexts/ReturningUser.vue")['default']>
    'LazyContextsTestimonial': LazyComponent<typeof import("../src/components/contexts/Testimonial.vue")['default']>
    'LazyContextsWorkItem': LazyComponent<typeof import("../src/components/contexts/WorkItem.vue")['default']>
    'LazyContextsHeroSceneLoader': LazyComponent<typeof import("../src/components/contexts/hero/SceneLoader.vue")['default']>
    'LazyContextsHeroSceneTetris': LazyComponent<typeof import("../src/components/contexts/hero/SceneTetris.vue")['default']>
    'LazyContextsHeroSceneUX': LazyComponent<typeof import("../src/components/contexts/hero/SceneUX.vue")['default']>
    'LazyContextsHeroSceneVideo': LazyComponent<typeof import("../src/components/contexts/hero/SceneVideo.vue")['default']>
    'LazyIconsAPI': LazyComponent<typeof import("../src/components/icons/API.vue")['default']>
    'LazyIconsActionNetwork': LazyComponent<typeof import("../src/components/icons/ActionNetwork.vue")['default']>
    'LazyIconsAirtable': LazyComponent<typeof import("../src/components/icons/Airtable.vue")['default']>
    'LazyIconsBMX': LazyComponent<typeof import("../src/components/icons/BMX.vue")['default']>
    'LazyIconsCode': LazyComponent<typeof import("../src/components/icons/Code.vue")['default']>
    'LazyIconsFire': LazyComponent<typeof import("../src/components/icons/Fire.vue")['default']>
    'LazyIconsFlower2': LazyComponent<typeof import("../src/components/icons/Flower2.vue")['default']>
    'LazyIconsFlower4': LazyComponent<typeof import("../src/components/icons/Flower4.vue")['default']>
    'LazyIconsFlower5': LazyComponent<typeof import("../src/components/icons/Flower5.vue")['default']>
    'LazyIconsFrontend': LazyComponent<typeof import("../src/components/icons/Frontend.vue")['default']>
    'LazyIconsGLT': LazyComponent<typeof import("../src/components/icons/GLT.vue")['default']>
    'LazyIconsHeadphones': LazyComponent<typeof import("../src/components/icons/Headphones.vue")['default']>
    'LazyIconsHeart': LazyComponent<typeof import("../src/components/icons/Heart.vue")['default']>
    'LazyIconsIconMap': LazyComponent<typeof import("../src/components/icons/IconMap.vue")['default']>
    'LazyIconsMixer': LazyComponent<typeof import("../src/components/icons/Mixer.vue")['default']>
    'LazyIconsMotion': LazyComponent<typeof import("../src/components/icons/Motion.vue")['default']>
    'LazyIconsProblemSolving': LazyComponent<typeof import("../src/components/icons/ProblemSolving.vue")['default']>
    'LazyIconsSyntax': LazyComponent<typeof import("../src/components/icons/Syntax.vue")['default']>
    'LazyIconsUX': LazyComponent<typeof import("../src/components/icons/UX.vue")['default']>
    'LazyIconsWordpress': LazyComponent<typeof import("../src/components/icons/Wordpress.vue")['default']>
    'LazyNavigationHamburger': LazyComponent<typeof import("../src/components/navigation/Hamburger.vue")['default']>
    'LazyNavigationIcons': LazyComponent<typeof import("../src/components/navigation/Icons.vue")['default']>
    'LazyNavigationInnerNav': LazyComponent<typeof import("../src/components/navigation/InnerNav.vue")['default']>
    'LazyNavigationInnerSecondaryNav': LazyComponent<typeof import("../src/components/navigation/InnerSecondaryNav.vue")['default']>
    'LazyNavigationMode': LazyComponent<typeof import("../src/components/navigation/Mode.vue")['default']>
    'LazyNavigationNav': LazyComponent<typeof import("../src/components/navigation/Nav.vue")['default']>
    'LazyNavigationSecondaryNav': LazyComponent<typeof import("../src/components/navigation/SecondaryNav.vue")['default']>
    'LazySidebarsWork': LazyComponent<typeof import("../src/components/sidebars/Work.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const Contact: typeof import("../src/components/Contact.vue")['default']
export const FeaturedWork: typeof import("../src/components/FeaturedWork.vue")['default']
export const Footer: typeof import("../src/components/Footer.vue")['default']
export const Links: typeof import("../src/components/Links.vue")['default']
export const LogoGarden: typeof import("../src/components/LogoGarden.vue")['default']
export const Preloader: typeof import("../src/components/Preloader.vue")['default']
export const Testimonials: typeof import("../src/components/Testimonials.vue")['default']
export const AnimatedCTA: typeof import("../src/components/animatedCTA.vue")['default']
export const ButtonsClose: typeof import("../src/components/buttons/Close.vue")['default']
export const ButtonsGithub: typeof import("../src/components/buttons/Github.vue")['default']
export const ButtonsLinkedIn: typeof import("../src/components/buttons/LinkedIn.vue")['default']
export const ButtonsMainButton: typeof import("../src/components/buttons/MainButton.vue")['default']
export const ButtonsTooltips: typeof import("../src/components/buttons/Tooltips.vue")['default']
export const CarouselsFeaturedWork: typeof import("../src/components/carousels/FeaturedWork.vue")['default']
export const CarouselsTestimonials: typeof import("../src/components/carousels/Testimonials.vue")['default']
export const CaseStudiesChallenge: typeof import("../src/components/case-studies/Challenge.vue")['default']
export const CaseStudiesFullImage: typeof import("../src/components/case-studies/FullImage.vue")['default']
export const CaseStudiesIntro: typeof import("../src/components/case-studies/Intro.vue")['default']
export const CaseStudiesOverview: typeof import("../src/components/case-studies/Overview.vue")['default']
export const CaseStudiesSections: typeof import("../src/components/case-studies/Sections.vue")['default']
export const CaseStudiesSectionsBasic: typeof import("../src/components/case-studies/sections/Basic.vue")['default']
export const CaseStudiesSectionsBasicImage: typeof import("../src/components/case-studies/sections/BasicImage.vue")['default']
export const CaseStudiesSectionsIconGist: typeof import("../src/components/case-studies/sections/IconGist.vue")['default']
export const CaseStudiesSectionsImage: typeof import("../src/components/case-studies/sections/Image.vue")['default']
export const CaseStudiesSectionsImageGist: typeof import("../src/components/case-studies/sections/ImageGist.vue")['default']
export const CaseStudiesSectionsSlideShow: typeof import("../src/components/case-studies/sections/SlideShow.vue")['default']
export const ContextsAbout: typeof import("../src/components/contexts/About.vue")['default']
export const ContextsArtisan: typeof import("../src/components/contexts/Artisan.vue")['default']
export const ContextsGist: typeof import("../src/components/contexts/Gist.vue")['default']
export const ContextsHomeHero: typeof import("../src/components/contexts/HomeHero.vue")['default']
export const ContextsIntro: typeof import("../src/components/contexts/Intro.vue")['default']
export const ContextsLyric: typeof import("../src/components/contexts/Lyric.vue")['default']
export const ContextsModal: typeof import("../src/components/contexts/Modal.vue")['default']
export const ContextsOfferings: typeof import("../src/components/contexts/Offerings.vue")['default']
export const ContextsReturningUser: typeof import("../src/components/contexts/ReturningUser.vue")['default']
export const ContextsTestimonial: typeof import("../src/components/contexts/Testimonial.vue")['default']
export const ContextsWorkItem: typeof import("../src/components/contexts/WorkItem.vue")['default']
export const ContextsHeroSceneLoader: typeof import("../src/components/contexts/hero/SceneLoader.vue")['default']
export const ContextsHeroSceneTetris: typeof import("../src/components/contexts/hero/SceneTetris.vue")['default']
export const ContextsHeroSceneUX: typeof import("../src/components/contexts/hero/SceneUX.vue")['default']
export const ContextsHeroSceneVideo: typeof import("../src/components/contexts/hero/SceneVideo.vue")['default']
export const IconsAPI: typeof import("../src/components/icons/API.vue")['default']
export const IconsActionNetwork: typeof import("../src/components/icons/ActionNetwork.vue")['default']
export const IconsAirtable: typeof import("../src/components/icons/Airtable.vue")['default']
export const IconsBMX: typeof import("../src/components/icons/BMX.vue")['default']
export const IconsCode: typeof import("../src/components/icons/Code.vue")['default']
export const IconsFire: typeof import("../src/components/icons/Fire.vue")['default']
export const IconsFlower2: typeof import("../src/components/icons/Flower2.vue")['default']
export const IconsFlower4: typeof import("../src/components/icons/Flower4.vue")['default']
export const IconsFlower5: typeof import("../src/components/icons/Flower5.vue")['default']
export const IconsFrontend: typeof import("../src/components/icons/Frontend.vue")['default']
export const IconsGLT: typeof import("../src/components/icons/GLT.vue")['default']
export const IconsHeadphones: typeof import("../src/components/icons/Headphones.vue")['default']
export const IconsHeart: typeof import("../src/components/icons/Heart.vue")['default']
export const IconsIconMap: typeof import("../src/components/icons/IconMap.vue")['default']
export const IconsMixer: typeof import("../src/components/icons/Mixer.vue")['default']
export const IconsMotion: typeof import("../src/components/icons/Motion.vue")['default']
export const IconsProblemSolving: typeof import("../src/components/icons/ProblemSolving.vue")['default']
export const IconsSyntax: typeof import("../src/components/icons/Syntax.vue")['default']
export const IconsUX: typeof import("../src/components/icons/UX.vue")['default']
export const IconsWordpress: typeof import("../src/components/icons/Wordpress.vue")['default']
export const NavigationHamburger: typeof import("../src/components/navigation/Hamburger.vue")['default']
export const NavigationIcons: typeof import("../src/components/navigation/Icons.vue")['default']
export const NavigationInnerNav: typeof import("../src/components/navigation/InnerNav.vue")['default']
export const NavigationInnerSecondaryNav: typeof import("../src/components/navigation/InnerSecondaryNav.vue")['default']
export const NavigationMode: typeof import("../src/components/navigation/Mode.vue")['default']
export const NavigationNav: typeof import("../src/components/navigation/Nav.vue")['default']
export const NavigationSecondaryNav: typeof import("../src/components/navigation/SecondaryNav.vue")['default']
export const SidebarsWork: typeof import("../src/components/sidebars/Work.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyContact: LazyComponent<typeof import("../src/components/Contact.vue")['default']>
export const LazyFeaturedWork: LazyComponent<typeof import("../src/components/FeaturedWork.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../src/components/Footer.vue")['default']>
export const LazyLinks: LazyComponent<typeof import("../src/components/Links.vue")['default']>
export const LazyLogoGarden: LazyComponent<typeof import("../src/components/LogoGarden.vue")['default']>
export const LazyPreloader: LazyComponent<typeof import("../src/components/Preloader.vue")['default']>
export const LazyTestimonials: LazyComponent<typeof import("../src/components/Testimonials.vue")['default']>
export const LazyAnimatedCTA: LazyComponent<typeof import("../src/components/animatedCTA.vue")['default']>
export const LazyButtonsClose: LazyComponent<typeof import("../src/components/buttons/Close.vue")['default']>
export const LazyButtonsGithub: LazyComponent<typeof import("../src/components/buttons/Github.vue")['default']>
export const LazyButtonsLinkedIn: LazyComponent<typeof import("../src/components/buttons/LinkedIn.vue")['default']>
export const LazyButtonsMainButton: LazyComponent<typeof import("../src/components/buttons/MainButton.vue")['default']>
export const LazyButtonsTooltips: LazyComponent<typeof import("../src/components/buttons/Tooltips.vue")['default']>
export const LazyCarouselsFeaturedWork: LazyComponent<typeof import("../src/components/carousels/FeaturedWork.vue")['default']>
export const LazyCarouselsTestimonials: LazyComponent<typeof import("../src/components/carousels/Testimonials.vue")['default']>
export const LazyCaseStudiesChallenge: LazyComponent<typeof import("../src/components/case-studies/Challenge.vue")['default']>
export const LazyCaseStudiesFullImage: LazyComponent<typeof import("../src/components/case-studies/FullImage.vue")['default']>
export const LazyCaseStudiesIntro: LazyComponent<typeof import("../src/components/case-studies/Intro.vue")['default']>
export const LazyCaseStudiesOverview: LazyComponent<typeof import("../src/components/case-studies/Overview.vue")['default']>
export const LazyCaseStudiesSections: LazyComponent<typeof import("../src/components/case-studies/Sections.vue")['default']>
export const LazyCaseStudiesSectionsBasic: LazyComponent<typeof import("../src/components/case-studies/sections/Basic.vue")['default']>
export const LazyCaseStudiesSectionsBasicImage: LazyComponent<typeof import("../src/components/case-studies/sections/BasicImage.vue")['default']>
export const LazyCaseStudiesSectionsIconGist: LazyComponent<typeof import("../src/components/case-studies/sections/IconGist.vue")['default']>
export const LazyCaseStudiesSectionsImage: LazyComponent<typeof import("../src/components/case-studies/sections/Image.vue")['default']>
export const LazyCaseStudiesSectionsImageGist: LazyComponent<typeof import("../src/components/case-studies/sections/ImageGist.vue")['default']>
export const LazyCaseStudiesSectionsSlideShow: LazyComponent<typeof import("../src/components/case-studies/sections/SlideShow.vue")['default']>
export const LazyContextsAbout: LazyComponent<typeof import("../src/components/contexts/About.vue")['default']>
export const LazyContextsArtisan: LazyComponent<typeof import("../src/components/contexts/Artisan.vue")['default']>
export const LazyContextsGist: LazyComponent<typeof import("../src/components/contexts/Gist.vue")['default']>
export const LazyContextsHomeHero: LazyComponent<typeof import("../src/components/contexts/HomeHero.vue")['default']>
export const LazyContextsIntro: LazyComponent<typeof import("../src/components/contexts/Intro.vue")['default']>
export const LazyContextsLyric: LazyComponent<typeof import("../src/components/contexts/Lyric.vue")['default']>
export const LazyContextsModal: LazyComponent<typeof import("../src/components/contexts/Modal.vue")['default']>
export const LazyContextsOfferings: LazyComponent<typeof import("../src/components/contexts/Offerings.vue")['default']>
export const LazyContextsReturningUser: LazyComponent<typeof import("../src/components/contexts/ReturningUser.vue")['default']>
export const LazyContextsTestimonial: LazyComponent<typeof import("../src/components/contexts/Testimonial.vue")['default']>
export const LazyContextsWorkItem: LazyComponent<typeof import("../src/components/contexts/WorkItem.vue")['default']>
export const LazyContextsHeroSceneLoader: LazyComponent<typeof import("../src/components/contexts/hero/SceneLoader.vue")['default']>
export const LazyContextsHeroSceneTetris: LazyComponent<typeof import("../src/components/contexts/hero/SceneTetris.vue")['default']>
export const LazyContextsHeroSceneUX: LazyComponent<typeof import("../src/components/contexts/hero/SceneUX.vue")['default']>
export const LazyContextsHeroSceneVideo: LazyComponent<typeof import("../src/components/contexts/hero/SceneVideo.vue")['default']>
export const LazyIconsAPI: LazyComponent<typeof import("../src/components/icons/API.vue")['default']>
export const LazyIconsActionNetwork: LazyComponent<typeof import("../src/components/icons/ActionNetwork.vue")['default']>
export const LazyIconsAirtable: LazyComponent<typeof import("../src/components/icons/Airtable.vue")['default']>
export const LazyIconsBMX: LazyComponent<typeof import("../src/components/icons/BMX.vue")['default']>
export const LazyIconsCode: LazyComponent<typeof import("../src/components/icons/Code.vue")['default']>
export const LazyIconsFire: LazyComponent<typeof import("../src/components/icons/Fire.vue")['default']>
export const LazyIconsFlower2: LazyComponent<typeof import("../src/components/icons/Flower2.vue")['default']>
export const LazyIconsFlower4: LazyComponent<typeof import("../src/components/icons/Flower4.vue")['default']>
export const LazyIconsFlower5: LazyComponent<typeof import("../src/components/icons/Flower5.vue")['default']>
export const LazyIconsFrontend: LazyComponent<typeof import("../src/components/icons/Frontend.vue")['default']>
export const LazyIconsGLT: LazyComponent<typeof import("../src/components/icons/GLT.vue")['default']>
export const LazyIconsHeadphones: LazyComponent<typeof import("../src/components/icons/Headphones.vue")['default']>
export const LazyIconsHeart: LazyComponent<typeof import("../src/components/icons/Heart.vue")['default']>
export const LazyIconsIconMap: LazyComponent<typeof import("../src/components/icons/IconMap.vue")['default']>
export const LazyIconsMixer: LazyComponent<typeof import("../src/components/icons/Mixer.vue")['default']>
export const LazyIconsMotion: LazyComponent<typeof import("../src/components/icons/Motion.vue")['default']>
export const LazyIconsProblemSolving: LazyComponent<typeof import("../src/components/icons/ProblemSolving.vue")['default']>
export const LazyIconsSyntax: LazyComponent<typeof import("../src/components/icons/Syntax.vue")['default']>
export const LazyIconsUX: LazyComponent<typeof import("../src/components/icons/UX.vue")['default']>
export const LazyIconsWordpress: LazyComponent<typeof import("../src/components/icons/Wordpress.vue")['default']>
export const LazyNavigationHamburger: LazyComponent<typeof import("../src/components/navigation/Hamburger.vue")['default']>
export const LazyNavigationIcons: LazyComponent<typeof import("../src/components/navigation/Icons.vue")['default']>
export const LazyNavigationInnerNav: LazyComponent<typeof import("../src/components/navigation/InnerNav.vue")['default']>
export const LazyNavigationInnerSecondaryNav: LazyComponent<typeof import("../src/components/navigation/InnerSecondaryNav.vue")['default']>
export const LazyNavigationMode: LazyComponent<typeof import("../src/components/navigation/Mode.vue")['default']>
export const LazyNavigationNav: LazyComponent<typeof import("../src/components/navigation/Nav.vue")['default']>
export const LazyNavigationSecondaryNav: LazyComponent<typeof import("../src/components/navigation/SecondaryNav.vue")['default']>
export const LazySidebarsWork: LazyComponent<typeof import("../src/components/sidebars/Work.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
