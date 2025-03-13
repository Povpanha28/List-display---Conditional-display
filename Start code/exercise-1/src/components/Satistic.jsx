import '../index.css'
export default function Satistic({ courseResults }) {
    const resultMin = courseResults.reduce((acc, curr) => acc.score < curr.score ? acc : curr);
    const resultMax = courseResults.reduce((acc, curr) => acc.score > curr.score ? acc : curr);
    const resultsAvg = courseResults.reduce((acc, curr) => acc + curr.score, 0) / courseResults.length;

    return (
        <>
            <div style={{ backgroundColor: 'grey', alignContent: "center",justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center",padding:"10px",borderRadius:"10px" }}>
                <h1>Statistic</h1>
                <table >
                    <thead >
                        <tr>
                            <th>Average</th>
                            <th>Max</th>
                            <th>Min</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="Statistic">
                            <td>{Math.round(resultsAvg)}</td>
                            <td>{resultMax.score}</td>
                            <td>{resultMin.score}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}