/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: brandpillars
 * Interface for BrandPillars
 */
export interface BrandPillars {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  pillarName?: string;
  /** @wixFieldType image */
  pillarIcon?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType text */
  callToActionText?: string;
  /** @wixFieldType url */
  callToActionUrl?: string;
}


/**
 * Collection ID: customertestimonials
 * Interface for CustomerTestimonials
 */
export interface CustomerTestimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  customerName?: string;
  /** @wixFieldType text */
  customerTitle?: string;
  /** @wixFieldType text */
  quote?: string;
  /** @wixFieldType image */
  customerImage?: string;
  /** @wixFieldType url */
  videoUrl?: string;
}


/**
 * Collection ID: eveningritualsteps
 * Interface for EveningRitualSteps
 */
export interface EveningRitualSteps {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType number */
  stepNumber?: number;
  /** @wixFieldType text */
  stepTitle?: string;
  /** @wixFieldType text */
  stepDescription?: string;
  /** @wixFieldType image */
  illustration?: string;
  /** @wixFieldType text */
  ritualTip?: string;
}


/**
 * Collection ID: ingredients
 * Interface for Ingredients
 */
export interface Ingredients {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  ingredientName?: string;
  /** @wixFieldType image */
  macroImage?: string;
  /** @wixFieldType text */
  botanicalName?: string;
  /** @wixFieldType text */
  origin?: string;
  /** @wixFieldType text */
  description?: string;
}


/**
 * Collection ID: journalarticles
 * Interface for JournalArticles
 */
export interface JournalArticles {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType image */
  featureImage?: string;
  /** @wixFieldType text */
  author?: string;
  /** @wixFieldType date */
  publishDate?: Date | string;
  /** @wixFieldType text */
  excerpt?: string;
  /** @wixFieldType number */
  readTime?: number;
}


/**
 * Collection ID: ritualteablends
 * Interface for RitualTeaBlends
 */
export interface RitualTeaBlends {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  blendName?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType text */
  keyBenefits?: string;
  /** @wixFieldType text */
  ingredients?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  ritualInstructions?: string;
  /** @wixFieldType text */
  sourcingStory?: string;
  /** @wixFieldType image */
  mainImage?: string;
  /** @wixFieldType text */
  healingUSP?: string;
  /** @wixFieldType text */
  productSKU?: string;
}


/**
 * Collection ID: sustainabilityoriginpoints
 * Interface for SustainabilityOriginPoints
 */
export interface SustainabilityOriginPoints {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  point1Title?: string;
  /** @wixFieldType image */
  point1Image?: string;
  /** @wixFieldType text */
  point1Description?: string;
  /** @wixFieldType text */
  point2Title?: string;
  /** @wixFieldType image */
  point2Image?: string;
  /** @wixFieldType text */
  point2Description?: string;
  /** @wixFieldType text */
  point3Title?: string;
  /** @wixFieldType image */
  point3Image?: string;
  /** @wixFieldType text */
  point3Description?: string;
}


/**
 * Collection ID: wellnessbenefits
 * Interface for WellnessBenefits
 */
export interface WellnessBenefits {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  benefitTitle?: string;
  /** @wixFieldType text */
  benefitDescription?: string;
  /** @wixFieldType image */
  benefitImage?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType boolean */
  isActive?: boolean;
}
