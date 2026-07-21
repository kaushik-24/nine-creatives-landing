"use client";

import { portfolioItems } from "@/lib/content";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

function wrap(index: number, length: number) {
  return (index + length) % length;
}

function getSpacing() {
  if (typeof window === "undefined") return 680;
  if (window.innerWidth < 480) return 300;
  if (window.innerWidth < 768) return 380;
  if (window.innerWidth < 1024) return 500;
  return 680;
}

export default function Work() {
  const [active, setActive] = useState(0);
  const [spacing, setSpacing] = useState(320);
  const wheelLock = useRef(false);

  const projects = portfolioItems.slice(0, 4);
  const count = projects.length;

  const activeItem = projects[wrap(active, count)];

  const updateSpacing = useCallback(() => {
    setSpacing(getSpacing());
  }, []);

  useEffect(() => {
    updateSpacing();
    window.addEventListener("resize", updateSpacing);
    return () => window.removeEventListener("resize", updateSpacing);
  }, [updateSpacing]);

  const goTo = useCallback((offset: number) => {
    setActive((prev) => wrap(prev + offset, count));
  }, [count]);

  const next = useCallback(() => goTo(1), [goTo]);
  const prev = useCallback(() => goTo(-1), [goTo]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (wheelLock.current) return;
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 20) {
        delta > 0 ? next() : prev();
        wheelLock.current = true;
        setTimeout(() => {
          wheelLock.current = false;
        }, 400);
      }
    },
    [next, prev]
  );

  const offsets = [-2, -1, 0, 1, 2];

  return (
      <section
      id="work"
      className="focus-rail px-6 py-24 lg:px-10"
      tabIndex={0}
      onWheel={handleWheel}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      <style>{`
        .focus-rail{
            position:relative;
            overflow:hidden;
            background:#f4f5fc;
            color:#0f1330;
            user-select:none;
        }

        .focus-rail *{
            box-sizing:border-box;
        }

        .stage{
            position:relative;
            z-index:2;
            height:100%;
            padding-top:30px;
        }

        .rail{
            position:relative;
            height:400px;
            max-width:1200px;
            margin:auto;
            perspective:1340px;
        }

        .card{
            position:absolute;
            left:50%;
            top:50%;
            width:620px;
            aspect-ratio:2/1;
            border-radius:10px;
            overflow:hidden;
            cursor:pointer;
            background:#fff;
            box-shadow:
                0 15px 40px rgba(0,0,0,.08);
            transition:
                transform .9s cubic-bezier(.22,.61,.36,1);
        }

        .card img{
            width:100%;
            height:100%;
            object-fit:cover;
            display:block;
        }

        .info-controls{
            max-width:1100px;
            margin:60px auto 0;
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:40px;
        }

        .info{
            flex:1;
        }

        .meta{
            display:block;
            color:#7b83ec;
            text-transform:uppercase;
            letter-spacing:2px;
            font-size:12px;
            font-weight:600;
            margin-bottom:12px;
        }

        .info h3{
            margin:0 0 15px;
            font-size:clamp(1.5rem,3vw,2.2rem);
            line-height:1.1;
            color:#0f1330;
        }

        .info p{
            margin:0;
            max-width:550px;
            color:#5a62a8;
            line-height:1.7;
        }

        .controls{
            display:flex;
            align-items:center;
            gap:12px;
        }

        .controls button{
            width:48px;
            height:48px;
            border-radius:50%;
            border:1px solid #d1d4eb;
            background:#fff;
            color:#5a62a8;
            cursor:pointer;
            transition:.3s;
        }

        .controls button:hover{
            background:#0f1330;
            color:#fff;
        }

        #counter{
            min-width:70px;
            text-align:center;
            color:#5a62a8;
            font-size:14px;
        }

        @media (max-width:1024px){
            .card{
                width:480px;
            }
        }

        @media (max-width:767px){
            .rail{
                height:320px;
            }
            .card{
                width:360px;
            }
            .info-controls{
                flex-direction:column;
                text-align:center;
                margin-top:40px;
            }
            .info p{
                margin:auto;
            }
        }

        @media (max-width:480px){
            .card{
                width:280px;
            }
            .controls{
                flex-wrap:wrap;
                justify-content:center;
            }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-surface-400">
          <span className="h-px w-6 bg-surface-300" />
          Portfolio
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-surface-950 sm:text-5xl">
            Selected <span className="text-surface-400">work</span>
          </h2>
          <Link
            href="/work"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-lime-onaccent transition-transform hover:scale-[1.03]"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="stage -mx-6 lg:-mx-10 px-6 lg:px-10">
        <div className="rail">
          {offsets.map((offset) => {
            const index = wrap(active + offset, count);
            const item = projects[index];
            const x = offset * spacing;
            const scale = offset === 0 ? 1 : 0.85;
            const rotateY = offset * -18;
            const opacity = 1;

            return (
              <div
                key={offset}
                className="card"
                style={{
                  transform: `translate(-50%,-50%) translateX(${x}px) rotateY(${rotateY}deg) scale(${scale})`,
                }}
                onClick={() => {
                  if (offset !== 0) {
                    setActive(wrap(active + offset, count));
                  }
                }}
              >
                <img src={item.image} alt={item.title} />
              </div>
            );
          })}
        </div>

        <div className="info-controls">
          <div className="info">
            <span className="meta">{activeItem.category}</span>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.description}</p>
          </div>

          <div className="controls">
            <button onClick={prev} aria-label="Previous">❮</button>
            <span id="counter">{active + 1} / {count}</span>
            <button onClick={next} aria-label="Next">❯</button>
          </div>
        </div>
      </div>
    </section>
  );
}
