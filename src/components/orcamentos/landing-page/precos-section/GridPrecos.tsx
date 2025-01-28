import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface GridServicosProps {
  servicosSelecionados: Record<string, boolean>;
  setServicosSelecionados: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
  servicos: Record<string, { nome: string; descricao: string; preco?: number }>;
}

const GridServicos: React.FC<GridServicosProps> = ({
  servicosSelecionados,
  setServicosSelecionados,
  servicos,
}) => {
  const controls = useAnimation();
  const [refDiv, inViewDiv] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inViewDiv) controls.start({ opacity: 1, y: 0 });
  }, [inViewDiv, controls]);

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      animate={controls}
      ref={refDiv}
      initial={{ opacity: 0, y: 80 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      {Object.keys(servicosSelecionados).map((key, index) => (
        <motion.div
          key={key}
          className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-sm shadow-blue-600 bg-white justify-around hover:scale-105 duration-500 ease-in-out"
          onClick={() =>
            setServicosSelecionados({
              ...servicosSelecionados,
              [key]: !servicosSelecionados[key],
            })
          }
        >
          <div className="flex justify-between items-center gap-2">
            <h3 className="text-lg font-bold">{servicos[key].nome}</h3>
            <input
              type="checkbox"
              checked={servicosSelecionados[key]}
              className="form-checkbox h-5 w-5 text-blue-600 cursor-pointer"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {servicos[key].descricao}
          </p>
          <p className="mt-4 font-semibold text-blue-600">
            {servicos[key].preco
              ? "R$ " + servicos[key].preco.toFixed(2)
              : "Sob Consulta"}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GridServicos;
