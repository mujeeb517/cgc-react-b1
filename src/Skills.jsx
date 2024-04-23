
function Skills() {
    const skills = ['Java', 'JavaScript', 'Python', 'C#', 'Rust', 'Clojure'];

    return <ul>
        { skills.map(skill => <li>{skill}</li>) }
    </ul>
};

export default Skills;