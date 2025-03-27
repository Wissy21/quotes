import Header from './components/Header'
import QuoteBox from './components/QuoteBox'
import Footer from './components/Footer'

export default async function Home() {
  return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow p-4">
          <QuoteBox />
        </main>
        <Footer />
      </div>
  )
}