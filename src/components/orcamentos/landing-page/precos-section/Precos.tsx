import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Wallet } from "lucide-react";
import GridServicos from "./GridPrecos";

export interface Servico {
  nome: string;
  descricao: string;
  preco?: number;
}

const servicos: Record<string, Servico> = {
  pacoteBasico: {
    nome: "Pacote Básico",
    descricao:
      "Desenvolvimento de um site responsivo + SEO básico + Formulários de contato + Integração com Google Maps e Redes Sociais.",
    preco: 550,
  },
  googleAnalytics: {
    nome: "Google Analytics",
    descricao:
      "Configuração para monitoramento de acessos, análise de tráfego e avaliação do desempenho de campanhas de marketing.",
    preco: 100,
  },
  adicionalBilingue: {
    nome: "Adicional Bilíngue",
    descricao:
      "Tradução completa e configuração para dois idiomas, com alternância de idioma via ícones de bandeiras.",
    preco: 300,
  },
  painelAdministrativo: {
    nome: "Painel Administrativo",
    descricao:
      "Implementação de um painel de controle (backoffice) para que o cliente possa atualizar conteúdos do site de forma autônoma.",
    preco: 400,
  },
  dominioHospedagem: {
    nome: "Domínio + Hospedagem",
    descricao:
      "Registro do domínio e hospedagem do site por 1 ano, com configuração inicial.",
    preco: 300,
  },
  dominioExtra: {
    nome: "Domínio + Hospedagem por mais de 1 ano",
    descricao:
      "Registro do domínio por períodos de 2 ou 3 anos e hospedagem do site por períodos de 2 ou 4 anos, com configuração inicial.",
  },
  dominioVps: {
    nome: "Hospedagem VPS",
    descricao:
      "Necessária para o painel administrativo (Strapi). Inclui hospedagem VPS por 1 ano.",
    preco: 400,
  },
  manutencaoMensal: {
    nome: "Manutenção Mensal",
    descricao:
      "Suporte contínuo com alterações no conteúdo e design do site, ajustes mais profundos em funcionalidades, correção de erros, atualização de sistemas, e melhorias gerais conforme necessidades do cliente.",
    preco: 100,
  },
};

export default function Precos() {
  const [servicosSelecionados, setServicosSelecionados] = useState<{
    [key: string]: boolean;
  }>(
    Object.keys(servicos).reduce((acc, key) => {
      acc[key] = key === "pacoteBasico" || key === "dominioHospedagem"; // Configuração inicial
      return acc;
    }, {} as { [key: string]: boolean })
  );

  const controlsTitulo = useAnimation();
  const controlsIntro = useAnimation();
  const controlsBtn = useAnimation();

  const [refTitulo, inViewTitulo] = useInView();
  const [refIntro, inViewIntro] = useInView();
  const [refBtn, inViewBtn] = useInView();

  useEffect(() => {
    if (inViewTitulo) controlsTitulo.start({ opacity: 1, y: 0 });
    if (inViewIntro) controlsIntro.start({ opacity: 1, y: 0 });
    if (inViewBtn) controlsBtn.start({ opacity: 1, y: 0 });
  }, [controlsTitulo, controlsIntro, inViewTitulo, inViewIntro, inViewBtn, controlsBtn]);

  const precoTotal = Object.keys(servicosSelecionados).reduce((total, key) => {
    return servicosSelecionados[key]
      ? total + (servicos[key]?.preco || 0)
      : total;
  }, 0);

  const gerarMensagemWhatsApp = () => {
    const listaServicos = Object.keys(servicosSelecionados)
      .filter((key) => servicosSelecionados[key])
      .map((key) => `${servicos[key]?.nome} (R$ ${servicos[key]?.preco || 0})`)
      .join("%0A");

    const mensagem = `Olá, gostaria de fechar um orçamento para os seguintes serviços:%0A%0A${listaServicos}%0A%0APreço Total: R$ ${precoTotal}`;
    return `https://wa.me/5531998397442?text=${mensagem}`;
  };

  return (
    <section id="precos" className="py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <motion.h2
          ref={refTitulo}
          initial={{ opacity: 0, y: -100 }}
          animate={controlsTitulo}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Tabela de Preços
        </motion.h2>

        <motion.p
          ref={refIntro}
          initial={{ opacity: 0, y: -100 }}
          animate={controlsIntro}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-gray-700 text-center mb-12"
        >
          Confira os valores dos nossos serviços e escolha o pacote que melhor
          atende às suas necessidades.
        </motion.p>

        <GridServicos
          servicosSelecionados={servicosSelecionados}
          setServicosSelecionados={setServicosSelecionados}
          servicos={servicos}
        />

        <motion.div
          ref={refBtn}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsBtn}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="mb-6">
            <span className="text-xl font-semibold">
              Preço Total: R$ {precoTotal}
            </span>
          </div>
          <a
            href={gerarMensagemWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300 inline-flex items-center gap-2 cursor-pointer"
          >
            <Wallet className="w-5 h-5" />
            Fechar Orçamento no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
