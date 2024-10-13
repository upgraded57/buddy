import Loader from "./Loader";

export default function Skeleton() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-3">
      <Loader />
      <p>Loading...</p>
    </div>
  );
}
