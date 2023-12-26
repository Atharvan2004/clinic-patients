import "../styles/SearchBar.css"

export default function SearchBar() {
  return (
    <div class="searchBox">
      <input class="searchInput" type="text" name="" placeholder="Search" />
      <button class="searchButton" href="#">
        <i class="material-icons">search</i>
      </button>
    </div>
  );
}
