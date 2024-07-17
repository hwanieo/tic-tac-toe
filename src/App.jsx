import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  return (
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
        <Player initialName={'Player 1'} symbol={'O'} />
        <Player initialName={'Player 2'} symbol={'X'} />
      </ol>
      <GameBoard />
    </div>
  );
}

export default App;
