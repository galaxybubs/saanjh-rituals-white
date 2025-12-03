/**
 * Unique Overlay Descriptors for Saanjh Ritual Tea Blends
 * 
 * These are distinct from tasting notes and appear on hover overlay.
 * They focus on the ritual experience, benefits, and sensory journey.
 */

export const overlayDescriptors = {
  // Golden Hour Blend
  goldenHour: {
    keyword: "Golden Awakening",
    descriptor: "Illuminate your evening with warmth and gentle clarity. A luminous blend that awakens the senses while preparing the body for restful transition."
  },

  // Twilight Serenity
  twilightSerenity: {
    keyword: "Twilight Embrace",
    descriptor: "Surrender to the magic hour. This blend wraps you in lavender's calm while cardamom grounds your spirit, creating the perfect threshold between day and night."
  },

  // Moonlight Meditation
  moonlightMeditation: {
    keyword: "Lunar Clarity",
    descriptor: "Cool, refreshing, and deeply centering. A moonlit journey through mint and basil that clears the mind and invites profound stillness."
  },

  // Spiced Sanctuary
  spicedSanctuary: {
    keyword: "Warming Sanctuary",
    descriptor: "Bold spices create a protective cocoon. This blend ignites inner warmth while grounding herbs anchor you in safety and comfort."
  },

  // Herbal Harmony
  herbalHarmony: {
    keyword: "Balanced Renewal",
    descriptor: "A symphony of fresh herbs in perfect balance. Each sip brings renewal, clarity, and the gentle harmony of nature's healing garden."
  },

  // Amber Dreams
  amberDreams: {
    keyword: "Amber Reverie",
    descriptor: "Drift into golden dreams. Warm spices and velvety textures create a luxurious escape, perfect for evening contemplation and rest."
  },

  // Celestial Blend
  celestialBlend: {
    keyword: "Cosmic Journey",
    descriptor: "Transcend the ordinary. Floral notes transport you to celestial realms where jasmine and rose guide your spirit toward infinite peace."
  },

  // Sacred Stillness
  sacredStillness: {
    keyword: "Deep Surrender",
    descriptor: "The ultimate invitation to let go. Earthy roots and calming herbs create a sanctuary within, where complete rest becomes possible."
  },
};

/**
 * Helper function to get overlay descriptor by index
 * Useful for cycling through descriptors when blend count exceeds available descriptors
 */
export function getOverlayDescriptor(index: number) {
  const descriptors = Object.values(overlayDescriptors);
  return descriptors[index % descriptors.length];
}
