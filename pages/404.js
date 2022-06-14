// NEXT Components
import Link from "next/link";

// My Components
import Head from "../Components/Head";
import Footer from "../Components/Footer";
import { Master } from "../Components/UI";

export default function FourOhFour() {
  return (
    <>
      <Head
        title="404 - Page Not Found"
        keywords="Bibek, Aryal, Networking, IT, Security, Islington, College, Nepal, 404"
      />
      <Master>
        <main style={{ textAlign: "center" }}>
          <br />
          <br />
          <header>
            <h1>{getRand(["🙈", "🧐", "🎈", "🦢"])}</h1>
          </header>
          <br />
          <article
            style={{ textAlign: "center" }}
            title="You may have mistyped the URL or the page may have moved"
          >
            <br />
            <h2>Oops!</h2>
            <br />
            <p>{"we couldn't find the page you were looking for"}</p>
            <br />
            <p>
              <Link href="/">go to home</Link>
            </p>
          </article>
        </main>
        <Footer nav />
      </Master>
    </>
  );
}

function getRand(list) {
  // return a random item from a given list
  const random = Math.floor(Math.random() * list.length);
  return <>{list[random]}</>;
}
