import React from "react";
import { img1, img2, img3, img4, img5, img6, img7, img8 } from "../assets";

export const NosProjet = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 mb-10">
        <div>
          <h1 className="font-poppins text-move font-semibold tracking-[5px] uppercase text-center cursor-pointer text-[35px]">
            Nos Projets
          </h1>
          <div className="w-44 h-2 bg-move mx-auto my-5 fade-in"></div>
        </div>
        <div>
          <h3 className="font-poppins text-gray-300 font-semibold text-center cursor-pointer text-[17px]">
            Plongez dans notre collection de projets réussis qui démontrent
            notre capacité à transformer des idées innovantes en réalités
            tangibles. Chaque projet est le reflet de notre engagement envers
            l'excellence et notre passion pour la création de solutions
            numériques impactantes.
          </h3>
        </div>
      </div>

      <div className="w-full h-auto grid lg:grid-cols-2 gap-10">
        <div>
          <div className="flip-card w-full lg:h-72 h-auto mb-10 overflow-hidden">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={img1}
                  alt="Projet 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flip-card-back">
                <div className="w-full h-full px-10 py-2 bg-red-300 overflow-y-auto">
                  <h2 className="font-poppins font-bold text-move text-2xl">
                    Gestionnaire de Projets Agile
                  </h2>
                  <p className="text-white text-justify text-lg">
                    Le Gestionnaire de Projets Agile est une application web
                    conçue pour aider les équipes à gérer leurs projets en
                    utilisant les principes de la méthodologie Agile...
                  </p>
                  <p className="text-move text-lg">
                    <strong>Fonctionnalités clés :</strong>
                  </p>
                  <ul className="text-white text-lg list-disc list-inside">
                    <li>Création et gestion des sprints</li>
                  </ul>
                  <p className="text-move text-lg">
                    <strong>Technologies utilisées :</strong>
                  </p>
                  <ul className="text-white text-lg list-disc list-inside">
                    <li>React.js pour le frontend</li>
                    <li>Node.js et Express pour le backend</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card w-full h-64 mb-10 overflow-hidden">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={img2}
                  alt="Projet 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flip-card-back">
                <div className="w-full h-full px-10 py-2 overflow-y-auto">
                  <h2 className="font-poppins font-bold text-move text-2xl">
                    Gestionnaire de Projets Agile
                  </h2>
                  <p className="text-white text-justify text-lg">
                    Le Gestionnaire de Projets Agile est une application web
                    conçue pour aider les équipes à gérer leurs projets en
                    utilisant les principes de la méthodologie Agile...
                  </p>
                  <p className="text-move text-lg">
                    <strong>Fonctionnalités clés :</strong>
                  </p>
                  <ul className="text-white text-lg list-disc list-inside">
                    <li>Création et gestion des sprints</li>
                  </ul>
                  <p className="text-move text-lg">
                    <strong>Technologies utilisées :</strong>
                  </p>
                  <ul className="text-white text-lg list-disc list-inside">
                    <li>React.js pour le frontend</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card w-full h-96 mb-10 overflow-hidden">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={img3}
                  alt="Projet 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flip-card-back h-full">
                <div className="w-full h-full px-10 py-2 overflow-y-auto">
                  <h2 className="font-poppins font-bold text-move text-2xl">
                    Gestionnaire de Projets Agile
                  </h2>
                  <p className="text-white text-justify text-lg">
                    Le Gestionnaire de Projets Agile est une application web
                    conçue pour aider les équipes à gérer leurs projets en
                    utilisant les principes de la méthodologie Agile...
                  </p>
                  <p className="text-move text-lg">
                    <strong>Fonctionnalités clés :</strong>
                  </p>
                  <ul className="text-white text-lg list-disc list-inside">
                    <li>Création et gestion des sprints</li>
                    <li>Suivi des tâches et des user stories</li>
                  </ul>
                  <p className="text-move text-lg">
                    <strong>Technologies utilisées :</strong>
                  </p>
                  <ul className="text-white text-lg list-disc list-inside">
                    <li>React.js pour le frontend</li>
                    <li>Node.js et Express pour le backend</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flip-card w-full h-80 mb-10 overflow-hidden">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={img4}
                  alt="Projet 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flip-card-back">
                <div className="w-full h-full px-10 py-2 overflow-y-auto">
                  <h2 className="font-poppins font-bold text-move text-2xl">
                    Gestionnaire de Projets Agile
                  </h2>
                  <p className="text-white text-justify text-lg">
                    Le Gestionnaire de Projets Agile est une application web
                    conçue pour aider les équipes à gérer leurs projets en
                    utilisant les principes de la méthodologie Agile...
                  </p>
                  <p className="text-move text-lg">
                    <strong>Fonctionnalités clés :</strong>
                  </p>
                  <ul className="text-white text-lg list-disc list-inside">
                    <li>Création et gestion des sprints</li>
                    <li>Suivi des tâches et des user stories</li>
                  </ul>
                  <p className="text-move text-lg">
                    <strong>Technologies utilisées :</strong>
                  </p>
                  <ul className="text-white text-lg list-disc list-inside">
                    <li>React.js pour le frontend</li>
                    <li>Node.js et Express pour le backend</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card w-full h-80 mb-10 overflow-hidden">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={img5}
                  alt="Projet 5"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flip-card-back">
                <div className="w-full h-full px-10 py-2 overflow-y-auto">
                  <h2 className="font-poppins font-bold text-move text-2xl">
                    Gestionnaire de Projets Agile
                  </h2>
                  <p className="text-white text-justify text-lg">
                    Le Gestionnaire de Projets Agile est une application web
                    conçue pour aider les équipes à gérer leurs projets en
                    utilisant les principes de la méthodologie Agile...
                  </p>
                  <p className="text-move text-lg">
                    <strong>Fonctionnalités clés :</strong>
                  </p>
                  <ul className="text-white text-lg list-disc list-inside">
                    <li>Création et gestion des sprints</li>
                    <li>Suivi des tâches et des user stories</li>
                  </ul>
                  <p className="text-move text-lg">
                    <strong>Technologies utilisées :</strong>
                  </p>
                  <ul className="text-white text-lg list-disc list-inside">
                    <li>React.js pour le frontend</li>
                    <li>Node.js et Express pour le backend</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-card w-full h-96 mb-10 overflow-hidden">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={img6}
                  alt="Projet 6"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flip-card-back">
                <div className="w-full h-full px-10 py-2 overflow-y-auto">
                  <h2 className="font-poppins font-bold text-move text-2xl">
                    Gestionnaire de Projets Agile
                  </h2>
                  <p className="text-white text-justify text-lg">
                    Le Gestionnaire de Projets Agile est une application web
                    conçue pour aider les équipes à gérer leurs projets en
                    utilisant les principes de la méthodologie Agile...
                  </p>
                  <p className="text-move text-lg">
                    <strong>Fonctionnalités clés :</strong>
                  </p>
                  <ul className="text-white text-lg list-disc list-inside">
                    <li>Création et gestion des sprints</li>
                    <li>Suivi des tâches et des user stories</li>
                  </ul>
                  <p className="text-move text-lg">
                    <strong>Technologies utilisées :</strong>
                  </p>
                  <ul className="text-white text-lg list-disc list-inside">
                    <li>React.js pour le frontend</li>
                    <li>Node.js et Express pour le backend</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

