import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="site-header">
      <h1>Music Collection and Suggestions</h1>

      <nav aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/add">Add Music</Link>
      </nav>
    </header>
  );
}
