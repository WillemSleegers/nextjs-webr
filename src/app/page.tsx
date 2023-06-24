"use client"

import { WebR } from "@r-wasm/webr"
import { useEffect, useState } from "react"

const webR = new WebR()

export default function Home() {
  const [status, setStatus] = useState("Loading R...")

  useEffect(() => {
    async function runRCode() {
      await webR.init()
      const rnorm = await webR.evalRRaw("rnorm(5)", "number[]")
      setStatus(rnorm.join(", "))
    }
    runRCode()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {status}
    </main>
  )
}
