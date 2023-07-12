export default function Home() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold py-4">CRUD Todo</h1>

      <form action="">
        <div>
          <label htmlFor="title" className="text-lg text-green-500">
            Title
          </label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            value={{}}
            className="border rounded w-full px-4 py-2 mt-2"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="title" className="text-lg text-green-500">
            Description
          </label>
          <br />
          <input
            type="text"
            name="description"
            id="description"
            value={{}}
            className="border rounded w-full px-4 py-2 mt-2"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 mt-6 py-1 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
