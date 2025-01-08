import router from "next/router";

export default function SuggestionsDropdown({
  inputValue,
  suggestions,
}: {
  inputValue: string;
  suggestions: any;
}) {
  const handleSuggestionClick = (suggestion: any) => {
    router.push(`/files/${suggestion.id}`);
  };
  return (
    <>
      {suggestions.length > 0 && inputValue.length > 0 && (
        <div className=" absolute z-10  bg-white border border-gray-300 rounded-md shadow-md">
          {suggestions.map((suggestion: any, index: any) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.title} ({suggestion.category})
            </div>
          ))}
        </div>
      )}
      {suggestions.length == 0 && inputValue.length > 0 && (
        <div className="absolute z-10  bg-white border border-gray-300 rounded-md shadow-md px-4 py-2">
          No se encontraron archivos.
        </div>
      )}
    </>
  );
}
