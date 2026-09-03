import Footer from "./components/Footer";
import Header from "./components/Header";
import MissionCard from "./components/MissionCard";
import NoticeBanner from "./components/NoticeBanner";

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />

      <main className="mx-auto flex max-w-4xl flex-col gap-6 px-8 py-12">
        <NoticeBanner />
        <MissionCard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
