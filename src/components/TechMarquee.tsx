import {
  SiPython,
  SiReact,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiMysql,
  SiGithubactions,
  SiAnthropic,
  SiStreamlit,
  SiHuggingface,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiRedis,
  SiLangchain,
  SiNeo4J,
  SiMongodb,
  SiPostgresql,
  SiGooglecloud,
  SiDatabricks,
  SiGradio,
  SiApachespark,
  SiScikitlearn,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import type { IconType } from 'react-icons'

const stack: { name: string; Icon: IconType }[] = [
  { name: 'Python', Icon: SiPython },
  { name: 'LangChain', Icon: SiLangchain },
  { name: 'React', Icon: SiReact },
  { name: 'FastAPI', Icon: SiFastapi },
  { name: 'TensorFlow', Icon: SiTensorflow },
  { name: 'PyTorch', Icon: SiPytorch },
  { name: 'HuggingFace', Icon: SiHuggingface },
  { name: 'OpenCV', Icon: SiOpencv },
  { name: 'NumPy', Icon: SiNumpy },
  { name: 'Pandas', Icon: SiPandas },
  { name: 'Docker', Icon: SiDocker },
  { name: 'AWS', Icon: FaAws },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'Redis', Icon: SiRedis },
  { name: 'GitHub Actions', Icon: SiGithubactions },
  { name: 'Anthropic', Icon: SiAnthropic },
  { name: 'Streamlit', Icon: SiStreamlit },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Neo4j', Icon: SiNeo4J },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'Google Cloud', Icon: SiGooglecloud },
  { name: 'Databricks', Icon: SiDatabricks },
  { name: 'Gradio', Icon: SiGradio },
  { name: 'Apache Spark', Icon: SiApachespark },
  { name: 'Scikit-learn', Icon: SiScikitlearn },
]

function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex w-max">
      <div
        className={`flex shrink-0 items-center gap-3 pr-3 will-change-transform ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee-fast'
        }`}
      >
        {[...stack, ...stack].map((s, i) => (
          <div
            key={s.name + i}
            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-white/45 transition-colors hover:border-white/25 hover:text-white"
          >
            <s.Icon className="h-4 w-4" />
            <span className="whitespace-nowrap font-mono text-xs">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-24">
      <div className="mx-auto mb-8 max-w-6xl px-6">
        <span className="eyebrow text-white/35">The stack we reach for</span>
      </div>
      <div className="fade-x space-y-3">
        <Row />
        <Row reverse />
      </div>
    </section>
  )
}
