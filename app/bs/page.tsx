export default function BS() {
  return (
    <div className="text-white flex justify-center p-3">
      <div>
        <p className="my-1">
          {"Bikram Samvat Calendar: "}
          <a
            className="underline text-blue-500"
            href="https://nepalicalendar.rat32.com"
          >
            nepalicalendar.rat32.com
          </a>
        </p>
        <div className="flex">
          <iframe
            src="https://nepalicalendar.rat32.com/embed.php"
            style={{
              border: "none",
              overflow: "hidden",
              width: "700px",
              height: "700px",
              borderRadius: "5px",
              padding: "0px",
              margin: "auto",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
