import { Providers } from "@/app/providers";
import { Layout } from "@/components/dom/Layout";

export const metadata = {
  title: "XR | iFlavi",
  description: "iFlavi Menu Web Mobile App.",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <Layout>{children}</Layout>
    </Providers>
  );
}
