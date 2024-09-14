import { BASE_PATH } from "../constants";

export default function View() {
  return (
    <div className="flex grow items-center justify-center flex-col mt-8">
      <img src={`${BASE_PATH}/imgs/logo-circle.svg`} alt="logo" />
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight my-4">
        Sagal
      </h1>
      <p>v0.1.0</p>
      <p className="mt-4 text-xl leading-8">
        The Grammar of Code: A Framework for Semantics-Driven Programming
      </p>
    </div>
  );
}
