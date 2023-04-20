import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/Components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<ChakraProvider>
				<Navbar />
				<Component {...pageProps} />
			</ChakraProvider>
		</SessionProvider>
	);
}
