export default function BS() {
  return (
    <div className="text-white flex justify-center p-5">
      <div>
        <h1 className="text-5xl">Bikram Samvat Calendar</h1>
        <p className="my-3">
          For the time being refere to{" "}
          <a
            className="underline text-blue-500"
            href="https://nepalicalendar.rat32.com"
          >
            nepalicalendar.rat32.com
          </a>
        </p>
        <div className="">
          <iframe
            src="https://nepalicalendar.rat32.com/embed.php"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            style={{
              border: "none",
              overflow: "hidden",
              width: "700px",
              height: "700px",
              borderRadius: "5px",
              padding: "0px",
              margin: "auto",
            }}
            allowtransparency="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
