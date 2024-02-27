import '../App.css'
export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-10">
      <div className="loader"></div>
      <p>Loading questions...</p>
    </div>
  );
}
