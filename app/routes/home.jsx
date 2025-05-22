import {Welcome} from "../welcome/welcome";
import {Link} from "react-router";
// import {Form, useLoaderData, useSubmit} from "@remix-run/react ";

export function meta() {
  return [
    {title: "New React Router App"},
    {name: "description", content: "Welcome to React Router!"},
  ];
}

export default function Home() {
  return (
    <main>
      <div></div>
    </main>
  );
}
