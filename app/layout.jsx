import Header from './components/Header'
import Provider from './components/Provider'
import './globals.css'

export const metadata = {
	title: 'PODCAST APP',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="manifest" href="/manifest.json"/>
				<meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff"></meta>
			</head>
			<body className='bg-White'>
				<Provider>
					<Header />
					<main>{children}</main>
				</Provider>
			</body>
		</html>
	)
}
