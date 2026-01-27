"use server";

import funnyMessages from "../valsMessages/funny";
import romanticMessages from "../valsMessages/romantic";
import deepMessages from "../valsMessages/deep";
import shyMessages from "../valsMessages/shy";
import ghanaSlangMessages from "../valsMessages/ghanaSlang";
import classicMessages from "../valsMessages/classic";
import poeticMessages from "../valsMessages/poetic";

const messages = {
  romantic: romanticMessages,
  funny: funnyMessages,
  deep: deepMessages,
  shy: shyMessages,
  poetic: poeticMessages,
  classic: classicMessages,
  ghanaSlang: ghanaSlangMessages,
};

export type Style =
  | "romantic"
  | "funny"
  | "shy"
  | "classic"
  | "deep"
  | "poetic"
  | "ghanaSlang";

export async function selectMessage(
  recipient: string | undefined,
  style: Style,
) {
  const styledMessages: string[] = messages[style];
  let selectedMessage = "";
  if (recipient) {
    const recipientMessages = styledMessages.filter((message) =>
      message.includes("{name}"),
    );
    selectedMessage =
      recipientMessages[Math.floor(Math.random() * recipientMessages.length)];
    selectedMessage = selectedMessage.replace("{name}", recipient);
  } else {
    const nonRecipientMessages = styledMessages.filter(
      (message) => !message.includes("{name}"),
    );
    selectedMessage =
      nonRecipientMessages[
        Math.floor(Math.random() * nonRecipientMessages.length)
      ];
  }
  return selectedMessage;
}

export async function generateCard(
  recipient: string | undefined,
  style: Style,
) {
  const message = await selectMessage(recipient, style);
  return message;
}
