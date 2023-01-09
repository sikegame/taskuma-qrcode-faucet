import { v4 as uuidv4 } from "uuid";

export function generateQrCodeValue(): string {
  return `taskuma://t/${uuidv4()}`;
}
