import './app.css';
import Button from './components/Button';
function App() {
  const buttonNames = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Instagram'];
  return (
    <>
      <main>
        <div className="card">
          <div className="topSide">
            <div className="profile">
              <img src="../public/avatar-jessica.jpeg" alt="profile" />
            </div>
            <div className="infoSide">
              <div className="name">Jessica Randall</div>
              <div className="country">London,United Kingdom</div>
            </div>
          </div>
          <div className="midSide">
            <p>'Front-end developer and avid reader.'</p>
          </div>
          <div className="bottomSide">
            {buttonNames.map((name, index) => (
              <Button key={index} name={name} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
