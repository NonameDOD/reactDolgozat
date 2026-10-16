
type KartyaProps = {
    id: number,
    szoba_nev: string,
    szobatipus: string,
    emelet: number,
    ferohely: number,
    foglalt_helyek: number
}

export default function Kartya(kartya : KartyaProps) {
    return (
        <>
            <div className="kartya">
                <h2>{kartya.szoba_nev}</h2>
                <p>{kartya.szobatipus}</p>
                <p>{kartya.emelet}</p>
                <p>{kartya.ferohely}</p>
                <p>{kartya.foglalt_helyek}</p>
            </div>
        </>
    )
}

