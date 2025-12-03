/**
 * Premium Tasting Notes for Saanjh Ritual Tea Blends
 * 
 * These poetic descriptions capture the essence of each blend's flavor profile
 * and healing properties. Use these to populate the tastingNotes field in your
 * RitualTeaBlends collection.
 */

export const tastingNotesLibrary = {
  // Golden Hour Blend
  goldenHour: `Honeyed warmth meets delicate florals. Notes of chamomile and rose petals unfold on the palate, followed by a subtle hint of vanilla and golden turmeric. The finish is silky, grounding, and reminiscent of a sunset held in liquid form.`,

  // Twilight Serenity
  twilightSerenity: `A symphony of lavender and bergamot opens the senses, melting into creamy notes of ashwagandha and cardamom. The middle notes reveal hints of jasmine and sandalwood, creating a meditative warmth that lingers like twilight's final glow.`,

  // Moonlight Meditation
  moonlightMeditation: `Cooling mint and refreshing lemongrass dance with the earthiness of brahmi and holy basil. A whisper of licorice root adds sweetness, while the finish is clean, clarifying, and deeply calming—like moonlight on still water.`,

  // Spiced Sanctuary
  spicedSanctuary: `Rich cinnamon and warming ginger create a bold foundation, layered with clove, black pepper, and a touch of nutmeg. Beneath lies the grounding presence of shatavari and gotu kola, with a honey-like sweetness that soothes the soul.`,

  // Herbal Harmony
  herbalHarmony: `A delicate balance of mint, basil, and fennel creates a refreshing opening. The heart reveals gentle notes of tulsi and brahmi, while the base of licorice root and dried rose petals provides a naturally sweet, harmonious finish.`,

  // Amber Dreams
  amberDreams: `Warm amber tones of rooibos and turmeric blend with sweet notes of cinnamon and vanilla. Hints of cardamom and a touch of black pepper add complexity, while the finish is velvety, comforting, and deeply nourishing.`,

  // Celestial Blend
  celestialBlend: `Ethereal jasmine and rose open to reveal notes of hibiscus and butterfly pea flower. The middle unfolds with subtle spice from cardamom and a whisper of sandalwood. The finish is floral, slightly tart, and transcendent.`,

  // Sacred Stillness
  sacredStillness: `Earthy notes of ashwagandha and shatavari form the foundation, topped with calming chamomile and lavender. A hint of vanilla and honey sweetness emerges, creating a deeply grounding, meditative experience that invites complete surrender.`,
};

/**
 * Usage Instructions:
 * 
 * 1. Go to your Wix CMS dashboard
 * 2. Navigate to the "Ritual Tea Blends" collection
 * 3. For each product, click to edit
 * 4. Scroll to the "Tasting Notes" field
 * 5. Copy and paste the corresponding tasting note from this library
 * 6. Save the product
 * 
 * Alternatively, you can use the BaseCrudService to update items programmatically:
 * 
 * ```typescript
 * import { BaseCrudService } from '@/integrations';
 * import { tastingNotesLibrary } from '@/data/tasting-notes';
 * 
 * // Update a single product
 * await BaseCrudService.update('ritualteablends', {
 *   _id: 'product-id-here',
 *   tastingNotes: tastingNotesLibrary.goldenHour
 * });
 * ```
 */
