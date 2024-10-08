import { BASE_PATH } from "../constants";

export default function View() {
  return (
    <div className="flex flex-row items-center">
      <img
        src={`${BASE_PATH}/imgs/logo-circle.svg`}
        alt="logo"
        height={24}
        width={24}
      />
      <b className="mx-2">Sagal</b>
    </div>
  );
}
