export default function Search({ search, setSearch }) {
  return (
    <>
      <label htmlFor="">
        <strong>Search Channel :</strong>
      </label>{" "}
      <input
        type="text"
        placeholder="Type channel name here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
