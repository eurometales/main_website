import { images, type ProductImageKey } from "@/config/images";

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  qualities?: string;
  lengths?: string;
  norm?: string;
  extras?: string;
  imageKey?: ProductImageKey;
}

export interface SubCategory {
  id: string;
  name: string;
  description?: string;
  imageKey?: ProductImageKey;
  items?: ProductItem[];
  extras?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageKey?: ProductImageKey;
  subcategories: SubCategory[];
}

export interface ProductSection {
  id: string;
  name: string;
  description: string;
  imageKey?: ProductImageKey;
  categories: Category[];
}

const STANDARD_QUALITIES = "S235, S235JR, S235J0, S235J2, S275, S275JR, S275J0, S275J2, S355, S355JR, S355J0, S355J2";

export const productSections: ProductSection[] = [
  {
    id: "hierro-acero",
    name: "Hierro y Acero",
    description:
      "Te ofrecemos una de las gamas más completas de acero y hierro del mercado: perfiles, chapas, tubos, corrugado y mallas electrosoldadas.",
      imageKey: "img-seccion-hierro-acero",
      categories: [
      {
        id: "largos",
        name: "Largos",
        description: "Perfiles estructurales, comerciales y laminados en frío.",
        imageKey: "img-cat-largos",
        subcategories: [
          {
            id: "perfil-estructural",
            name: "Perfil Estructural",
            description:
              "Perfiles estructurales o vigas de acero, laminados en caliente y diseñados para la fabricación de estructuras.",
            imageKey: "img-sub-perfil_estructural",
            items: [
              { id: "ipn", name: "Perfil IPN", description: "Perfil IPN de acero según UNE 36521:96 y UNE 10024:95.", qualities: STANDARD_QUALITIES, lengths: "Hasta 22 m" },
              { id: "ipe", name: "Perfil IPE", description: "Perfil IPE de acero según UNE 36526:94 y UNE 10034:94.", qualities: STANDARD_QUALITIES, lengths: "Hasta 22 m" },
              { id: "ipea", name: "Perfil IPEA", description: "Perfil IPEA de acero conforme a UNE 36526:94 y UNE 10034:94.", qualities: STANDARD_QUALITIES, lengths: "Hasta 22 m" },
              { id: "hea", name: "Perfil HEA", description: "Perfil HEA de acero según UNE 36526:94 y UNE 10034:94.", qualities: STANDARD_QUALITIES, lengths: "Hasta 22 m" },
              { id: "heb", name: "Perfil HEB", description: "Perfil HEB de acero conforme a UNE 36526:94 y UNE 10034:94.", qualities: STANDARD_QUALITIES, lengths: "Hasta 22 m" },
              { id: "hem", name: "Perfil HEM", description: "Perfil HEM de acero según UNE 36526:94 y UNE 10034:94.", qualities: STANDARD_QUALITIES, lengths: "Hasta 22 m" },
              { id: "upn", name: "Perfil UPN", description: "Perfil UPN de acero según UNE 36522:01 y UNE 10279:01.", qualities: STANDARD_QUALITIES, lengths: "Hasta 22 m" },
              { id: "upe", name: "Perfil UPE", description: "Perfil UPE de acero conforme a UNE 36522:01 y UNE 10279:01.", qualities: STANDARD_QUALITIES, lengths: "Hasta 22 m" },
            ],
            extras: "Corte | Taladro, Fresado y Marcado | Granallado y Pintado",
          },
          {
            id: "perfil-comercial",
            name: "Perfil Comercial",
            description:
              "Perfiles comerciales de acero, fabricados por laminación en caliente con gran variedad de usos en estructuras y construcciones.",
            imageKey:  "img-sub-perfil_comercial",
            items: [
              { id: "redondo", name: "Perfil redondo", description: "Según UNE 10060:04.", qualities: STANDARD_QUALITIES, lengths: "6 a 12 m" },
              { id: "cuadrado", name: "Perfil cuadrado", description: "Según UNE 10059:04.", qualities: STANDARD_QUALITIES, lengths: "6 a 12 m" },
              { id: "pletinas", name: "Pletinas y llantas", description: "Según UNE 10058:76.", qualities: STANDARD_QUALITIES, lengths: "6 a 12 m" },
              { id: "angular-iguales", name: "Perfil angular lados iguales", description: "Según UNE 10056:99.", qualities: STANDARD_QUALITIES, lengths: "6 a 12 m" },
              { id: "angular-desiguales", name: "Perfil angular lados desiguales", description: "Según UNE 10056-1:99.", qualities: STANDARD_QUALITIES, lengths: "6 a 12 m" },
              { id: "semiredondo", name: "Perfil semiredondo", description: "Según UNE 10056-1:99.", qualities: STANDARD_QUALITIES, lengths: "6 a 12 m" },
              { id: "simple-t", name: "Perfil Simple T", description: "Según UNE 10055:95.", qualities: STANDARD_QUALITIES, lengths: "6 a 12 m" },
              { id: "u-pequeno", name: "Perfil U Pequeño", description: "Según UNE 36525:01.", qualities: STANDARD_QUALITIES, lengths: "6 a 12 m" },
            ],
            extras: "Corte | Taladro, Fresado y Marcado | Granallado y Pintado",
          },
          {
            id: "perfil-laminado-frio",
            name: "Perfil Laminado en Frío",
            description:
              "Perfiles laminados en frío con estética cuidada, disponibles en tratamientos de pintado o galvanizado.",
            imageKey: "img-sub-perfil_laminado_en_frio",
            items: [
              { id: "angular-frio", name: "Perfil angular", description: "Según UNE-EN 10162:05 y UNE 36571:79.", qualities: "DC01, DD11, DX51D", lengths: "6 a 12 m" },
              { id: "u-frio", name: "Perfil en U", description: "Según UNE-EN 10162:05 y UNE 36572:80.", qualities: "DC01, DD11, DX51D", lengths: "6 a 12 m" },
              { id: "c-abierto", name: "Perfil en C abierto", description: "Según UNE-EN 10162:05 y UNE 36573:79.", qualities: "DC01, DD11, DX51D", lengths: "6 a 12 m" },
              { id: "zeta", name: "Perfil zeta", description: "Según UNE-EN 10162:05 y UNE 36576:79.", qualities: "DC01, DD11, DX51D", lengths: "6 a 12 m" },
              { id: "omega", name: "Perfil omega", description: "Según UNE-EN 10162:05 y UNE 36573:79.", qualities: "DC01, DD11, DX51D", lengths: "6 a 12 m" },
            ],
            extras: "Corte | Granallado y Pintado",
          },
        ],
      },
      {
        id: "planos",
        name: "Planos (Chapas)",
        description: "Extensa gama de chapas de acero laminadas en caliente y en frío, con distintos tratamientos.",
        imageKey: "img-cat-planos",
        subcategories: [
          { id: "chapa-caliente", name: "Chapa laminada en caliente", description: "Utilizada en construcción, automóviles, tubos y cilindros de gas.", imageKey: "img-sub-chapa_laminada_en_caliente", extras: "Corte | Granallado y Pintado | Cizalla y Plegado" },
          { id: "chapa-decapada", name: "Chapa decapada", description: "Buenas propiedades de maleabilidad y ductilidad. Usada en automoción y mecánica.", imageKey: "img-sub-chapa_decapada", extras: "Corte" },
          { id: "chapa-estriada", name: "Chapa estriada", description: "Relieve de estrías ideal para evitar deslizamientos en entornos secos y húmedos.", imageKey: "img-sub-chapa_estriada", extras: "Corte" },
          { id: "chapa-lagrimada", name: "Chapa lagrimada", description: "Superficie con formas de lágrimas, antideslizante y resistente a impactos.", imageKey: "img-sub-chapa_lagrimada", extras: "Corte" },
          { id: "chapa-corten", name: "Chapa corten", description: "Alto contenido en cobre, cromo y níquel. Tonalidad rojiza con protección natural.", imageKey: "img-sub-chapa_corten", extras: "Corte" },
          { id: "chapa-galvanizada", name: "Chapa galvanizada", description: "Tratamiento de protección frente a corrosión y oxidación.", imageKey: "img-sub-chapa_galvanizada", extras: "Corte" },
          { id: "chapa-prelacada", name: "Chapa prelacada", description: "Disponible en distintos colores: blanco pirineo, rojo teja, verde navarra y más.", imageKey: "img-sub-chapa_prelacada", extras: "Corte" },
          { id: "chapa-frio", name: "Chapa laminada en frío", description: "Versátil, empleada en automoción, muebles metálicos y electrodomésticos.", imageKey: "img-sub-chapa_laminada_en_frio", extras: "Corte | Cizalla y Plegado" },
          { id: "chapa-industrial", name: "Chapa industrial", description: "Utilizada en construcción y sector naval, obtenida por deformación termomecánica.", imageKey: "img-sub-chapa_industrial", extras: "Corte" },
          { id: "chapa-antidesgaste", name: "Chapa antidesgaste", description: "Indicada para situaciones de gran resistencia a la abrasión.", imageKey: "img-sub-chapa_antidesgaste", extras: "Corte" },
          { id: "placa-anclaje", name: "Placa de anclaje", description: "Planchas de acero para construcción, junto a perfiles estructurales. Cortadas a medida.", imageKey: "img-sub-placa_de_anclaje", extras: "Corte" },
        ],
      },
      {
        id: "tubos",
        name: "Tubos",
        description: "Amplia gama de tubos de acero: estructurales, de precisión y de conducción.",
        imageKey: "img-cat-tubos",
        subcategories: [
          {
            id: "tubo-conduccion",
            name: "Tubo de conducción",
            description: "Elevada resistencia mecánica, disponibles en negro y galvanizado.",
            imageKey: "img-sub-tubo_de_conduccion",
            items: [
              { id: "din2440-sold", name: "Tubo DIN 2440 con soldadura", description: "Calidad S195T, EN 10255." },
              { id: "l2-sold", name: "Tubo L2 con soldadura", description: "Calidad S195T, EN 10255, serie ligera 2." },
              { id: "aligerado", name: "Tubo aligerado con soldadura", description: "Calidad P235TR1, EN 10217." },
              { id: "din2440-sin", name: "Tubo DIN 2440 sin soldadura", description: "Calidad S195T, EN 10255." },
              { id: "din2448-sin", name: "Tubo DIN 2448 sin soldadura", description: "Serie pesada H, EN 10216." },
            ],
            extras: "Corte",
          },
          {
            id: "tubo-precision",
            name: "Tubo de precisión",
            description: "Acabados S1-negro, S2-decapado, S3-laminado en frío, S4-galvanizado.",
            imageKey: "img-sub-tubo_de_precision",
            items: [
              { id: "precision-redondo", name: "Tubo de precisión redondo", description: "EN 10305-3, longitud estándar 6 m." },
              { id: "precision-cuadrado", name: "Tubo de precisión cuadrado", description: "EN 10305-3, longitud estándar 6 m." },
              { id: "precision-rectangular", name: "Tubo de precisión rectangular", description: "EN 10305-3, longitud estándar 6 m." },
              { id: "precision-oval", name: "Tubo de precisión oval", description: "EN 10305-3, longitud estándar 6 m." },
            ],
            extras: "Corte",
          },
          {
            id: "tubo-galvanizado",
            name: "Tubo galvanizado",
            description: "Cubiertos con zinc para mayor resistencia a la corrosión.",
            imageKey: "img-sub-tubo_galvanizado",
            items: [
              { id: "galv-redondo", name: "Tubo galvanizado redondo", description: "EN-10305-3, recubrimiento Z200." },
              { id: "galv-cuadrado", name: "Tubo galvanizado cuadrado", description: "EN-10305-5, recubrimiento Z200." },
              { id: "galv-rectangular", name: "Tubo galvanizado rectangular", description: "EN-10305-5, recubrimiento Z200." },
              { id: "galv-oval", name: "Tubo galvanizado oval", description: "EN-10305-3, recubrimiento Z200." },
            ],
            extras: "Corte",
          },
          {
            id: "tubo-estructural",
            name: "Tubo estructural",
            description: "Fiabilidad y resistencia, mejor comportamiento frente a torsión y pandeo.",
            imageKey: "img-sub-tubo_estructural",
            items: [
              { id: "estr-redondo", name: "Tubo estructural redondo", description: "EN 10219, acabado negro, 6 y 12 m.", qualities: "S235JR, S275JR, S355JR y variantes J0, J2" },
              { id: "estr-cuadrado", name: "Tubo estructural cuadrado", description: "EN 10219, acabado negro, 6 y 12 m.", qualities: "S235JR, S275JR, S355JR y variantes J0, J2" },
              { id: "estr-rectangular", name: "Tubo estructural rectangular", description: "EN 10219, acabado negro, 6 y 12 m.", qualities: "S235JR, S275JR, S355JR y variantes J0, J2" },
            ],
            extras: "Corte",
          },
          {
            id: "tubo-laminado-frio",
            name: "Tubo laminado en frío",
            description: "Control exhaustivo del resultado, acabado fino y preciso.",
            imageKey: "img-sub-tubo_laminado_en_frio",
            items: [
              { id: "lf-redondo", name: "Tubo laminado en frío redondo", description: "EN 10305-3." },
              { id: "lf-cuadrado", name: "Tubo laminado en frío cuadrado", description: "EN 10305-5." },
              { id: "lf-rectangular", name: "Tubo laminado en frío rectangular", description: "EN 10305-5." },
              { id: "lf-oval", name: "Tubo laminado en frío oval", description: "EN 10305-3." },
            ],
            extras: "Corte",
          },
          { id: "perfil-carpinteria", name: "Perfil de carpintería", description: "Para puertas y ventanas. Disponible en decapado y galvanizado. EN 10305.", imageKey: "img-sub-tubo_de_Carpinteria", extras: "Corte" },
          {
            id: "perfil-conformado-frio",
            name: "Perfil conformado en frío",
            description: "Perfiles omega, zeta, angulares, en U y C abierto, con acabados atractivos.",
            imageKey: "img-sub-tubo_conformado_en_frio",
            items: [
              { id: "conf-angular", name: "Perfil angular", description: "UNE-EN 10162:05 y UNE 36571:79.", qualities: "DC01, DD11, DX51D", lengths: "6 a 12 m" },
              { id: "conf-u", name: "Perfil en U", description: "UNE-EN 10162:05 y UNE 36572:80.", qualities: "DC01, DD11, DX51D", lengths: "6 a 12 m" },
              { id: "conf-c", name: "Perfil en C abierto", description: "UNE-EN 10162:05 y UNE 36573:79.", qualities: "DC01, DD11, DX51D", lengths: "6 a 12 m" },
              { id: "conf-zeta", name: "Perfil zeta", description: "UNE-EN 10162:05 y UNE 36576:79.", qualities: "DC01, DD11, DX51D" },
              { id: "conf-omega", name: "Perfil omega", description: "UNE-EN 10162:05 y UNE 36573:79.", qualities: "DC01, DD11, DX51D", lengths: "6 a 12 m" },
            ],
            extras: "Corte | Granallado y Pintado",
          },
        ],
      },
      {
        id: "corrugado",
        name: "Corrugado y Mallazo",
        description: "Acero corrugado para construcción de elementos estructurales de hormigón armado.",
        imageKey: "img-cat-corrugado",
        subcategories: [
          { id: "corrugado-barras", name: "Acero corrugado", description: "Barras corrugadas B400SD y B500SD según UNE36065:11. En barras de 6 o 12 m y rollos.", imageKey: "img-sub-acero_corrugado", extras: "Corte" },
          { id: "grafil", name: "Grafil", description: "Alambre corrugado de acero B500T, alta resistencia y durabilidad.", imageKey: "img-sub-grafil", extras: "Corte" },
          {
            id: "malla",
            name: "Malla electrosoldada",
            description: "Calidades B500T, B500S, B500SD. Paneles de 6.000×2.200 mm y 3.000×2.200 mm.",
            items: [
              { id: "malla-estandar", name: "Malla estándar", description: "Gran variedad de formatos comunes." },
              { id: "malla-especial", name: "Malla especial", description: "Dimensiones variables según necesidades del cliente." },
              { id: "malla-no-estr", name: "Malla no estructural", description: "Distintos formatos y medidas." },
            ],
            imageKey: "img-sub-malla_electrosoldada",
            extras: "Corte",
          },
          { id: "celosia", name: "Armadura en celosía", description: "Formada por elementos superior, inferiores y de conexión en zig-zag. Formatos de 6,0 m y 12,80 m.",imageKey: "img-sub-acero_armadura_en_celosia", extras: "Corte" },
        ],
      },
      {
        id: "acero-activo",
        name: "Acero Activo",
        description: "Acero diseñado para refuerzo estructural en hormigón pretensado.",
        imageKey: "img-cat-acero-activo",
        subcategories: [
          { id: "alambre-pretensado", name: "Alambre pretensado",   imageKey: "img-sub-alambre_pretensado",description: "Acero alto carbono y baja relajación para hormigón pretensado. Bobinas de 1.250 kg o 2.500 kg.", extras: "Corte" },
          { id: "cordon", name: "Cordón",  imageKey: "img-sub-cordon", description: "Seis alambres exteriores trenzados alrededor del alambre central. Bobinas de 3.200 kg o 4.000 kg.", extras: "Corte" },
        ],
      },
      {
        id: "complementarios",
        name: "Productos Complementarios",
        description: "Material auxiliar: alambres, soldadura, puntas y más.",
        imageKey: "img-cat-complementarios",
        subcategories: [
          { id: "alambre", name: "Alambre",  imageKey: "img-sub-alambre", description: "Galvanizado, gris, plastificado y recocido. Todos los diámetros." },
          { id: "soldadura", name: "Soldadura",  imageKey: "img-sub-soldadura", description: "Alambres SG2 (0,8/1,0/1,2 mm), electrodos rutilo (2,5/3,2), discos de corte y desbaste." },
          { id: "otros", name: "Otros productos",  imageKey: "img-sub-otros_productos", description: "Puntas de cabeza plana, curvas de soldar, materiales de pintura, tubos invernadero y más." },
        ],
      },
    ],
  },
  {
    id: "aceros-especiales",
    name: "Aceros Especiales",
    description:
      "Gran variedad de aceros especiales: calibrados, laminados, rectificados, aleados y de fácil mecanización. Más de 15.000 toneladas de stock permanente.",
    imageKey: "img-seccion-aceros-especiales",
    categories: [
      {
        id: "acero-carbono",
        name: "Acero al Carbono",
        description: "Para construcción mecánica, soldable si el contenido de carbono es inferior a 0,25%.",
        imageKey: "img-cat-acero-carbono",
        subcategories: [
          { id: "s355", name: "S355 / ST-52.3", description: "Resistencia media, buena soldabilidad. Aplicaciones: bulones, cadenas, ejes, bielas y estructuras. Identificado en color marrón." },
          { id: "c45", name: "C45 / F114", description: "Resistencia 60-80 Kg/mm², no recomendable para soldar. Aplicaciones: ejes, bielas, maquinaria agrícola. Identificado en color amarillo." },
        ],
      },
      {
        id: "acero-aleado",
        name: "Acero Aleado",
        description: "Temple y revenido o cementación, con Mn, Cr, Ni y Mo para elevadas características mecánicas.",
        imageKey: "img-cat-acero_aleado",
        subcategories: [
          { id: "f1252", name: "F1252 / 42CrMo4", description: "Elevada resistencia y buena tenacidad. Ejes de transmisión, cigüeñales, palieres. Azul (tratado) / Azul con franja blanca (recocido)." },
          { id: "f1272", name: "F1272 / 34CrNiMo6", description: "Elevada resistencia, 85-120 kg/mm². Identificado en color naranja." },
          { id: "f1522", name: "F1522 / 20NiCrMo2", description: "Para piezas cementadas, resistencia 90-110 Kg/mm². Engranajes, pernos, rodamientos. Color negro." },
          { id: "f155", name: "F155 / 18CrMo4 / 20MnCr5", description: "Bajo carbono, elevada resistencia al desgaste. Engranajes, piñones. Color rosa." },
        ],
      },
      {
        id: "acero-calibrado",
        name: "Acero Calibrado",
        description: "Por estirado en frío, torneado o rectificado. Mejor tolerancia dimensional y fácil mecanización.",
        imageKey: "img-cat-acero_calibrado",
        subcategories: [
          { id: "cal-s235", name: "Carbono S235JRC/F1", description: "Bajo en carbono, soldable. Remaches, pernos, estructuras. Color verde." },
          { id: "cal-c45", name: "Carbono C45/F114", description: "Resistencia media, no recomendable para soldar. Manguitos, tornillos, arandelas. Color amarillo." },
          { id: "cal-f211", name: "Fácil mecanización 11SMn30/F211", description: "Alta maquinabilidad, soldable. Color rojo." },
          { id: "cal-f212", name: "Fácil mecanización 11SMnPb30/F212", description: "Mejor maquinabilidad que F211, no apto para soldar. Color negro." },
        ],
      },
      {
        id: "barra-perforada",
        name: "Barra Perforada",
        description: "Amplio stock para usos mecánicos. Normas EN 10297, EN 10294 y EN 10210.",
        imageKey: "img-cat-barra_perforada",
        subcategories: [
          { id: "barra-perf-carbono", name: "Barra perforada acero al carbono", description: "Calidades E355, E470, S355J2H, S355NH. Exterior: 30-660 mm, Interior: 16-610 mm." },
          { id: "barra-perf-inox", name: "Barra perforada acero inoxidable", description: "Calidades 304L y 316L (también 316Ti y 321Ti). Exterior: 32-250 mm, Interior: 16-200 mm." },
        ],
      },
      {
        id: "barra-cromada",
        name: "Barra Cromada",
        description: "Precisión con tolerancias ajustadas, mayor dureza superficial y resistencia a la corrosión.",
        imageKey: "img-cat-barra_cromada",
        subcategories: [
          { id: "cromada-200h", name: "Barra cromada 200H R.9", description: "Acero C45E y 42CrMo4. EN-10277-5 / EN-10083-2. Exterior: 8-200 mm." },
          { id: "cromada-500h", name: "Barra cromada 500H R.10", description: "Resistencia a corrosión 500 horas. C45E y 42CrMo4. Exterior: 20-110 mm." },
          { id: "cromada-inox", name: "Barra cromada inoxidable", description: "AISI 304, 316, 347. Para entornos marinos, alimentarios y petroquímicos. Exterior: 20-100 mm." },
        ],
      },
      {
        id: "acero-inoxidable",
        name: "Acero Inoxidable",
        description: "Aleación con mínimo 10,5% de cromo. Acabados bruto 2B, satinado y pulido con PVC.",
        imageKey: "img-cat-acero_inoxidable",
        subcategories: [
          { id: "chapa-inox", name: "Chapa inoxidable", description: "Formatos 2000×1000 mm y 3000×1500 mm. Espesores de 1 a 3 mm.", extras: "Corte | Cizalla y Plegado" },
        ],
      },
    ],
  },
];
