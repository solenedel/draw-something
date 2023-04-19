export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="bg-red-300"> test</h2>

      <div
        className="w-screen h-screen bg-white flex justify-center mt-20
      ">
        <canvas
          width="750"
          height="750"
          className="border border-black rounded-md"
        />
      </div>
    </main>
  );
}
