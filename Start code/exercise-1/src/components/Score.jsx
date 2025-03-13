// import { JAVA_RESULTS, HTML_RESULTS, PYTHON_RESULTS ,ENGLISH_RESULTS, } from "../data"
import Satistic from "./Satistic"
export default function Score({ courseName, courseResults }) {
    return (
        <>
            <main className="scores-container">
                <div class="scores">
                    <h1>{courseName}</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseResults.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td className={student.score > 50 ? "" : "warning"}>{student.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Satistic courseResults={courseResults} />
                </div>
            </main>
        </>
    )
}