'use client';

import { useMemo, useState } from "react";

export default function Home() {
  const [holeSize, setHoleSize] = useState(25);

  const normalized = holeSize / 100;

  const flowStats = useMemo(() => {
    const resistanceValue = 100 - holeSize;
    let intensityLabel = "";
    let narrative = "";
    let warning = "";

    if (holeSize <= 30) {
      intensityLabel = "Suave y controlada";
      narrative =
        "La resistencia es alta; el agua avanza despacio y permite explicar por qué los conductores delgados frenan la corriente.";
      warning =
        "Ideal para comenzar: la salida lenta evita salpicaduras y da tiempo para narrar el concepto.";
    } else if (holeSize <= 65) {
      intensityLabel = "Flujo medio y constante";
      narrative =
        "La resistencia se reduce y la corriente aumenta. Es perfecto para contrastar cómo cambia la velocidad.";
      warning =
        "Pide al grupo que note la diferencia de velocidad y conecte el cambio con cables de mayor calibre.";
    } else {
      intensityLabel = "Chorro rápido e intenso";
      narrative =
        "La resistencia es muy baja y la corriente se dispara. El agua sale con fuerza y se vacía más rápido.";
      warning =
        "Advertencia: usa un recipiente más grande y menciona que un cable sin la resistencia adecuada puede calentarse o dañar equipos.";
    }

    return {
      resistanceValue,
      intensityLabel,
      narrative,
      warning,
    };
  }, [holeSize]);

  const streamWidth = 14 + normalized * 70;
  const streamOpacity = 0.35 + normalized * 0.5;
  const splashSpread = 18 + normalized * 60;
  const waterLevel = 70 - normalized * 30;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-white text-slate-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-16 md:px-12 lg:py-24">
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex-1 space-y-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-sm font-semibold text-sky-700 shadow-sm">
              🔌 Dinámica con agua · Física cotidiana
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Explica corriente y resistencia con una botella de agua
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-700">
              Usa esta actividad visual y táctil para mostrar cómo la
              resistencia eléctrica regula la corriente. Cambia el tamaño del
              orificio y conversa sobre cables delgados, cortocircuitos y
              seguridad eléctrica.
            </p>
          </div>
          <div className="rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-sky-100 md:w-72">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Duración estimada
            </h2>
            <p className="mt-2 text-3xl font-bold text-sky-700">10 - 12 min</p>
            <p className="mt-4 text-sm text-slate-600">
              Ideal para clases de secundaria, talleres STEM y actividades de
              divulgación científica.
            </p>
          </div>
        </header>

        <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <article className="space-y-6 rounded-3xl bg-white/90 p-8 shadow-lg ring-1 ring-slate-100">
            <h2 className="text-2xl font-semibold text-slate-900">
              Materiales
            </h2>
            <ul className="grid gap-4 text-base text-slate-700 sm:grid-cols-2">
              <li className="rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 shadow-sm">
                ✅ Botella trasparente de plástico o vidrio
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 shadow-sm">
                ✅ Tapa con un orificio pequeño (alto nivel de resistencia)
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 shadow-sm">
                ✅ Tapa con un orificio más grande (baja resistencia)
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 shadow-sm">
                ✅ Recipiente o bandeja para recoger el agua
              </li>
            </ul>
          </article>

          <article className="flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-sky-600 via-sky-500 to-sky-400 p-8 text-white shadow-xl">
            <h2 className="text-2xl font-semibold">Relación clave</h2>
            <p className="text-base text-sky-50/90">
              Resistencia elevada (orificio pequeño) = corriente limitada.
              Resistencia baja (orificio grande) = corriente intensa. Controlar
              la resistencia es vital para que cables y dispositivos trabajen
              sin sobrecalentarse.
            </p>
            <div className="rounded-2xl bg-white/10 p-5 text-sm leading-relaxed text-sky-50/85">
              <strong>Tip didáctico:</strong> pide que imaginen el agua como
              electrones. Pregunta qué sucedería si el orificio fuese enorme y
              vincúlalo con cortocircuitos o fusibles.
            </div>
          </article>
        </section>

        <section className="rounded-3xl bg-white/90 p-8 shadow-lg ring-1 ring-slate-100">
          <h2 className="text-2xl font-semibold text-slate-900">
            Paso a paso
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "1. Prepara la botella",
                detail:
                  "Llénala de agua limpia. El volumen completo representa la energía eléctrica lista para moverse.",
              },
              {
                title: "2. Usa la tapa con orificio pequeño",
                detail:
                  "Voltea la botella sobre el recipiente. Observa cómo el agua sale lentamente porque la resistencia es alta.",
              },
              {
                title: "3. Cambia a la tapa de orificio grande",
                detail:
                  "Repite el proceso y pide que comparen la velocidad y fuerza del chorro. La resistencia disminuyó, la corriente aumentó.",
              },
              {
                title: "4. Conecta con electricidad real",
                detail:
                  "Relaciona la experiencia con cables de distintos calibres, fusibles y la seguridad al manipular cargas altas.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-slate-700 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl bg-white/95 p-8 shadow-xl ring-1 ring-slate-100 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Simulador visual: ajusta la resistencia
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                Mueve el control para cambiar el tamaño del orificio. Observa
                cómo responde el caudal del agua y usa la lectura para guiar la
                discusión sobre corriente eléctrica.
              </p>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Tamaño del orificio
              </span>
              <input
                type="range"
                min={10}
                max={90}
                value={holeSize}
                onChange={(event) => setHoleSize(Number(event.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-sky-500"
              />
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Pequeño</span>
                <span className="rounded-full bg-sky-100 px-3 py-1 font-semibold text-sky-700">
                  {holeSize}%
                </span>
                <span>Grande</span>
              </div>
            </label>

            <dl className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-sm text-slate-700 sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-slate-900">Resistencia</dt>
                <dd>
                  {flowStats.resistanceValue}% (a menor resistencia, el agua
                  fluye con más fuerza)
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Caudal</dt>
                <dd>{flowStats.intensityLabel}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold text-slate-900">
                  Cómo explicarlo
                </dt>
                <dd>{flowStats.narrative}</dd>
              </div>
              <div className="sm:col-span-2 rounded-2xl bg-sky-100/70 px-4 py-3 text-sky-900">
                <dt className="font-semibold">Recomendación</dt>
                <dd>{flowStats.warning}</dd>
              </div>
            </dl>
          </div>

          <div className="relative flex flex-col items-center justify-center">
            <div className="relative flex h-80 w-full max-w-xs items-end justify-center">
              <div className="bottle-body relative flex h-full w-40 items-end justify-center rounded-t-full border-4 border-slate-200 bg-white/70 shadow-inner">
                <div
                  className="bottle-water absolute inset-x-4 bottom-4 rounded-t-[40%] bg-gradient-to-b from-sky-200 via-sky-300 to-sky-400"
                  style={{ height: `${waterLevel}%` }}
                />
                <div className="absolute bottom-1 flex h-6 w-full items-center justify-center">
                  <div
                    className="rounded-full bg-slate-700 transition-all duration-300"
                    style={{ height: "10px", width: `${holeSize / 4}px` }}
                  />
                </div>
              </div>
              <div
                className="flow-stream absolute left-1/2 top-[74%] -translate-x-1/2 bg-gradient-to-b from-sky-300 via-sky-400 to-sky-500 transition-all duration-300"
                style={{
                  width: `${streamWidth}px`,
                  height: "160px",
                  opacity: streamOpacity,
                }}
              />
              <div
                className="flow-splash absolute left-1/2 top-[calc(74%+155px)] -translate-x-1/2 rounded-full bg-sky-200/70 blur-xl transition-all duration-300"
                style={{
                  width: `${splashSpread * 2}px`,
                  height: `${splashSpread / 2}px`,
                }}
              />
            </div>
            <p className="mt-6 max-w-sm text-center text-sm text-slate-600">
              El ancho y la transparencia del chorro ilustran cómo aumenta la
              corriente cuando la resistencia disminuye. Ajusta el control para
              reforzar la idea de que el diámetro del conductor importa.
            </p>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-slate-900 p-8 text-slate-100 shadow-xl ring-1 ring-slate-800 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Por qué funciona</h2>
            <p className="text-base leading-relaxed text-slate-200/80">
              El agua es intuitiva: su velocidad se percibe, su volumen se mide
              y la resistencia se experimenta. Esa conexión sensorial ayuda a
              fijar conceptos abstractos como amperaje, resistencia y voltaje en
              la memoria del grupo.
            </p>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
            <li>
              • <strong>Visual:</strong> se observa la velocidad del chorro.
            </li>
            <li>
              • <strong>Auditiva:</strong> se escucha el cambio de sonido cuando
              hay más caudal.
            </li>
            <li>
              • <strong>Kinestésica:</strong> cambiar tapas y sentir el peso del
              flujo crea memoria muscular.
            </li>
            <li>
              • <strong>Segura:</strong> el agua hace evidente la importancia de
              controlar la corriente antes de pasar a electricidad real.
            </li>
          </ul>
        </section>

        <footer className="border-t border-slate-200 pt-8 text-xs text-slate-500">
          Dinámica creada para talleres educativos. Adapta el vocabulario al
          nivel del grupo y ten toallas listas para limpiar rápido.
        </footer>
      </main>
    </div>
  );
}
