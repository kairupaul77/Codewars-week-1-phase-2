var Leaderboard = ({ leaders }) => {
    return (
        <div>
            {leaders.map((user) => (
                <CodewarsLink user={user} key={user} />
            ))}
        </div>
    );
};

// Main App component
const App = () => {
    const leaders = ['Sch3lp', 'nplus', 'noLan', 'jhoffner', 'OverZealous'];

    return (
        <div>
            {myHeader}
            <Leaderboard leaders={leaders} />
        </div>
    );
};