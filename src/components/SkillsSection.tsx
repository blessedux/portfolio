"use client"

import React from "react"
import AnimatedSkillBar from "./AnimatedSkillBar"

const skills = [
  { skill: "React", level: 90 },
  { skill: "TypeScript", level: 85 },
  { skill: "Next.js", level: 80 },
  { skill: "Tailwind CSS", level: 85 },
  { skill: "Node.js", level: 75 },
  { skill: "GraphQL", level: 70 },
]

export default function SkillsSection() {
  return (
    <div className="space-y-8">
      <h3 className="text-4xl font-display-bold text-white tracking-tight text-center">
        Skills
      </h3>
      <div className="space-y-4">
        {skills.map((item, index) => (
          <AnimatedSkillBar
            key={index}
            skill={item.skill}
            level={item.level}
          />
        ))}
      </div>
    </div>
  )
} 