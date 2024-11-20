'use client'
import NavBar from "@/components/nav/NavBar";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <section className="pl-10 flex  justify-start items-center bg-white w-full h-[800px]">
        <motion.div
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          whileInView={{opacity:1, x: 0}}
          transition={{ duration: 0.5 }}
          style={{  padding: "20px", borderRadius: "8px"}}
          exit={{opacity: 0, x:-50}}
        >
          <p className="text-black w-[300px]">Por um ambiente corporativo mais saudável e justo.Nosso programa oferece treinamentos em tecnologias essenciais às empresas que investem em qualidade de vida para seus funcionários por meio de convênios de saúde.</p>
        </motion.div>

      </section>
      <section className="pr-10 flex  justify-end items-center  sectTion2 w-full h-[800px]">
        <motion.div
         initial={{ opacity: 0, x: -100 }} 
         animate={{ opacity: 1, y: 0 }} 
         whileInView={{opacity:1, x: 0}}
         transition={{ duration: 0.5 }}
         style={{  padding: "20px", borderRadius: "8px"}}
         exit={{opacity: 0, x:-50}}
        >
        <p className="text-white w-[300px]"> Mais do que benefícios físicos, promovemos saúde mental com um propósito transformador.
        Imagine seus colaboradores passando por sessões terapêuticas em realidade virtual, apoiados por psicólogos especializados, que vão além da terapia tradicional. </p>
        </motion.div>

      </section>
      <section className="pl-10 flex  justify-start items-center  bg-white w-full h-[800px]">
        <motion.div
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, y: 0 }} 
          whileInView={{opacity:1, x: 1}}
          transition={{ duration: 0.5 }}
          style={{  padding: "20px", borderRadius: "8px"}}
          exit={{opacity: 0, x: -100}}
        >
        <p className="text-black w-[300px]"> Analisamos perfis comportamentais para identificar atitudes que podem contribuir para a desigualdade de gênero no ambiente corporativo. Com esses insights, ajudamos sua empresa a cumprir a nova lei de projetos de igualdade de gênero, prevenindo penalidades e promovendo um ambiente inclusivo e harmonioso</p>
        </motion.div>

      </section>
    </div>
  );
}
