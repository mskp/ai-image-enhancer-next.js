import { Inter, Chakra_Petch } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const chakraPetch = Chakra_Petch({ weight: "500", subsets: ["latin"] })

export const metadata = {
  title: 'Chitransh: AI Image Enhancer',
  manifest: "/manifest.json"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} select-none overflow-y-scroll bg-zinc-900 text-white`}>
        <header className="bg-gray-950 flex items-center justify-center border-b border-b-gray-600 p-2 text-center">
          <h1 className={`${chakraPetch.className} text-xl text-pink-700`}>Chitransh-AI</h1>
        </header>
        {children}
      </body>
    </html>
  );
}