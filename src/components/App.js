import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

const App = () => (
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <BooksList />
      <BooksForm />
    </main>
  </div>
);

export default App;
