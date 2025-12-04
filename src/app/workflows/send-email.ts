import { sleep } from "workflow";
export async function sendEmail(to: string, subject: string, body: string) {
  "use workflow";

  sleep(5000);
  await sendWelcomeEmail(to, body);

  return {};
}

export async function sendWelcomeEmail(to: string, userName: string) {
  "use step";
  const subject = "Welcome to Our Service!";
  const body = `Hello ${userName},\n\nThank you for signing up for our service! We're excited to have you on board.\n\nBest regards,\nThe Team`;

  console.log(`Sending email to: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${body}`);

  return { to, subject, body };
}
