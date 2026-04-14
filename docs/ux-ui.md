UX NXCHILE - RESUMEN EJECUTIVO HOME V1
=======================================

ESTRUCTURA HOME:
----------------
1. Header sticky: Logo + CTA "Agendar reunión"
2. Hero (above fold): Headline + Subheadline + CTA principal + trust
3. Problem Statement: 3 pain points en cards verticales
4. Solution/Benefits: 3 beneficios con icono + texto corto
5. How It Works: 3 pasos de implementación (diagnóstico → config → go-live)
6. Social Proof: 3 métricas clave + testimonio opcional
7. Final CTA: Fondo contrastante + headline de cierre + botón grande
8. Footer minimal: Contacto directo + legales

ORDEN:
------
1. Header → CTA visible siempre
2. Hero → Captar en <5s y dirigir a acción (CRÍTICO)
3. Problem → Generar identificación "esto me pasa"
4. Benefits → Mostrar solución concreta a sus dolores
5. How It Works → Reducir percepción de complejidad
6. Social Proof → Validar con datos, reducir riesgo percibido
7. Final CTA → Cierre con urgencia suave
8. Footer → Contacto de respaldo, sin distracciones

CTA:
----
Texto principal: "Agendar reunión" o "Agendar demostración"
Estilo: bg-brand-600, text-white, px-6 py-3, rounded-lg, min-h-48px
Icono: flecha → (refuerza dirección)

Ubicaciones estratégicas:
• Header (top-right): sticky, siempre accesible
• Hero (center): above the fold, máximo impacto
• Post-Benefits: refuerzo después de generar valor
• Final Section: cierre decisivo, fondo contrastante

Mobile extra: Sticky bottom bar con CTA full-width (solo mobile)

Microcopy que convierte:
• "Sin compromiso"
• "Respuesta en <2 horas hábiles"
• "Hablas con un especialista operativo, no con ventas"

DUDAS / DECISIONES PENDIENTES:
------------------------------
1. ¿Headline del Hero? (A/B test recomendado)
   Opción A: "Control total de tu operación de exportación de fruta"
   Opción B: "Reduce errores en tu exportación de fruta"
   Opción C: "Trazabilidad auditada para exportadoras de fruta fresca"

2. ¿Herramienta de agendamiento?
   - Calendly embed (rápido, probado)
   - Cal.com self-hosted (más control, más setup)
   - Formulario propio + webhook (máximo control, más desarrollo)

3. ¿Métricas de Social Proof reales o placeholder?
   - Si son reales: validar con cliente antes de publicar
   - Si son placeholder: usar lenguaje genérico ("hasta X%")

4. ¿Logos de clientes en Hero o Social Proof?
   - Si hay NDA: usar "Empresas de la 5ª a la 15ª región"
   - Si hay permiso: logos en escala de grises, mismo tamaño

5. ¿Analytics mínimo viable?
   - Google Tag Manager + eventos básicos (cta_click, scroll_depth)
   - ¿Necesitamos dashboard interno o basta con GA4?

NOTAS TÉCNICAS CLAVE:
---------------------
• Mobile-first con Tailwind (clases base mobile, md: para desktop)
• next/image para todas las imágenes (performance)
• Touch targets mínimos: 48x48px para botones
• LCP objetivo: <2.5s en 3G
• SIN animaciones pesadas, SIN menús complejos, SIN distracciones

PRIORIDAD ABSOLUTA V1 (48h):
----------------------------
1. Hero funcional con CTA que agenda
2. Responsive mobile impecable
3. Copy claro y orientado a dolor real del exportador
4. Todo lo demás es mejora progresiva post-lanzamiento

=======================================
Archivo destino: /docs/ux-ui.md
Estado: Listo para desarrollo