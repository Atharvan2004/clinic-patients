import "./NewPatient";
import NewPatient from "./NewPatient";
import SearchBar from "./Search";
import "./newReport";
import NewReportForm from "./newReport";

export default function Home() {
  return (
    <>
      <nav>
        <a href="#first">
          <i className="far fa-user"></i>
        </a>
        <a href="#second">
          <i className="fas fa-briefcase"></i>
        </a>
        <a href="#third">
          <i className="far fa-file"></i>
        </a>
        <a href="#fourth">
          <i className="far fa-address-card"></i>
        </a>
      </nav>
      <div class="container">
        <section id="first">
          <SearchBar />
        </section>

        <section id="second">
          <NewPatient />
        </section>

        <section id="third">
          <NewReportForm />
        </section>

        <section id="fourth">
          <h1>Fourth</h1>
        </section>
      </div>
    </>
  );
}
