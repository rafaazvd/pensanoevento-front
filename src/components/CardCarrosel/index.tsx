"use client";

import React from "react";

export interface IEvent {
  id: string;
  image: string;
  link: string;
}

interface FeaturedCardProps {
  eventCard: IEvent;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ eventCard }) => {
  const handleClick = () => {
    window.open(eventCard.link, "_blank"); // Abre a URL em uma nova aba
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "relative",
        borderRadius: "12px",
        height: 350,
        width: 700,
        margin: "12px",
        padding: 0,
        backgroundColor: "transparent",
        overflow: "hidden", // Adiciona overflow hidden para garantir que o borderRadius funcione
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${eventCard.image})`, // Define a imagem de fundo
          backgroundSize: "cover", // Garante que a imagem cubra todo o componente
          backgroundRepeat: "no-repeat", // Evita que a imagem se repita
          backgroundPosition: "center", // Centraliza a imagem
          transition: "background-image 0.5s ease-in-out",
        }}
      />
    </div>
  );
};

export default FeaturedCard;
