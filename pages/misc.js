// Google AIP
import { google } from "googleapis";

// Custom Components
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import { Master } from "../Components/UI";

// CSS
import styles from "../styles/Misc.module.css";

export async function getServerSideProps() {
  // auth
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Query
  const ranges = [`projects!A1:B`, `books!A1:B`, `shows!A1:B`, `websites!A1:B`];
  const response = await sheets.spreadsheets.values.batchGet({
    spreadsheetId: process.env.SHEET_ID,
    ranges,
  });

  // result
  const data = response.data.valueRanges;

  return {
    props: {
      data,
    },
  };
}

export default function Misc(response) {
  const projects = response.data[0].values;
  const books = response.data[1].values;
  const shows = response.data[2].values;
  const websites = response.data[3].values;

  return (
    <>
      <Head
        title="Miscellaneous page - Bibek Aryal"
        keywords="bibek, aryal, projects, books, shows, useful, websites"
        descriptions="A miscellaneous page including ranging useful stuff on projects, few books to read, boring movies/tv, some useful websites and more."
      />
      <Master>
        <main className={styles.main}>
          <header>
            <h1>Congratulations!</h1>
            <p>{"You've entered the miscellaneous page. 🥳"}</p>
            <p>
              <code>{"enjoy :)"}</code>
            </p>
          </header>
          <article>
            <Card id={"projects"} icon={"👨‍💻"} data={projects} />
            <Card id={"books"} icon={"📚"} data={books} />
            <Card id={"shows"} icon={"📺"} data={shows} />
            <Card id={"websites"} icon={"🌐"} data={websites} />
          </article>
        </main>
        <Footer scroll nav />
      </Master>
    </>
  );
}

const Card = (props) => {
  const master = props.data;
  const title = master[0][0];
  return (
    <div className={styles.card} id={props.id}>
      <h2>
        <a href={`#${props.id}`}>{props.icon}</a>
        {title}
      </h2>
      <ul>
        {master.map((data, id) => (
          <>
            {id != 0 &&
              data.length != 0 &&
              (data == "<br />" ? (
                <br />
              ) : (
                <li
                  key={id}
                  style={{
                    backgroundImage:
                      props.id == "projects" ? "url(/github.png)" : null,
                  }}
                >
                  <a href={data[1]}>{data[0]}</a>
                  {data[1] && (
                    <a href={data[1]} target="_blank" rel="noreferrer">
                      <i className="bi bi-box-arrow-up-right" />
                    </a>
                  )}
                </li>
              ))}
          </>
        ))}
      </ul>
    </div>
  );
};
