import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { useStudy } from '../../context/StudyContext'

function ProgressChart() {
    const { subjects, topics, tasks } = useStudy()

    const data = subjects.map(function (subject) {
        const subjectTopics = topics.filter(function (t) { return t.subjectId === subject.id })
        const done = subjectTopics.filter(function (t) { return t.status === 'Completed' }).length
        const total = subjectTopics.length
        const percentage = total === 0 ? 0 : Math.round((done / total) * 100)
        return {
            name: subject.name,
            progress: percentage,
            color: subject.color
        }
    })

    if (data.length === 0) {
        return <p className="empty-msg">Add subjects to see progress here.</p>
    }

    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={220}>
                <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                    <Tooltip formatter={function (value) { return value + '%' }} />
                    <Bar dataKey="progress" radius={[6, 6, 0, 0]}>
                        {data.map(function (entry, index) {
                            return <Cell key={index} fill={entry.color} />
                        })}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ProgressChart
