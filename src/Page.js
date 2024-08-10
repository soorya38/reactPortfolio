import Panel from './Panel';
import ScrollPanel from './ScrollPanel';

export default function Page({ id }) {
    const data = [
        { title: "About", content: 'Passionate learner with aspirations in software engineering, fueled by a strong drive for problem-solving. Ready to embrace challenges in the ever-changing tech landscape. Dedicated to skill expansion and contributing to meaningful projects.' },
        { title: "Projects", content: "Passionate learner with aspirations in software engineering, fueled by a strong drive for problem-solving. Ready to embrace challenges in the ever-changing tech landscape. Dedicated to skill expansion and contributing to meaningful projects." },
        { title: "Education", content: "value" }
    ];

    const pageData = data[id] || { title: "Not Found", content: "No content available" };

    return (
        <section>
            <div className="outerContainer">
                <div className="innerContainer">
                    <h1 style={{textAlign: 'left'}}>{pageData.title}</h1>
                    <p>{pageData.content}</p>
                    {id === 1 && <ScrollPanel />}
                </div>
            </div>
            {id === 0 && <Panel />}
        </section>
    );
}