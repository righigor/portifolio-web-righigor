import { LPServiceType } from "@/types/Services";
import {
  Check,
  Code,
  Wallet,
  Globe,
  Layout,
  Mail,
  Settings,
  Users,
  Map,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as ScrollLink } from "react-scroll";

export default function Description() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedServico, setSelectedServico] = useState<LPServiceType | null>(
    null
  );
  const LPService: LPServiceType[] = [
    {
      titulo: "Desenvolvimento de um site moderno e responsivo.",
      descricao:
        "O desenvolvimento de um site moderno e responsivo garante que a página se adapte perfeitamente a qualquer dispositivo, proporcionando uma experiência de usuário excepcional.",
      icone: <Code className="w-5 h-5 text-blue-600 flex-shrink-0" />,
    },
    {
      titulo: "Design personalizado, alinhado à identidade visual da marca.",
      descricao:
        "O design personalizado é criado para refletir a identidade visual da marca, garantindo um impacto visual memorável e alinhado aos valores do negócio.",
      icone: <Layout className="w-5 h-5 text-blue-600 flex-shrink-0" />,
    },
    {
      titulo: "Otimização de SEO básico",
      descricao:
        "A otimização de SEO básico é realizada para melhorar o ranqueamento do site nos motores de busca, aumentando sua visibilidade online.",
      icone: <Settings className="w-5 h-5 text-blue-600 flex-shrink-0" />,
    },
    {
      titulo:
        "Configuração de formulários de contato com integração ao e-mail.",
      descricao:
        "A configuração de formulários de contato com integração ao e-mail facilita a comunicação com os clientes, permitindo capturar leads de forma eficiente.",
      icone: <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />,
    },
    {
      titulo: "Integração com Google Maps e Redes Sociais.",
      descricao:
        "A integração com Google Maps e redes sociais melhora a localização e a interação da marca com o público, aumentando o engajamento.",
      icone: <Map className="w-5 h-5 text-blue-600 flex-shrink-0" />,
    },
    {
      titulo: "Suporte técnico e manutenção por 1 mês após o lançamento.",
      descricao:
        "Durante este período, é oferecido suporte completo para garantir que o site funcione corretamente após a publicação. Caso haja necessidade de ajustes ou pequenas melhorias, como mudanças no conteúdo ou correções de erros, essas alterações poderão ser solicitadas. Isso garante que qualquer problema imediato seja resolvido rapidamente, proporcionando a melhor experiência para o cliente.",
      icone: <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />,
    },
  ];
  const LPAdicionais: LPServiceType[] = [
    {
      titulo: "Integração com Google Analytics.",
      descricao:
        "A integração com Google Analytics permite monitorar acessos, analisar o tráfego e avaliar o desempenho de campanhas de marketing.",
      icone: <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />,
    },
    {
      titulo: "Opção de site bilíngue (Português e Inglês).",
      descricao:
        "A opção de site bilíngue, com funcionalidade de troca de idioma, permite a navegação completa em português e inglês, ampliando o alcance do negócio.",
      icone: <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />,
    },
    {
      titulo: "Painel administrativo para gestão de conteúdo (Strapi).",
      descricao:
        "O painel administrativo permite que o cliente atualize facilmente textos, imagens e outras informações do site, garantindo autonomia no gerenciamento do conteúdo.",
      icone: <Settings className="w-5 h-5 text-blue-600 flex-shrink-0" />,
    },
    {
      titulo: "Manutenção mensal pós-garantia.",
      descricao:
        "A manutenção mensal pós-garantia inclui atualizações de conteúdo, ajustes de layout, correção de erros técnicos e otimização contínua de SEO, mantendo o site sempre atualizado e funcional.",
      icone: <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />,
    },
  ];
  const controlsTitulo = useAnimation();
  const controlsIntro = useAnimation();
  const controlsPacote = useAnimation();
  const controlsAdicionais = useAnimation();
  const controlsBotao = useAnimation();

  // Verifica se os elementos estão visíveis na tela
  const [refTitulo, inViewTitulo] = useInView();
  const [refIntro, inViewIntro] = useInView();
  const [refPacote, inViewPacote] = useInView();
  const [refAdicionais, inViewAdicionais] = useInView();
  const [refBotao, inViewBotao] = useInView();

  // Ativa as animações quando os elementos estão visíveis
  useEffect(() => {
    if (inViewTitulo) controlsTitulo.start({ opacity: 1, y: 0 });
    if (inViewIntro) controlsIntro.start({ opacity: 1, y: 0 });
    if (inViewPacote) controlsPacote.start({ opacity: 1, x: 0 });
    if (inViewAdicionais) controlsAdicionais.start({ opacity: 1, x: 0 });
    if (inViewBotao) controlsBotao.start({ opacity: 1, y: 0 });
  }, [
    controlsTitulo,
    controlsIntro,
    controlsPacote,
    controlsAdicionais,
    controlsBotao,
    inViewTitulo,
    inViewIntro,
    inViewPacote,
    inViewAdicionais,
    inViewBotao,
  ]);

  const openModal = (servico: LPServiceType) => {
    setSelectedServico(servico);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section id="descricao" className="py-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        {/* Título */}
        <motion.h2
          ref={refTitulo}
          initial={{ opacity: 0, y: -100 }}
          animate={controlsTitulo}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          O que está incluso no desenvolvimento da sua Landing Page?
        </motion.h2>

        {/* Introdução */}
        <motion.p
          ref={refIntro}
          initial={{ opacity: 0, y: -100 }}
          animate={controlsIntro}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 text-center mb-12"
        >
          Ideal para profissionais autônomos, pequenos negócios, freelancers e
          empreendedores que buscam aumentar sua presença online, promover um
          produto ou serviço, e capturar leads. Confira abaixo tudo o que você
          recebe:
        </motion.p>

        {/* Lista de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
          {/* Pacote Básico */}
          <motion.div
            ref={refPacote}
            initial={{ opacity: 0, x: -100 }}
            animate={controlsPacote}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-blue-100 p-6 rounded-lg shadow-sm border-blue-600 border"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Check className="w-6 h-6 text-blue-600" />
              Pacote Básico
            </h3>
            <ul className="space-y-4">
              {LPService.map((servico, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 cursor-pointer hover:underline rounded-lg transition ease-in-out duration-300"
                  onClick={() => openModal(servico)}
                >
                  {servico.icone}
                  {servico.titulo}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Serviços Adicionais */}
          <motion.div
            ref={refAdicionais}
            initial={{ opacity: 0, x: 100 }}
            animate={controlsAdicionais}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-blue-100 p-6 rounded-lg shadow-sm border-blue-600 border"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Check className="w-6 h-6 text-blue-600" />
              Serviços Adicionais
            </h3>
            <ul className="space-y-4">
              {LPAdicionais.map((servico, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 cursor-pointer hover:underline rounded-lg transition ease-in-out duration-300"
                  onClick={() => openModal(servico)}
                >
                  {servico.icone}
                  {servico.titulo}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          ref={refBotao}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsBotao}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <ScrollLink
            to="precos"
            smooth={true}
            duration={500}
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 inline-flex items-center gap-2 cursor-pointer"
          >
            <Wallet className="w-5 h-5" />
            Confira os preços
          </ScrollLink>
        </motion.div>
      </div>
      {modalOpen && selectedServico && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                {selectedServico.titulo}
              </h3>
              <button onClick={closeModal}>
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            <p className="text-gray-700">{selectedServico.descricao}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
