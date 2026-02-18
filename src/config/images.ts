/**
 * Mapa centralizado de imágenes del sitio.
 * En el futuro, estas rutas vendrán de la base de datos (Supabase Storage).
 * 
 * Nomenclatura: img-XX-nombre-descriptivo
 * XX = número de referencia del documento original (Insertar Imagen X)
 * 
 * Para cambiar una imagen:
 * 1. Coloca la nueva imagen en src/assets/images/products/
 * 2. Actualiza el import correspondiente aquí
 * 3. La imagen se actualizará en toda la web automáticamente
 */

// Landing
import heroBg from "@/assets/images/landing/hero-bg.jpg";
import landing_largos from "@/assets/images/landing/1_Largos.jpg";
import landing_planos from "@/assets/images/landing/2_Planos.jpg";
import landing_tubos from "@/assets/images/landing/3_Tubos.jpg";
import landing_corrugado from "@/assets/images/landing/4_Corrugado_y_Mallazo.jpg";
import landing_aceros_especiales from "@/assets/images/landing/5_Aceros_Especiales.jpg";
import landing_acero_inoxidable from "@/assets/images/landing/6_Acero_Inoxidable.jpg";

// ///////Productos - Hierro y Acero
import producto_hierro_acero from "@/assets/images/products/1_Hierro_y_Acero.jpg";
// Productos - largos
import producto_largos from "@/assets/images/products/2_Largos.jpg";
import producto_perfil_estructural from "@/assets/images/products/3_Perfil_estructural.jpg";
import producto_perfil_comercial from "@/assets/images/products/4_Perfil_Comercial.jpg";
import producto_perfil_laminado_en_frio from "@/assets/images/products/5_Perfil_Laminado_en_frio.jpg";
// Productos - Chapas
import producto_planos from "@/assets/images/products/6_Planos.jpg";
import producto_chapa_laminada_en_caliente from "@/assets/images/products/7_Chapa_Laminada_en_Caliente.jpg";
import producto_chapa_decapada from "@/assets/images/products/8_Chapa_Decapada.jpg";
import producto_chapa_estriada from "@/assets/images/products/9_Chapa_Estriada.jpg";
import producto_chapa_lagrimada from "@/assets/images/products/10_Chapa_Lagrimada.jpg";
import producto_chapa_corten from "@/assets/images/products/11_Chapa_Corten.jpg";
import producto_chapa_galvanizada from "@/assets/images/products/12_Chapa_Galvanizada.jpg";
import producto_chapa_prelacada from "@/assets/images/products/13_Chapa_Prelacada.jpg";
import producto_chapa_laminada_en_frio from "@/assets/images/products/14_Chapa_Laminada_en_Frio.jpg";
import producto_chapa_industrial from "@/assets/images/products/15_Chapa_Industrial.jpg";
import producto_chapa_antidesgaste from "@/assets/images/products/16_Chapa_Antidesgaste.jpg";
import producto_placa_de_anclaje from "@/assets/images/products/17_Placa_de_Anclaje.jpg";
// Productos - Tubos
import producto_tubos from "@/assets/images/products/18_Tubos.jpg";
import producto_tubos_de_conduccion from "@/assets/images/products/19_Tubos_de_Conduconduccion.jpg";
import producto_tubo_de_precision from "@/assets/images/products/20_Tubo_de_precision.jpg";
import producto_tubo_galvanizado from "@/assets/images/products/21_Tubo_Galvanizado.jpg";
import producto_tubo_estructural from "@/assets/images/products/22_Tubo_Estructural.jpg";
import producto_tubo_laminado_en_frio from "@/assets/images/products/23_Tubo_Laminado_en_Frio.jpg";
import producto_perfil_de_Carpinteria from "@/assets/images/products/24_Perfil_de_Carpinteria.jpg";
import producto_perfil_conformado_en_frio from "@/assets/images/products/25_Perfil_Conformado_en_Frio.jpg";

// Productos - Corrugado y Mallazo
import producto_corrugado_y_mallazo from "@/assets/images/products/26_Corrugado_y_Mallazo.jpg";
import producto_acero_corrugado from "@/assets/images/products/27_Acero_Corrugado.jpg";
import producto_grafil from "@/assets/images/products/28_Grafil.jpg";
import producto_malla_electrosoldada from "@/assets/images/products/29_Malla_Electrosoldada.jpg";
import producto_armadura_en_celosia from "@/assets/images/products/30_Armadura_en_Celosia.jpg";

// Productos - Acero Activo
import producto_acero_activo from "@/assets/images/products/31_Acero_Activo.jpg";
import producto_alambre_pretensado from "@/assets/images/products/32_Alambre_Pretensado.jpg";
import producto_cordon from "@/assets/images/products/33_Cordon.jpg";

// Productos - Productos Complementarios
import producto_productos_complementarios from "@/assets/images/products/34_Productos_Complementarios.jpg";
import producto_alambre from "@/assets/images/products/35_Alambre.jpg";
import producto_soldadura from "@/assets/images/products/36_Soldadura.jpg";
import producto_otros_productos from "@/assets/images/products/37_Otros_Productos.jpg";

