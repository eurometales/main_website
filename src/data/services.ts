export interface ServiceDetail {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  tagLabel: string; // Short label used in product extras tags
  description: string;
  details: ServiceDetail[];
}

export const services: Service[] = [
  {
    id: "corte",
    name: "Corte",
    tagLabel: "Corte",
    description:
      "Realizamos corte de materiales y productos de todo tipo con alta precisión: perfiles, chapas, tubos, bobinas de acero y aceros especiales. Disponemos de corte recto, en inglete, longitudinal, transversal, láser, oxicorte y plasma.",
    details: [
      {
        title: "Corte de Perfiles",
        description:
          "Disponemos de sierras de corte, tanto de cinta como de disco, para el corte de perfiles estructurales, perfiles comerciales y tubos de todo tipo. Ofrecemos corte recto y corte en inglete en diferentes ángulos hasta 70°. Proporcionamos cortes de alta precisión y velocidad, completamente automáticos. Nuestro servicio de corte de perfiles está disponible para perfiles de un ancho máximo de 1.000 mm.",
      },
      {
        title: "Corte de Bobinas de Acero",
        description:
          "Realizamos el corte de bobinas de acero mediante corte transversal para obtener chapas de acero, tanto en formatos estándar (2.000×1.000, 2.500×1.250, 3.000×1.500, 6.000×2.000), como a medida. Procesamos materiales hasta 2.000 mm de ancho y 12 mm de espesor en laminados en caliente, y hasta 4 mm de espesor en laminados en frío y recubiertos. También cortamos bobinas mediante corte longitudinal para obtener bobinas o flejes a medida, en anchos desde 30 mm a 1.500 mm.",
      },
      {
        title: "Corte a Medida de Aceros Especiales",
        description:
          "Contamos con varias líneas de corte a medida para toda nuestra gama de Aceros Especiales. Tenemos capacidad para realizar series de cortes por cinta de hasta 520 mm de diámetro y cortes por disco de hasta 150 mm de diámetro.",
      },
      {
        title: "Corte Láser",
        description:
          "Podemos procesar toda la gama de tubos y perfiles, con una capacidad de hasta 12 metros de longitud. Ofrecemos corte normal (mecanizado plano) con aristas de corte recto, y corte 3D (mecanizado en biés) donde el cabezal de corte inclina hasta 45 grados.",
      },
      {
        title: "Oxicorte",
        description:
          "Contamos con una máquina de oxicorte de bancada con capacidad de 14.000 x 4.000 mm. Podemos cortar chapas de acero de hasta 300 mm de espesor. La máquina cuenta con 4 sopletes en paralelo que permiten cortar 4 piezas iguales simultáneamente. Toda la programación se realiza mediante herramientas CAD/CAM.",
      },
      {
        title: "Corte por Plasma",
        description:
          "Disponemos de un plasma de alta definición de bancada con capacidad de 26.000 x 3.000 mm, que permite el corte por plasma de chapas de acero de espesores variables (desde 1 mm hasta 30 mm). Cuenta con 2 antorchas en paralelo y una antorcha de biselado para preparación de bordes de soldadura.",
      },
    ],
  },
  {
    id: "taladro-fresado-marcado",
    name: "Taladro, Fresado y Marcado",
    tagLabel: "Taladro, Fresado y Marcado",
    description:
      "Ofrecemos taladrado, fresado y marcado de perfiles de acero con anchura de hasta 1.000 mm, de alta velocidad y precisión, completamente automatizado en los tres ejes.",
    details: [
      {
        title: "Taladrado y Fresado",
        description:
          "Realizamos taladrado y fresado de perfiles de acero con anchura de hasta 1.000 mm, con diámetro de taladro desde los 7 hasta los 40 mm, en los tres ejes y completamente automatizado, de alta velocidad y precisión.",
      },
      {
        title: "Marcado y Punzonado",
        description:
          "Realizamos escotes, agujeros ranurados, letras, números y figuras para marcar piezas. También proporcionamos el punzonado de chapa para distintos formatos. Contamos con un amplio surtido de utillaje con diferentes formas. Realizamos roscados, avellanados e insertado de pernos y separadores.",
      },
    ],
  },
  {
    id: "granallado-pintado",
    name: "Granallado y Pintado",
    tagLabel: "Granallado y Pintado",
    description:
      "Ofrecemos servicio de granallado y pintado en varios de nuestros productos. El granallado es un proceso que pulimenta y limpia el metal. Posteriormente se aplica la imprimación o el pintado del producto.",
    details: [
      {
        title: "Proceso de Granallado",
        description:
          "Contamos con varias máquinas de última generación, completamente automatizadas para llevar a cabo el proceso de granallado e imprimado. Aplicamos un granallado Sa 2½ según Norma ISO 8501. Con este proceso el cliente se asegura un producto completamente libre de óxido y mantenido en el tiempo hasta su montaje.",
      },
      {
        title: "Imprimación y Pintado",
        description:
          "Aplicamos una imprimación epoxi de 2 componentes, soldable e ignífuga, con una cobertura de 30 micras, o superior bajo petición del cliente. También llevamos a cabo el pintado final del producto según los requerimientos del cliente.",
      },
    ],
  },
  {
    id: "cizalla-plegado",
    name: "Cizalla y Plegado",
    tagLabel: "Cizalla y Plegado",
    description:
      "Proporcionamos servicios de corte de cizalla y plegado de chapa de acero, chapa galvanizada, aluminio y acero inoxidable.",
    details: [
      {
        title: "Corte de Cizalla",
        description:
          "Servicio de corte de chapa: largo de 3 m y espesor de chapa hasta 10 mm. Para la realización de placas de anclaje, platabandas y piezas a medida.",
      },
      {
        title: "Plegado de Chapa",
        description:
          "Servicio de plegado de chapa: largo de 3 m y espesor de chapa hasta 6 mm para la realización de omegas, remates para cerramientos, vierteaguas, canalones, albardillas, pesebrones, limahoyas y peldaños.",
      },
    ],
  },
  {
    id: "perfiles-personalizados",
    name: "Perfiles Abiertos Personalizados",
    tagLabel: "Perfiles Personalizados",
    description:
      "Además de nuestra extensa gama estándar de perfiles abiertos, podemos conformar perfiles totalmente personalizados según los planos del cliente.",
    details: [
      {
        title: "Perfiles Estándar (UNE EN 10162)",
        description:
          "Espesores de 0,6 a 6 mm. Angulares de alas iguales: de 15×15×1 mm a 120×120×6 mm. Angulares de alas desiguales: de 10×20×1 mm a 90×300×6 mm. Perfiles en U: de 10×10×10×1 mm hasta 80×320×80×6 mm. Omegas hasta altura 80. Lamas Z (celosía y 90°). Correas en C (max 300×4 mm). Correas en Z (hasta 300×3 mm).",
      },
      {
        title: "Perfiles Especiales",
        description:
          "Espesores de 1 a 6 mm, con más de 600 referencias diferentes. Desarrollo de nuevos perfiles según planos del cliente.",
      },
      {
        title: "Punzonado de Perfiles",
        description:
          "Espesor máximo 4 mm. Ancho máximo de bobina 480 mm, ancho máximo a punzonar: 315 mm. Entre 4 y 6 líneas diferentes de punzonado sobre el ancho. Posibilidad de punzonados repetitivos o individuales sobre el largo. Dimensión máxima punzón 65 mm.",
      },
    ],
  },
];

/** Map a raw extras string label to its service id */
export function extrasToServiceIds(extras: string): { label: string; serviceId: string }[] {
  return extras.split("|").map((part) => {
    const label = part.trim();
    const match = services.find(
      (s) => s.tagLabel.toLowerCase() === label.toLowerCase()
    );
    return { label, serviceId: match?.id ?? "" };
  });
}
