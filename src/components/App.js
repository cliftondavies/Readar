import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

const App = () => (
  <div className="content-wrapper">
    <header>
      <Navbar />
    </header>

    <main className="main">
      <BooksList />
      <BooksForm />
    </main>
  </div>
);

export default App;
