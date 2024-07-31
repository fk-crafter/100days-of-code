import Card from './components/Card';

const App = () => {
  const number = [3, 6, 2, 1, 9];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {numbers.map((number, index) => (
          <Card key={index} number={number} />
        ))}
      </div>
    </div>
  );
};

export default App;
