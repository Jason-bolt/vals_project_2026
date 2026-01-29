"use server";

import { generateCard, Style } from "./generate.card";

export async function processForm(formData: FormData) {
  const recipient = formData.get("recipient") as string | undefined;
  const sender = formData.get("sender") as string | undefined;
  const style = formData.get("style") as Style;
  console.log("recipient", recipient?.trim(), "style", style);
  const message = await generateCard(recipient, sender?.trim(), style);
  console.log(message);
  return message;
}
