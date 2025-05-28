"use client"

import { Dictionary } from "@/app/[lang]/dictionaries"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/context/Auth/AuthContext"

export default function Support({ dict }: { dict: Dictionary }) {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setStatus("sending")
    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          user: user ? {
            email: user.email,
            name: user.displayName
          } : undefined
        }),
      })

      if (!response.ok) throw new Error()

      setStatus("success")
      setMessage("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{dict.support.title}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          className="w-6/12 p-2 border rounded-md"
          rows={5}
          placeholder={dict.support.messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === "sending"}
        />
        {status === "success" && (
          <Alert className="w-6/12 bg-green-50">
            <AlertDescription>{dict.support.success}</AlertDescription>
          </Alert>
        )}
        {status === "error" && (
          <Alert className="w-6/12 bg-red-50">
            <AlertDescription>{dict.support.error}</AlertDescription>
          </Alert>
        )}
        <Button
          type="submit"
          className="px-4 py-2 rounded-md hover:bg-amber-200"
          disabled={status === "sending" || !message.trim()}
        >
          {status === "sending" ? dict.support.sending : dict.support.submit}
        </Button>
      </form>
    </div>
  )
}