export const HERBS = [
  {
    id: "albahaca", cat:"hierba", num:"1.01",
    nombre:"Albahaca", cientifico:"Ocimum basilicum",
    tagline:"La aliada estelar del tomate",
    profundidad:"15–20 cm", luz:"6+ horas", riego:"2–3×/semana",
    siembra:"Mar – Sep", cosecha:"30–60 días",
    cuidados:[
      "Cortar las flores en cuanto aparezcan para alargar la vida útil de las hojas.",
      "Podar los tallos justo encima de un nudo para que la planta ramifique.",
      "Muy sensible al encharcamiento: mejor sustrato con buen drenaje."
    ],
    buenas:["Tomate cherry","Pimiento","Fresas","Tomillo"],
    malas:["Ruda","Salvia","Eneldo"],
    nota:"Si solo haces una asociación en todo el huerto: Albahaca + Tomate.",
    diagram:"basil"
  },
  {
    id:"perejil", cat:"hierba", num:"1.02",
    nombre:"Perejil", cientifico:"Petroselinum crispum",
    tagline:"Atrae a los guardianes del huerto",
    profundidad:"15–20 cm", luz:"4–6 horas", riego:"2–3×/semana",
    siembra:"Mar–Abr · Sep–Oct", cosecha:"70–90 días",
    cuidados:[
      "Mantener la tierra siempre húmeda, nunca seca del todo.",
      "Sembrar de forma escalonada para tener cosecha continua.",
      "Remojar las semillas 24h antes de sembrar mejora mucho la germinación."
    ],
    buenas:["Tomate cherry","Pimiento","Fresas","Albahaca"],
    malas:[],
    nota:"Atrae sírfidos — moscas que parecen abejas y devoran pulgones. Es control biológico gratis.",
    diagram:"parsley"
  },
  {
    id:"eneldo", cat:"hierba", num:"1.03",
    nombre:"Eneldo", cientifico:"Anethum graveolens",
    tagline:"El especialista en avispas parasitarias",
    profundidad:"15–20 cm", luz:"6–8 horas", riego:"Diario en verano",
    siembra:"Mar – Ago", cosecha:"40–60 días",
    cuidados:[
      "Siembra directa siempre — no admite trasplante bien.",
      "Sembrar de forma escalonada cada 2–3 semanas.",
      "Aclarear las plántulas a 30–45 cm de separación."
    ],
    buenas:["Coles","Pepino","Cebolla","Lechuga"],
    malas:["Tomate","Albahaca","Zanahoria","Hinojo"],
    nota:"Cuidado: es de las pocas hierbas con más incompatibilidades que amistades. Elige bien su sitio.",
    diagram:"dill"
  },
  {
    id:"menta", cat:"hierba", num:"1.04",
    nombre:"Menta", cientifico:"Mentha spicata",
    tagline:"Aroma protector, raíz peligrosa",
    profundidad:"15–20 cm", luz:"4–6 horas", riego:"2–3×/semana",
    siembra:"Mar – Oct", cosecha:"Todo el año",
    cuidados:[
      "IMPORTANTE: siempre en maceta independiente, es extremadamente invasiva.",
      "Cortar los tallos justo encima de un par de hojas.",
      "Podar con frecuencia para mantenerla compacta."
    ],
    buenas:["Fresas","Albahaca","Tomillo"],
    malas:["Perejil"],
    nota:"Sus raíces compiten agresivamente por agua y nutrientes, pero su aroma a distancia repele pulgones y pulguillas.",
    diagram:"mint"
  },
  {
    id:"hierba-buena", cat:"hierba", num:"1.05",
    nombre:"Hierba Buena", cientifico:"Mentha spicata var. crispa",
    tagline:"La prima de la menta, igual de expansiva",
    profundidad:"15–20 cm", luz:"4–6 horas", riego:"2–3×/semana",
    siembra:"Mar – Oct", cosecha:"Todo el año",
    cuidados:[
      "Misma familia que la menta: mismos cuidados y misma precaución.",
      "Ideal para infusiones y bebidas frescas.",
      "Controlar activamente su expansión, revisando la maceta cada mes."
    ],
    buenas:["Fresas","Tomate cherry","Pimiento"],
    malas:["Menta"],
    nota:"Como la menta, debe estar en maceta separada por sus raíces invasivas — pero su aroma protege igualmente a las plantas cercanas.",
    diagram:"mint"
  },
  {
    id:"tomillo", cat:"hierba", num:"1.06",
    nombre:"Tomillo", cientifico:"Thymus vulgaris",
    tagline:"El repelente universal",
    profundidad:"15–20 cm", luz:"6+ horas", riego:"1–2×/semana",
    siembra:"Mar – May", cosecha:"Todo el año",
    cuidados:[
      "Poca agua: tolera muy bien la sequía, teme el exceso.",
      "Podar ligeramente después de la floración.",
      "Sus flores atraen abejas y otros polinizadores."
    ],
    buenas:["Tomate cherry","Pimiento","Fresas","Romero","Albahaca"],
    malas:[],
    nota:"Plantarlo cerca de cualquier hortaliza casi siempre es una buena idea. Repele gusanos y pulgones de forma general.",
    diagram:"thyme"
  },
  {
    id:"romero", cat:"hierba", num:"1.07",
    nombre:"Romero", cientifico:"Rosmarinus officinalis",
    tagline:"Barrera contra el viento y la mosca blanca",
    profundidad:"20–25 cm", luz:"6+ horas", riego:"1–2×/semana",
    siembra:"Mar – May", cosecha:"Todo el año",
    cuidados:[
      "Poca agua — muy sensible al encharcamiento de raíces.",
      "Poda ligera solo para mantener la forma del arbusto.",
      "Colocarlo donde pueda proteger a otras plantas del viento."
    ],
    buenas:["Pimiento","Tomate cherry","Tomillo","Albahaca"],
    malas:[],
    nota:"Funciona como barrera física contra el viento y como repelente químico natural de mosca blanca, a la vez.",
    diagram:"rosemary"
  }
];

