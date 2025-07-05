import { Header } from "./Components/header"
import { Entry } from "./Components/Entry"
import data from "./data"

export function App() {

    const entryElements = data.map((entry) => {
        return (
            <Entry 
                key={entry.id}
              //  {...entry}
                entry={entry}
            />
        )
    })
    return (
        <>
            <Header />
            <main className="container">

                {entryElements}

            </main>
        </>
    )
}