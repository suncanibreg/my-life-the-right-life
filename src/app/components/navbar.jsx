export default function Navbar1() {
  return (
    <ul
      className="w-full flex flex-col justify-evenly items-center m-0 p-0 list-none border-none
        bg-orange-500 sm:flex-row sm:justify-end"
    >
      <li className="m-1 basis-36 bg-lime-700 rounded border-x-[1px] border-y-[1px] border-solid border-amber-900">
        <a
          href="#"
          className="focus:text-blue-200 block px-[10px] py-[10px] text-red-300 no-underline"
        >
          Home
        </a>
      </li>
      <li className="m-1 ml-2 basis-36 bg-lime-700 rounded border-x-[1px] border-y-[1px] border-solid border-amber-900">
        <a
          href="#"
          className="block px-[10px] py-[10px] text-red-300 no-underline"
        >
          News
        </a>
      </li>
      <li className="m-1 ml-2 basis-36 bg-lime-700 rounded border-x-[1px] border-y-[1px] border-solid border-amber-900">
        <a
          href="#"
          className="block px-[10px] py-[10px] col text-red-300 no-underline"
        >
          Contact
        </a>
      </li>
      <li className="m-1 ml-2 basis-36 bg-lime-700 rounded border-x-[1px] border-y-[1px] border-solid border-amber-900">
        <a
          href="#"
          className="block px-[10px] py-[10px] col text-red-300 no-underline"
        >
          About
        </a>
      </li>
    </ul>
  );
}

/*

ul {
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 180px;
  border: 0.01px solid rgb(83, 48, 15);
  border-radius: 7px;
  background: orange linear linear-gradient();
}

ul li {
  margin: 4px;
  background-color: rgb(50, 73, 51);
  border-radius: 6px;
  border: 1px solid salmon;
}

li a {
  display: block;
  padding: 10px 18px;
  color: antiquewhite;
  background-color: rgb(50, 73, 51);
  border-radius: 8px;
  text-decoration: none !important;
}

li a.active {
  color: #668353;
  background-color: antiquewhite;
}

li a:hover:not(.active) {
  color: #668353;
  background-color: antiquewhite;
}

@media screen and(min-width: 400px) {
  ul {
    flex-direction: row;
    -ms-flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
}

@media screen and(min-width: 780px) {
  .navCont {
    width: 100vw;
  }

  ul {
    justify-content: space-around;
    width: 80%;
  }
}

@media screen and (min-width: 1024) {
  ul {
    justify-content: space-between;
  }
}
*/
