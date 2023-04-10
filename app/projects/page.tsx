import Image from "next/image";
import getProjects from "./ProjectList";
import doodle from "../../public/images/doodle.svg";
import projects_cover from "../../public/images/projects-cover.svg";
import Link from "next/link";

async function fetchRepoData(repoOwner: string, repoName: string) {
  const options = {
    headers: {
      Authorization: `Token ${process.env.GITHUB_TOKEN}`,
    },
    next: { revalidate: 60 },
  };

  try {
    const [repoResponse, languagesResponse] = await Promise.all([
      fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`, options),
      fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/languages`,
        options
      ),
    ]);

    if (repoResponse.ok && languagesResponse.ok) {
      const [repoData, languagesData] = await Promise.all([
        repoResponse.json(),
        languagesResponse.json(),
      ]);

      return {
        ...repoData,
        languages: languagesData,
      };
    } else if (
      repoResponse.status === 403 ||
      languagesResponse.status === 403
    ) {
      // Rate limit reached, handle the error appropriately
      throw new Error(
        "Rate limit reached. You may need to authenticate your request with a personal access token."
      );
    } else {
      throw new Error(
        `Request failed: ${repoResponse.statusText}, ${languagesResponse.statusText}`
      );
    }
  } catch (error: any) {
    throw new Error(`Failed to fetch repo data: ${error.message}`);
  }
}

export default async function ProjectsPage() {
  const projects = getProjects();
  const repos = await Promise.all(
    projects.map(async (project: any) => {
      return await fetchRepoData("arlbibek", project.title);
    })
  );
  return (
    <main className="text-gray-800 dark:text-gray-200 text-center lg:text-left p-5 dark:bg-slate-900 font-serif">
      <ProjectHeader />
      <section>
        <div className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0  max-w-5xl ">
          {repos.map(
            (repo, index) =>
              repo && (
                <div
                  id={repo.name}
                  key={index}
                  className={`relative transform duration-500 bg-transparent max-w-4xl mb-6  ${
                    projects[index].preview && "lg:mb-32"
                  }`}
                >
                  {projects[index].preview && (
                    <img
                      className="rounded-t-xl lg:rounded-xl"
                      src={projects[index].preview}
                      alt={`${repo.full_name} social preview image`}
                    />
                  )}
                  <div
                    className={`${
                      !projects[index].preview &&
                      "rounded-xl hover:scale-[1.01]"
                    } p-5 w-full drop-shadow-xl bg-white transition duration-500 dark:bg-gradient-to-r from-slate-800  to-slate-900 hover:to-slate-800 ${
                      projects[index].preview &&
                      "lg:max-w-lg  lg:absolute top-[60%] left-[30rem] lg:hover:-translate-y-4 rounded-b-xl lg:rounded-xl "
                    }`}
                  >
                    <div className="flex justify-between text-sm text-gray-400">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer noopener"
                        title={`View on GitHub${
                          repo.stargazers_count > 0 &&
                          ": " + repo.stargazers_count + " stars"
                        }`}
                      >
                        <i className="bi bi-github mr-2" />
                        <span className={`group hover:underline `}>
                          {repo.full_name}
                          <i
                            className={`bi bi-box-arrow-up-right pl-1  hidden group-hover:inline text-pink-400`}
                          ></i>
                        </span>
                      </a>
                      <p title={`pushed at: ${repo.pushed_at}`}>
                        {formatDate(repo.pushed_at)}
                      </p>
                    </div>
                    <div className="text-left">
                      <div className="flex justify-between">
                        <h2 className="text-3xl font-bold mt-4">
                          <a href={`#${repo.name}`}>{repo.name}</a>
                        </h2>
                      </div>
                      <p className="text-base my-4">{repo.description}</p>

                      <div className="flex pt-4 justify-between">
                        <p className="w-full font-mono">
                          {repo.stargazers_count > 0 && (
                            <span
                              className="inline-block 200 rounded-full px-1 py-1 font-bold text-sm"
                              title={
                                "⭐" +
                                repo.stargazers_count +
                                " stars on GitHub"
                              }
                            >
                              <i className="bi bi-star pr-1 " />
                              {repo.stargazers_count}
                            </span>
                          )}
                          {Object.keys(repo.languages).map((language) => (
                            <span
                              key={language}
                              className="inline-block rounded-full px-1 py-1 text-sm font-light text-gray-400 "
                            >
                              #{language.toLowerCase()}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </section>
      <ProjectFooter />
    </main>
  );
}

const ProjectHeader = () => {
  return (
    <section className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl">
          {"Projects I am "}
          <span className="text-violet-400">proud</span> of
        </h1>
        <p className="mt-6 my-8 text-lg sm:mb-12 dark:text-gray-100">
          I am proud to have worked on a number of projects that have had a
          positive impact on individuals and organizations
          <br className="hidden md:inline lg:hidden" />
        </p>
      </div>
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <Image
          src={projects_cover}
          alt="website designer cover"
          className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        />
      </div>
    </section>
  );
};

const ProjectFooter = () => {
  return (
    <footer>
      <div className="inline-flex justify-center items-center w-full">
        <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
        <div className="absolute left-1/2 px-4 bg-white -translate-x-1/2 dark:bg-slate-900">
          {/* open quote svg */}
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-700 dark:text-gray-300"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <section className="container p-4 py-6 mx-auto flex flex-col items-center justify-center  space-y-8 md:p-10 md:px-24 xl:px-48">
        <h1 className="text-5xl font-bold leading-none text-center">
          {"Let's collaborate!"}
        </h1>
        <p className="text-xl font-medium text-center">
          {
            "Are you looking for a like-minded partner to collaborate with on an exciting project or idea? Let's connect and see   what we can accomplish together. "
          }
        </p>
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
          <div className="flex flex-col sm:flex-row justify-center items-center pt-10">
            <input
              className="text-center w-full sm:w-3/5 p-3 h-min rounded-lg sm:rounded-r-none dark:text-gray-800 focus:outline-none bg-slate-100"
              type="email"
              value="contact@bibeka.com.np"
              readOnly
            />
            <a
              href="mailto:conatact@bibeka.com.np?subject=Let's collaborate!"
              className="w-2/5 p-3 mt-4 sm:mt-0 min-w-max cursor-pointer h-min rounded-lg sm:rounded-l-none  sm:w-1/3 bg-violet-500  text-white dark:text-gray-800"
            >
              Send Email
            </a>
          </div>
        </div>
        <div>
          <Image
            src={doodle}
            alt="doodle"
            className="p-6 h-52 md:h-64 "
            width={2000}
          />
        </div>
      </section>
    </footer>
  );
};

function formatDate(dateString: string) {
  const timestamp = Date.parse(dateString);
  const now = Date.now();
  const dt = now - timestamp;

  if (dt < 60 * 1000) {
    return "just now";
  } else if (dt < 60 * 60 * 1000) {
    const minutes = Math.floor(dt / (60 * 1000));
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (dt < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(dt / (60 * 60 * 1000));
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (dt < 7 * 24 * 60 * 60 * 1000) {
    const days = Math.floor(dt / (24 * 60 * 60 * 1000));
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
}

export async function generateStaticParams() {
  const projects = getProjects();
  const repos = await Promise.all(
    projects.map(async (project: any) => {
      return await fetchRepoData("arlbibek", project.title);
    })
  );
  return repos;
}
