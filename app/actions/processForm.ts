"use server";

import { generateCard, Style } from "./generate.card";

export async function processForm(formData: FormData) {

  const recipient = formData.get("recipient") as string | undefined;
  const style = formData.get("style") as Style;
  console.log("recipient", recipient, "style", style);
  const message = await generateCard(recipient, style);
  console.log(message);
  return message;
}
