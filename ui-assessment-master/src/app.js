import './styles/app.css';
import AccountOverview from './components/AccountOverview';

function App() {
  const accountOverviewStub = {
    name: 'John Smith',
    details: {
      balance: 1234.56,
      accountNumber: '12345678',
    },
    transactions: [
      { id: 1, date: '2023-01-01', amount: -100.00, description: 'Grocery Shopping' },
      { id: 2, date: '2023-01-02', amount: -50.00, description: 'Gas Station' },
      // mais transações
    ],
    supportContact: {
      name: 'John Smith',
      email: 'john.smith@feefo.com'
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    }
  };

  return (
    <div className="App">
      <AccountOverview data={accountOverviewStub} />
    </div>
  );
}

export default App;
