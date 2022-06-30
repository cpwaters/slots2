import Link from "next/link";

export default function PostTemplate({ name, number, time }) {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <p>{time}</p>
      <p>
        <Link href="/">
          <a>Back</a>
        </Link>
      </p>
    </>
  );
}
