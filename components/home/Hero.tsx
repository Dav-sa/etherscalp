import Card from "@/components/home/card";
import { Footer } from "@/components/home/Footer";
import { alchemy } from "@/components/alchemy/alchemy";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";


export const Hero = () => {
  return (
    <motion.div
    className="max-w-xl px-5 xl:px-0"
    initial="hidden"
    whileInView="show"
    animate="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }} 
  >
    <motion.h1
      className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      <Balancer>Explore the Ethereum network</Balancer>
    </motion.h1>
    <motion.p
      className="mt-6 text-center text-gray-500 md:text-xl"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      <Balancer>
        A block explorer for the Ethereum network, powered by Next.js and
        Alchemy
      </Balancer>
    </motion.p>
    <motion.div
      className="mx-auto mt-6 flex items-center justify-center space-x-5"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      <a
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
        href="https://github.com/DavSab/etherscalp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
        <p>Star on GitHub</p>
      </a>
    </motion.div>
  </motion.div>
  )
}