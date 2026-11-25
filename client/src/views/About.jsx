export default function About() {
  return (
    <main className="page-shell content-page">
      <section aria-labelledby="about-heading">
        <h2 id="about-heading">About this project</h2>
        <p>
          This application addresses the problem of folks having a very narrow
          music taste, and struggling to find new artists! This can be used by
          anyone, as music can be relatively universal across the world. This
          will be a collection of mp3s as well as artist info.
        </p>
      </section>

      <section aria-labelledby="collection-table-heading">
        <h2 id="collection-table-heading">Collection overview</h2>
        <table>
          <caption>Music collection categories and examples</caption>
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Examples</th>
              <th scope="col">Featured genre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Tiny Desk Set</th>
              <td>Thee Sacred Souls, Ca7riel and Paco Amoroso</td>
              <td>Soul/R&amp;B and Indie/Alternative</td>
            </tr>
            <tr>
              <th scope="row">Albums</th>
              <td>08 Jetta</td>
              <td>Jazz Rap</td>
            </tr>
            <tr>
              <th scope="row">Video Games</th>
              <td>Oṃ Maṇi Padme Hūṃ, part II and The Rain Formerly Known As Purple</td>
              <td>Prog Rock</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