export const FRUITS = [
  {
    id:"tomates-cherry", cat:"fruta", num:"2.01",
    nombre:"Tomates Cherry", cientifico:"Solanum lycopersicum var. cerasiforme",
    tagline:"El que más hierbas aromáticas agradece",
    profundidad:"30–40 cm", luz:"6–8 horas", riego:"Diario en verano",
    siembra:"Feb–Abr (plantón)", cosecha:"60–80 días",
    cuidados:[
      "Instalar tutor (varilla o enrejado) desde el momento de plantar.",
      "Eliminar los chupones — brotes entre el tallo principal y las hojas.",
      "Guiar los tallos principales hacia el tutor a medida que crece.",
      "Cosechar cuando estén completamente rojos."
    ],
    buenas:["Albahaca","Tomillo","Romero","Perejil"],
    malas:["Eneldo","Col"],
    nota:"No tengas miedo de plantar varias hierbas aromáticas cerca a la vez — el tomate se beneficia de todas juntas.",
    diagram:"tomato"
  },
  {
    id:"pimientos", cat:"fruta", num:"2.02",
    nombre:"Pimientos", cientifico:"Capsicum annuum",
    tagline:"Necesita compañía y un buen cortavientos",
    profundidad:"30–35 cm", luz:"6–8 horas", riego:"2–3×/semana",
    siembra:"Feb–Abr (plantón)", cosecha:"60–90 días",
    cuidados:[
      "Tutorado recomendado en variedades altas.",
      "Poda ligera: eliminar las primeras flores para fortalecer la planta.",
      "Cosechar en verde o dejar madurar a rojo, según preferencia."
    ],
    buenas:["Albahaca","Cebolla","Tomillo","Romero","Perejil"],
    malas:["Frijoles"],
    nota:"Cada hierba aromática cercana aporta un tipo distinto de protección — combínalas sin miedo.",
    diagram:"pepper"
  },
  {
    id:"fresas", cat:"fruta", num:"2.03",
    nombre:"Fresas", cientifico:"Fragaria x ananassa",
    tagline:"Frágiles, pero con muchos aliados",
    profundidad:"15–20 cm", luz:"6+ horas", riego:"2–3×/semana",
    siembra:"Mar–May · Sep–Oct", cosecha:"60–90 días",
    cuidados:[
      "Eliminar estolones para concentrar la energía en los frutos.",
      "No mojar los frutos al regar — regar siempre en la base.",
      "Rotar su ubicación cada 2–3 años."
    ],
    buenas:["Albahaca","Perejil","Menta"],
    malas:["Tomillo","Cebolla"],
    nota:"Necesitan polinizadores activos: perejil y albahaca son perfectos para atraerlos.",
    diagram:"strawberry"
  }
];

export const PLANTS = [...HERBS, ...FRUITS];

export const ASSOC_TABLE = [
  {a:"Tomate + Albahaca", b:"Repele plagas, mejora el sabor", stars:3},
  {a:"Pimiento + Albahaca", b:"Atrae polinizadores", stars:3},
  {a:"Tomate + Tomillo", b:"Repele gusanos", stars:3},
  {a:"Pimiento + Romero", b:"Protección viento + plagas", stars:3},
  {a:"Fresa + Albahaca", b:"Protección natural", stars:3},
  {a:"Eneldo + Coles", b:"Atrae avispas parasitarias contra orugas", stars:3},
  {a:"Tomate + Perejil", b:"Atrae insectos beneficiosos", stars:2},
  {a:"Pimiento + Cebolla", b:"Repele pulgones", stars:2},
  {a:"Menta + Fresa", b:"Repele plagas", stars:2},
];

export const REPELENTES = [
  {planta:"Albahaca", plaga:"Pulgones, mosca blanca, trips", como:"Aroma fuerte y esencias volátiles confunden a los insectos"},
  {planta:"Menta", plaga:"Hormigas", como:"Aroma intenso las aleja"},
  {planta:"Romero", plaga:"Mosca blanca", como:"Aromas repelentes + barrera física"},
  {planta:"Tomillo", plaga:"Gusanos, pulgones", como:"Aromas fuertes generalizados"},
  {planta:"Cebolla", plaga:"Pulgones", como:"Olor fuerte disuade"},
];

export const DEPREDADORES = [
  {planta:"Perejil", insecto:"Sírfidos", controla:"Pulgones"},
  {planta:"Caléndula", insecto:"Abejas", controla:"Polinización"},
  {planta:"Albahaca", insecto:"Abejas", controla:"Polinización"},
];
