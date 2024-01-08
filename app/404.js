import Link from "next/link";

export default function Custom404() {
  return (
    <h1>
      404 - Page Not Found. Go back to{" "}
      <p>
        <Link href="/">home</Link>
      </p>
    </h1>
  );
}
