import leadbridge from '../../assets/brochure/leadbridge.webp';
import lisCompany from '../../assets/brochure/lis-company.webp';
import tribio from '../../assets/brochure/tribio.webp';
import tractoleoPos from '../../assets/brochure/tractoleo-pos.webp';
import tonyUlloa from '../../assets/brochure/tony-ulloa.webp';
import jstackMark from '../../assets/brochure/jstack-mark.webp';
import wallWayra from '../../assets/brochure/wall-wayra.webp';
import wallEsmerald from '../../assets/brochure/wall-esmerald.webp';
import wallPariona from '../../assets/brochure/wall-pariona.webp';
import wallManuelas from '../../assets/brochure/wall-manuelas.webp';
import wallFirma from '../../assets/brochure/wall-firma.webp';
import wallHomeclean from '../../assets/brochure/wall-homeclean.webp';
import wallTractoleo from '../../assets/brochure/wall-tractoleo.webp';

export const IMG = {
  leadbridge,
  lisCompany,
  tribio,
  tractoleoPos,
  tonyUlloa,
  jstackMark,
};

export const WALL_IMAGES = [
  wallWayra,
  leadbridge,
  wallManuelas,
  tractoleoPos,
  wallEsmerald,
  tribio,
  wallFirma,
  lisCompany,
  wallHomeclean,
  wallPariona,
  wallTractoleo,
];

export const ALL_BROCHURE_IMAGES = Array.from(new Set([...Object.values(IMG), ...WALL_IMAGES]));
