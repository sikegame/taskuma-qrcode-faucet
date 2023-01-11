import { v4 as uuidv4 } from "uuid";

const SECTION_IDENTIFIER = "s";

function getUuid4(): string {
  /**
   * Returns a UUID v4 string without hyphens.
   */
  return uuidv4().replace(/-/g, "");
}

export function generateQrCodeValue(): string {
  const uuid = getUuid4();
  return `taskuma://${SECTION_IDENTIFIER}/${uuid}`;
}
