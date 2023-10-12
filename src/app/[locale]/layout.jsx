import { notFound } from "next/navigation";
import { createTranslator, NextIntlClientProvider } from "next-intl";

async function getMessages(locale) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ["es", "en"].map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
