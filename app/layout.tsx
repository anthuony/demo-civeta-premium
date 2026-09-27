import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Civeta · Cocina de autor y café de especialidad en Puerto Ordaz",
 description: "Descubre Civeta: cocina de autor, café de especialidad, menú y espacios para compartir en Puerto Ordaz, Venezuela. Demostración independiente de experiencia digital.",
 metadataBase: new URL("https://civeta-experiencia-demo.none-deploy61.chatgpt.site"),
 robots: {index:false,follow:false},
 openGraph: {type:"website",locale:"es_VE",siteName:"Civeta · Demostración",title:"Civeta · El gusto de encontrarnos",description:"Cocina de autor y café de especialidad en Puerto Ordaz. Explora el menú y descubre Civeta."},
 icons: {icon:"/favicon.svg",shortcut:"/favicon.svg"},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es"><body>{children}</body></html>}
