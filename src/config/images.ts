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

// Productos - Hierro y Acero
import producto_hierro_acero from "@/assets/images/products/1_Hierro_y_Acero.jpg";
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
import producto_acero_activo from "@/assets/images/products/31_Acero_Activo.jpg";
import producto_alambre_pretensado from "@/assets/images/products/32_Alambre_Pretensado.jpg";
import producto_cordon from "@/assets/images/products/33_Cordon.jpg";
import producto_productos_complementarios from "@/assets/images/products/34_Productos_Complementarios.jpg";
import producto_alambre from "@/assets/images/products/35_Alambre.jpg";
import producto_soldadura from "@/assets/images/products/36_Soldadura.jpg";
import producto_otros_productos from "@/assets/images/products/37_Otros_Productos.jpg";
// Productos - Aceros Especiales
import producto_aceros_especiales from "@/assets/images/products/38_Aceros_Especiales.jpg";
import producto_acero_al_carbono from "@/assets/images/products/39_Acero_al_Carbono.jpg";
import producto_acero_aleado from "@/assets/images/products/40_Acero_Aleado.jpg";
import producto_acero_calibrado from "@/assets/images/products/41_Acero_Calibrado.jpg";
import producto_barra_perforada from "@/assets/images/products/42_Barra_Perforada.jpg";
import producto_barra_cromada_inoxidable from "@/assets/images/products/43_Barra_Cromada_Inoxidable.jpg";
// Productos - Acero Inoxidable
import producto_acero_inoxidable from "@/assets/images/products/44_Acero_Inoxidable.jpg";




export const images = {
  landing: {
    hero: heroBg,
  },
  products: {
    // Imagen 0: Largos (categoría)
    "img-00": producto_largos,
    // Imagen 1-3: Perfiles estructurales (IPN, IPE, etc.)
    "img-01": producto_perfil_estructural,
    "img-02": producto_perfil_estructural,
    "img-03": producto_perfil_estructural,
    // Imagen 4: Perfil comercial
    "img-04": producto_perfil_comercial,
    // Imagen 5: Perfil laminado en frío
    "img-05": producto_perfil_laminado_en_frio,
    // Imagen 6: Chapas (categoría)
    "img-06": producto_planos,
    // Imagen 7: Chapa laminada en caliente
    "img-07": producto_chapa_laminada_en_caliente,
    // Imagen 8-16: Otras chapas (usan placeholder de chapas)
    "img-08": producto_chapa_decapada,
    "img-09": producto_chapa_estriada,
    "img-10": producto_chapa_lagrimada,
    "img-11": producto_chapa_corten,
    "img-12": producto_chapa_galvanizada,
    "img-13": producto_chapa_prelacada,
    "img-14": producto_chapa_laminada_en_caliente,
    "img-15": producto_chapa_industrial,
    "img-16": producto_chapa_antidesgaste,
    // Imagen 17: Placa de anclaje
    "img-17": producto_placa_de_anclaje,
    // Imagen 18: Tubos (categoría)
    "img-18": producto_tubos,
    // Imagen 19: Tubo de conducción
    "img-19": producto_tubos_de_conduccion,
    // Imagen 20-25: Otros tubos
    "img-20": producto_tubo_de_precision,
    "img-21": producto_tubo_galvanizado,
    "img-22": producto_tubo_estructural,
    "img-23": producto_tubo_laminado_en_frio,
    "img-24": producto_perfil_de_Carpinteria,
    "img-25": producto_perfil_laminado_en_frio,
    // Imagen 26: Corrugado y mallazo
    "img-26": producto_corrugado_y_mallazo,
    // Imagen 40: Acero aleado
    "img-40": producto_acero_aleado,
    // Imagen 41: Acero calibrado
    "img-41": producto_acero_calibrado,
    // Imagen 42: Barra perforada
    "img-42": producto_barra_perforada,
    // Imagen 43: Barra cromada
    "img-43": producto_barra_cromada_inoxidable,
    // Imagen 44: Acero inoxidable
    "img-44": producto_acero_inoxidable,
  },
} as const;

export type ProductImageKey = keyof typeof images.products;
