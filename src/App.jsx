import { useState } from "react"
import { Header } from "./Components/Header"
import { Entry } from "./Components/Entry"
import { EntryForm } from "./Components/EntryForm"
import initialData from "./data"

export function App() {
    const [entries, setEntries] = useState(initialData)

    function addEntry(newEntry) {
        const newEntryWithId = {
            ...newEntry,
            id: entries.length + 1
        }

        setEntries(prevEntries => [newEntryWithId, ...prevEntries])
    }

    function deleteEntry(id) {
        setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id))
    }


    const entryElements = entries.map((entry) => (
        <Entry 
            key={entry.id}
            entry={entry}
            onDelete={deleteEntry}
        />
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
