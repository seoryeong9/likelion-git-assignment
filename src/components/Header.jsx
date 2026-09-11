import AttendanceButton from "./AttendanceButton";

function Header() {
  return (
    <header className="bg-neutral-900 px-8 py-5 text-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            LIKELION Git Lab
          </h1>

          <span className="text-sm text-neutral-400">
            Git Advanced Session
          </span>
        </div>

        <AttendanceButton />
      </div>
    </header>
  );
}

export default Header;
