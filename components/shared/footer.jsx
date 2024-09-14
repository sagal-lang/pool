export default function View() {
  return (
    <span>
      {new Date().getFullYear()} ©{" "}
      <a href="https://github.com/sagal-lang" target="_blank">
        Sagal
      </a>
      .
    </span>
  );
}