// ///////Productos - Aceros Especiales
import producto_aceros_especiales from "@/assets/images/products/38_Aceros_Especiales.jpg";
// Productos - Acero al Carbono
import producto_acero_al_carbono from "@/assets/images/products/39_Acero_al_Carbono.jpg";
// Productos - Acero Aleado
import producto_acero_aleado from "@/assets/images/products/40_Acero_Aleado.jpg";
// Productos - Acero calibrado
import producto_acero_calibrado from "@/assets/images/products/41_Acero_Calibrado.jpg";
// Productos - Barra Perforada
import producto_barra_perforada from "@/assets/images/products/42_Barra_Perforada.jpg";

// Productos - Barra Cromada
import producto_barra_cromada from "@/assets/images/products/43_Barra_Cromada_Inoxidable.jpg";
import producto_barra_cromada_200h from "@/assets/images/products/43_Barra_Cromada_Inoxidable.jpg";
import producto_barra_cromada_500h from "@/assets/images/products/43_Barra_Cromada_Inoxidable.jpg";
import producto_barra_cromada_inoxidable from "@/assets/images/products/43_Barra_Cromada_Inoxidable.jpg";

// Productos - Acero Inoxidable
import producto_acero_inoxidable from "@/assets/images/products/44_Acero_Inoxidable.jpg";




export const images = {
  landing: {
    hero: heroBg,
    largos: landing_largos,
    planos: landing_planos,
    tubos: landing_tubos,
    corrugado: landing_corrugado,
    aceros_especiales: landing_aceros_especiales,
    acero_inoxidable: landing_acero_inoxidable,
  },
  products: {

// ///////Productos - Hierro y Acero -------------------------------------
"img-seccion-hierro-acero": producto_hierro_acero,
// Productos - largos
  "img-cat-largos": producto_largos,
//...
      "img-sub-perfil_estructural": producto_perfil_estructural,
      "img-sub-perfil_comercial": producto_perfil_comercial,
      "img-sub-perfil_laminado_en_frio": producto_perfil_laminado_en_frio,

// Productos - Chapas 
  "img-cat-planos": producto_planos,
//...
      "img-sub-chapa_laminada_en_caliente": producto_chapa_laminada_en_caliente,
      "img-sub-chapa_decapada": producto_chapa_decapada,
      "img-sub-chapa_estriada": producto_chapa_estriada,
      "img-sub-chapa_lagrimada": producto_chapa_lagrimada,
      "img-sub-chapa_corten": producto_chapa_corten,
      "img-sub-chapa_galvanizada": producto_chapa_galvanizada,
      "img-sub-chapa_prelacada": producto_chapa_prelacada,
      "img-sub-chapa_laminada_en_frio": producto_chapa_laminada_en_frio,
      "img-sub-chapa_industrial": producto_chapa_industrial,
      "img-sub-chapa_antidesgaste": producto_chapa_antidesgaste,
      "img-sub-placa_de_anclaje": producto_placa_de_anclaje,
      
// Productos - Tubos
  "img-cat-tubos": producto_tubos,
//...
      "img-sub-tubo_de_conduccion": producto_tubos_de_conduccion,
      "img-sub-tubo_de_precision": producto_tubo_de_precision,
      "img-sub-tubo_galvanizado": producto_tubo_galvanizado,
      "img-sub-tubo_estructural": producto_tubo_estructural,
      "img-sub-tubo_laminado_en_frio": producto_tubo_laminado_en_frio,
      "img-sub-tubo_de_Carpinteria": producto_perfil_de_Carpinteria,
      "img-sub-tubo_conformado_en_frio": producto_perfil_conformado_en_frio,
      
// Productos - Corrugado y Mallazo
  "img-cat-corrugado": producto_corrugado_y_mallazo,
//...
      "img-sub-acero_corrugado": producto_acero_corrugado,
      "img-sub-grafil": producto_grafil,
      "img-sub-malla_electrosoldada": producto_malla_electrosoldada,
      "img-sub-acero_armadura_en_celosia": producto_armadura_en_celosia,

// Productos - Acero Activo
  "img-cat-acero-activo": producto_acero_activo,
//...
      "img-sub-alambre_pretensado": producto_alambre_pretensado,
      "img-sub-cordon": producto_cordon,

// Productos - Productos Complementarios
  "img-cat-complementarios": producto_productos_complementarios,
//...
      "img-sub-alambre": producto_alambre,
      "img-sub-soldadura": producto_soldadura,
      "img-sub-otros_productos": producto_otros_productos,

// ///////Productos - Aceros Especiales ------------------------------------
"img-seccion-aceros-especiales": producto_aceros_especiales,
// Productos - Acero al Carbono
  "img-cat-acero-carbono": producto_acero_al_carbono,
//...

// Productos - Acero Aleado
  "img-cat-acero_aleado": producto_acero_aleado,
//...

// Productos - Acero calibrado
  "img-cat-acero_calibrado": producto_acero_calibrado,
//...

// Productos - Barra Perforada
  "img-cat-barra_perforada": producto_barra_perforada,
//...

// Productos - Barra Cromada
  "img-cat-barra_cromada": producto_barra_cromada,
//...

// Productos - Acero Inoxidable
  "img-cat-acero_inoxidable": producto_acero_inoxidable,
//...



  },
} as const;

export type ProductImageKey = keyof typeof images.products;
