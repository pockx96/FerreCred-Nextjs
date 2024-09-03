import { Input } from "~/components/ui/input";

function SearchIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    );
  }


export default function SearchBox  ({
    setSearchTerm,
  }: {
    setSearchTerm: (term: string) => void;
  }) {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div className="flex h-3/4 w-full items-center space-x-2 rounded-lg border border-gray-300 bg-gray-50 px-3.5 py-2 dark:bg-gray-900">
        <SearchIcon className="h-4 w-4" />
        <Input
          type="search"
          placeholder="Search"
          className="w-full border-0 font-semibold"
          onChange={handleSearchChange}
        />
      </div>
    );
  }