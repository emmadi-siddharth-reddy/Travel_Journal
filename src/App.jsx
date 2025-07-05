import { useEffect, useState } from "react"
import { Header } from "./Components/Header"
import { Entry } from "./Components/Entry"
import { EntryForm } from "./Components/EntryForm"
import initialData from "./data"

export function App() {
  const [entries, setEntries] = useState(() => {
    // Load from localStorage on first render
    const stored = localStorage.getItem("journalEntries")
    return stored ? JSON.parse(stored) : initialData
  })

  // Save to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries))
  }, [entries])

  function addEntry(newEntry) {
    const newEntryWithId = {
      ...newEntry,
      id: Date.now() // Use unique timestamp for ID
    }
    setEntries(prev => [newEntryWithId, ...prev])
  }

  function deleteEntry(id) {
    setEntries(prev => prev.filter(entry => entry.id !== id))
  }

  const entryElements = entries.map(entry => (
    <Entry key={entry.id} entry={entry} onDelete={deleteEntry} />
  ))

  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
      <EntryForm onAddEntry={addEntry} />
    </>
  )
}
