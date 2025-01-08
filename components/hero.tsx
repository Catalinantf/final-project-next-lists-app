export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="sr-only">App de listas</h1>
      <h2>Welcome page</h2>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Soy el Hero la app de listas{" "}
      </p>
    </div>
  );
}
