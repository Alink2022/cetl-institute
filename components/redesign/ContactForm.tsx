"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { RedesignContent } from "@/lib/redesign-content";

type Fields = RedesignContent["kontakt"]["fields"];

// Unterseiten verlinken per /?topic=<id>#kontakt auf das Formular und
// wählen so das passende Thema vor.
export function ContactForm({ fields }: { fields: Fields }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [topicId, setTopicId] = useState("");
  const [context, setContext] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("topic");
    if (wanted && fields.topics.some((t) => t.id === wanted)) setTopicId(wanted);
  }, [fields.topics]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const topic = fields.topics.find((t) => t.id === topicId)?.label ?? "";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role, topic, context }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setRole("");
      setTopicId("");
      setContext("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card" role="status">
        <p style={{ margin: 0 }}>{fields.success}</p>
      </div>
    );
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <label className="field">
        <span>{fields.name}</span>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="field">
        <span>{fields.email}</span>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="field">
        <span>{fields.role}</span>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">{fields.rolePlaceholder}</option>
          {fields.roles.map((r) => <option key={r}>{r}</option>)}
        </select>
      </label>
      <label className="field">
        <span>{fields.topic}</span>
        <select value={topicId} onChange={(e) => setTopicId(e.target.value)}>
          <option value="" disabled>{fields.topicPlaceholder}</option>
          {fields.topics.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
        </select>
      </label>
      <label className="field">
        <span>{fields.context}</span>
        <textarea rows={4} value={context} onChange={(e) => setContext(e.target.value)} />
      </label>
      {status === "error" && (
        <p style={{ color: "var(--brand-700)", fontSize: "0.9rem", marginBottom: 16 }}>{fields.error}</p>
      )}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? fields.sending : fields.submit}
      </button>
    </form>
  );
}
