import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error">
      <h1>Oops! Page Not Found</h1>
      <div className="button">
        Go back to{" "}
        <button>
          <Link href="/">Home</Link>
        </button>
      </div>
    </div>
  );
}