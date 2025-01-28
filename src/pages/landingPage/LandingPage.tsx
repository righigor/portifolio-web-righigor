import { useParams } from 'react-router-dom';
import Header from '../../components/orcamentos/landing-page/Header';
import Description from '../../components/orcamentos/landing-page/Description';
import Precos from '../../components/orcamentos/landing-page/precos-section/Precos';
import Footer from '@/components/orcamentos/footer';

export default function LandingPage() {
  const { nome } = useParams();

  return (
    <div
      className="bg-blue-300 text-black"
    >
      <Header nome={ nome } />
      <main>

        <Description />

        <Precos />
      </main>
      <Footer />
    </div>
  );
}
