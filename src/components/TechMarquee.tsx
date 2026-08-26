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
]

function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex w-max">
      <div
        className={`flex shrink-0 items-center gap-10 pr-10 will-change-transform ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {[...stack, ...stack].map((s, i) => (
          <div key={s.name + i} className="flex items-center gap-2.5 text-white/40 hover:text-white/80 transition-colors">
            <s.Icon className="h-5 w-5" />
            <span className="whitespace-nowrap text-sm font-mono">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section className="relative py-16 border-y border-white/10 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-900 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-900 to-transparent z-10" />
      <div className="space-y-6">
        <Row />
        <Row reverse />
      </div>
    </section>
  )
}
