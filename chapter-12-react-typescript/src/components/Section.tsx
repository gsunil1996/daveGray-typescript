import { ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

const Section = ({ children, title = "My Subheading" }: SectionProps) => {
  return (
      <div>
          <section>
              <h2>{title}</h2>
              <p>{children}</p>
          </section>
    </div>
  )
}

export default Section