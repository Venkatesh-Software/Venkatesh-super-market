import Header from '../../components/Header';
import MainContent from '../../components/MainComponent';
import GalleryPage from '../../components/GalleryPage';
import ContactPage from '../../components/ContactPage';

export default function Home() {
  return (
    <div className="w-full max-w-[480px] sm:max-w-sm mx-auto bg-gradient-to-br from-orange-500 to-black shadow-lg rounded-lg overflow-scroll" style={{ scrollbarWidth: 'none' }}>
            {/* <Header /> */}
            <MainContent />
            <GalleryPage />
            <ContactPage />
        </div>
  );
}