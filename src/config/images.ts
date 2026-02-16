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

// Productos - Hierro y Acero
import imgPerfilEstructural from "@/assets/images/products/img-01-perfil-estructural.jpg";
import imgPerfilComercial from "@/assets/images/products/img-04-perfil-comercial.jpg";
import imgPerfilLaminadoFrio from "@/assets/images/products/img-05-perfil-laminado-frio.jpg";
import imgChapas from "@/assets/images/products/img-06-chapas.jpg";
import imgChapaCaliente from "@/assets/images/products/img-07-chapa-caliente.jpg";
import imgTubos from "@/assets/images/products/img-18-tubos.jpg";
import imgTuboConduccion from "@/assets/images/products/img-19-tubo-conduccion.jpg";
import imgCorrugado from "@/assets/images/products/img-26-corrugado.jpg";

// Productos - Aceros Especiales
import imgAcerosEspeciales from "@/assets/images/products/img-40-aceros-especiales.jpg";
import imgAceroInoxidable from "@/assets/images/products/img-44-acero-inoxidable.jpg";

export const images = {
  landing: {
    hero: heroBg,
  },
  products: {
    // Imagen 1-3: Perfiles estructurales (IPN, IPE, etc.)
    "img-01": imgPerfilEstructural,
    "img-02": imgPerfilEstructural,
    "img-03": imgPerfilEstructural,
    // Imagen 4: Perfil comercial
    "img-04": imgPerfilComercial,
    // Imagen 5: Perfil laminado en frío
    "img-05": imgPerfilLaminadoFrio,
    // Imagen 6: Chapas (categoría)
    "img-06": imgChapas,
    // Imagen 7: Chapa laminada en caliente
    "img-07": imgChapaCaliente,
    // Imagen 8-16: Otras chapas (usan placeholder de chapas)
    "img-08": imgChapaCaliente,
    "img-09": imgChapas,
    "img-10": imgChapas,
    "img-11": imgChapas,
    "img-12": imgChapas,
    "img-13": imgChapas,
    "img-14": imgChapaCaliente,
    "img-15": imgChapas,
    "img-16": imgChapas,
    // Imagen 17: Placa de anclaje
    "img-17": imgChapas,
    // Imagen 18: Tubos (categoría)
    "img-18": imgTubos,
    // Imagen 19: Tubo de conducción
    "img-19": imgTuboConduccion,
    // Imagen 20-25: Otros tubos
    "img-20": imgTuboConduccion,
    "img-21": imgTubos,
    "img-22": imgTubos,
    "img-23": imgTubos,
    "img-24": imgTuboConduccion,
    "img-25": imgPerfilLaminadoFrio,
    // Imagen 26: Corrugado y mallazo
    "img-26": imgCorrugado,
    // Imagen 40: Acero aleado
    "img-40": imgAcerosEspeciales,
    // Imagen 41: Acero calibrado
    "img-41": imgAcerosEspeciales,
    // Imagen 42: Barra perforada
    "img-42": imgAcerosEspeciales,
    // Imagen 43: Barra cromada
    "img-43": imgAcerosEspeciales,
    // Imagen 44: Acero inoxidable
    "img-44": imgAceroInoxidable,
  },
} as const;

export type ProductImageKey = keyof typeof images.products;
